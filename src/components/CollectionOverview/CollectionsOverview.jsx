import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import './CollectionsOverview.scss';

import { selectShopCollectionsForPreview } from '../../redux/shop/shopSelectors';
import CollectionPreview from '../CollectionPreview/CollectionPreview';

const CollectionsOverview = props => {
    const {collections} = props;
    return (
        <div className='collections-overview'>
            {
                collections.map(({ id, ...otherProps }) => (
                    <CollectionPreview key={id} {...otherProps} />
                ))
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);