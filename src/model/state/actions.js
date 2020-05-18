
export const TYPES = {
    SET_USER_DATA: 'SET_USER_DATA',
    SET_HISTORY: 'SET_HISTORY'
}

export const setUserData = userData => {
    return { type: TYPES.SET_USER_DATA, payload: userData }
}

export const setAuthStatus = status => {
    return { type: TYPES.SET_AUTH_STATUS, payload: status }
}

export const setHistory = history => {
    return { type: TYPES.SET_HISTORY, payload: history}
}