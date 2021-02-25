const initialState = {
 userName:"",
 password:"",
 email:"",
 phone:""
};

export const reducer = (state = initialState, action) => {

    switch (action.type) {

        case "PIC_DATA_LOADED":
            return {
                ...state,
               userName:action.payload.userName,
               password:action.payload.password,
               email:action.payload.email,
               phone:action.payload.phone
            };
        case "PIC_DATA_STORE":
            localStorage.setItem("userDetails", JSON.stringify(action.payload))
            break;
       
        default:
            return state; 
    }

};