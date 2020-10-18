import React from 'react';
import { Route } from 'react-router-dom';

import './Shop.scss';

import CollectionsOverview from '../../../components/CollectionOverview/CollectionsOverview';
import CollectionPage from '../Collection/Collection';
import { firestore, convertCollectionsSnapshotToMap } from '../../../utils/firebase.utils';
import { shopCollectionsName } from '../../../constants';
import { connect } from 'react-redux';
import { updateShopCollections } from '../../../redux/shop/shopActions';
import withSpinner from '../../../components/hoc/withSpinner';

const CollectionsOverviewWithSpinner = withSpinner(CollectionsOverview);
const CollectionPageWithSpinner = withSpinner(CollectionPage);

class ShopPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionsRef = firestore.collection(shopCollectionsName);
        this.unsubscribeFromSnapshot = collectionsRef.onSnapshot(async collectionSnapShot => {
            const collectionsMap = convertCollectionsSnapshotToMap(collectionSnapShot);
            updateCollections(collectionsMap);
            this.setState({isLoading: false});
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromSnapshot();
    }

    render() {
        const { match } = this.props;
        const { isLoading } = this.state;
        return (
            <main className='shop-page'>
                <Route exact path={`${match.path}`}
                    render={(props) => (
                    <CollectionsOverviewWithSpinner isLoading={isLoading} {...props}/>)}
                />
                <Route path={`${match.path}/:collectionId`}
                    render={(props) => (
                    <CollectionPageWithSpinner isLoading={isLoading} {...props}/>)}
                />
            </main>)
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateShopCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);