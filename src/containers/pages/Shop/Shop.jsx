import React from 'react';
import { Route } from 'react-router-dom';

import './Shop.scss';

import { connect } from 'react-redux';
import { fetchCollectionsStartAsync } from '../../../redux/shop/shopActions';
import CollectionsOverviewContainer from '../../../components/CollectionOverview/CollectionsOverviewContainer';
import CollectionPageContainer from '../Collection/CollectionContainer';

class ShopPage extends React.Component {
    componentDidMount() {
        const {fetchCollectionsAsync} = this.props;

        fetchCollectionsAsync();
    }

    render() {
        const { match } = this.props;
        return (
            <main className='shop-page'>
                <Route 
                    exact path={`${match.path}`}
                    component={CollectionsOverviewContainer}
                />
                <Route 
                    path={`${match.path}/:collectionId`}
                    component={CollectionPageContainer}
                />
            </main>)
    }
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionsAsync: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(null, mapDispatchToProps)(ShopPage);