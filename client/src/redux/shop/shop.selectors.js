import {createSelector} from 'reselect'

const selectShop = state => state.shop;


export const selectCollections = createSelector(
    [selectShop],
    function(shop) { return shop.collections}
)
export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => collections ? Object.keys(collections).map(key=> collections[key]) : []

)
export const selectCollection = collectionUrlParam => {

    return createSelector(
        [selectCollections],
        collections => {
        return collections ? collections[collectionUrlParam] : null
        }
    )
}

export const selectIsCollectionFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
)

export const selectIsCollectionsLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections
)