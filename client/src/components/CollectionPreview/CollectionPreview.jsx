import React from 'react';
import { Link } from 'react-router-dom';

import './CollectionPreview.scss';

import CollectionItem from '../CollectionItem/CollectionItem';

const CollectionPreview = (props) => {
    const { title, items, routeName } = props;
    return (
        <div className='collection-preview'>
            <h2 className='title'>
                <Link to={`/shop/${routeName}`}>
                    {title.toUpperCase()}
                </Link>
            </h2>
            <div className='preview'>
                {
                    items.slice(0, 4).map((item) => (
                        <CollectionItem key={item.id} item={item} />
                    ))
                }
            </div>
        </div>)
}

export default CollectionPreview;