import ShopActionTypes from "./shopActionTypes";

export const updateShopCollections = (collectionsMap) => ({
    type: ShopActionTypes.UPDATE_COLLECTIONS,
    payload: collectionsMap
})