import React from 'react';
import CollectionItem from '../CollectionItem/CollectionItem';

import './CollectionPreview.scss';

const CollectionPreview = (props) => {
    const { title, items } = props;
    return (
        <div className='collection-preview'>
            <h2 className='title'>{title.toUpperCase()}</h2>
            <div className='preview'>
                {
                    items.slice(0, 4).map((item) => (
                        <CollectionItem key={item.id} item={item}/>
                    ))
                }
            </div>
        </div>)
}

export default CollectionPreview;