const { UserActionsTypes } = require("./userActionTypes");

export const setCurrentUser = user => ({
    type: UserActionsTypes.SET_CURRENT_USER,
    payload: user
})  