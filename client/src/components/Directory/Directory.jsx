import React from 'react';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';

import './Directory.scss';

import { selectShopSections } from '../../redux/shop/shopSelectors';
import MenuItem from '../MenuItem/MenuItem';

const Directory = (props) => {
    const {sections} = props;
    return (
        <div className='directory-menu'>
            {sections.map(({ id, ...otherProps }) => (
                <MenuItem key={id} {...otherProps} />
            ))}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    sections: selectShopSections
})

export default connect(mapStateToProps)(Directory);