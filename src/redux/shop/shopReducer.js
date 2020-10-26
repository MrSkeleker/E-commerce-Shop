import ShopActionTypes from "./shopActionTypes";

const INITIAL_STATE = {
    sections: [
        {
            title: 'hats',
            linkUrl: '/hats',
            imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
            id: 1
        },
        {
            title: 'jackets',
            linkUrl: '/jackets',
            imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
            id: 2
        },
        {
            title: 'sneakers',
            linkUrl: '/sneakers',
            imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
            id: 3
        },
        {
            title: 'womens',
            linkUrl: '/womens',
            imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
            size: 'large',
            id: 4
        },
        {
            title: 'mens',
            linkUrl: '/mens',
            imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
            size: 'large',
            id: 5
        }
    ],
    collections: null,
    isFetching: false,
    errorMessage: undefined
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ShopActionTypes.PENDING_COLLECTIONS:
            return {
                ...state,
                isFetching: true
            }
        case ShopActionTypes.SUCCESS_COLLECTIONS:
            return {
                ...state,
                collections: action.payload,
                isFetching: false
            }
        case ShopActionTypes.FAILURE_COLLECTIONS:
            return {
                ...state,
                errorMessage: action.payload,
                isFetching: false
            }
        default:
            return state;
    }
}

export default shopReducer;