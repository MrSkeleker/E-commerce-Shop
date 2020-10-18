import {createSelector} from 'reselect';

const selectShop = state => state.shop;

export const selectShopSections = createSelector(
    [selectShop],
    shop => shop.sections
)

export const selectShopCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectShopCollectionsForPreview = createSelector(
    [selectShopCollections],
    collections => collections ? Object.values(collections) : []
)

export const selectShopCollection = collectionUrlParam => createSelector(
    [selectShopCollections],
    collections => collections ? collections[collectionUrlParam] : null
)