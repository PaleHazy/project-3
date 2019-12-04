import { UserActionTypes } from './user.types'

export const  setCurrentUser = user => {
    return({
        currentUser: UserActionTypes.SET_CURRENT_USER,
        payload: user
    })
    
}