import React from 'react';
import {Route} from 'react-router-dom';

import './Shop.scss';

import CollectionsOverview from '../../../components/CollectionOverview/CollectionsOverview';
import CollectionPage from '../Collection/Collection';

const ShopPage = (props) => {
    const {match} = props;
    return (
        <main className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionsOverview} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
        </main>)
}

export default ShopPage;