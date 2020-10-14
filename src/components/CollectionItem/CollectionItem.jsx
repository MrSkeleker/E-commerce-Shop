import React from 'react';
import { connect } from 'react-redux';

import './CollectionItem.scss';

import CustomButton from '../CustomButton/CustomButton';
import { addCartItem } from '../../redux/cart/cartActions';

const CollectionItem = (props) => {
    const { item, addCartItem } = props;
    const { name, price, imageUrl } = item;
    return (
        <div className='collection-item'>
            <div
                className='image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>${price}</span>
            </div>
            <CustomButton onClick={() => addCartItem(item)} inverted>Add to cart</CustomButton>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addCartItem: item => dispatch(addCartItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);