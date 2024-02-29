export const REGISTER_USER_REQUEST = "REGISTER_USER_REQUEST";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_FAILURE = "REGISTER_USER_FAILURE";


export const registerRequest = ()=>({

    type : REGISTER_USER_REQUEST,
});

export const registerSuccess = ()=> ({

    type :REGISTER_USER_SUCCESS,
});

export const registerFailure = (error) => ({

    type:REGISTER_USER_FAILURE,
    payload : error,
});
 