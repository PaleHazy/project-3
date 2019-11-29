import {createSelector} from 'reselect'

const selectShop = state => state.shop;

const COLLECTION_ID_MAP = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    womens: 4,
    mens: 5
}

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollection = collectionUrlParam => {

    return createSelector(
        [selectCollections],
        collections => {
        
        return collections.find(
            collection => {
                
                return collection.id === COLLECTION_ID_MAP[collectionUrlParam]
            })
        
        }
    )
}