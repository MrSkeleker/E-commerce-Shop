import React from 'react';

import './Shop.scss';

import { SHOP_DATA } from './Shop.data';
import CollectionPreview from '../../../components/CollectionPreview/CollectionPreview';

class ShopPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }

    render(){
        const {collections} = this.state;
        return (
            <main className='shop-page'>
                {
                    collections.map(({id, ...otherProps}) => (
                        <CollectionPreview key={id} {...otherProps}/>
                    ))
                }
            </main>
        )
    }
}

export default ShopPage;