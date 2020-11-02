import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';

import './Shop.scss';

import { connect } from 'react-redux';
import CollectionsOverviewContainer from '../../../components/CollectionOverview/CollectionsOverviewContainer';
import CollectionPageContainer from '../Collection/CollectionContainer';
import { fetchCollectionsStart } from '../../../redux/shop/shopActions';

const ShopPage = (props) => {
    const { fetchCollectionsStart, match } = props;

    useEffect(() => {
        fetchCollectionsStart();
    }, [fetchCollectionsStart])

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
        </main>
    )
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(null, mapDispatchToProps)(ShopPage);