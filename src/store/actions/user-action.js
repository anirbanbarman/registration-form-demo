

export const USER_DETAILS_LOAD = () => {
    return (dispatch) => {
        const { userName, password } = JSON.parse(localStorage.getItem("userDetails"));
        dispatch(USER_DETAILS_LOADED({ userName, password }))
    }


}


export const USER_DETAILS_LOADED = (userDetails) => {
    return { type: "PIC_DATA_LOADED", payload: userDetails }
}




export const PIC_DATA_STORE = (userDetails) => {
    return { type: "PIC_DATA_STORE", payload: userDetails }
}
