import { toastError } from "./toast"

export const CatchErr = (error:{code?: string}) => {
    const { code } = error
        if(code === "auth/invalid-email") toastError("invalid Email")
        else if(code === "auth/weak-password") toastError("password should be atleast 6 characters")
        else if(code === "auth/user-not-found") toastError("user not found.")
        else if(code === "auth/email-already-in-use") toastError("email already exists")
        else if(code === "auth/wrong-password") toastError("wrong Password")
        else if(code === "auth/requires-recent-login") toastError("logout and login before updating your profile")
        else if(code === "unavailable") toastError("firebase client is offline")
    else if(code === "auth/invalid-login-credentials") toastError("invalid credentials")
        else toastError("An error occured")
        console.log(error, error.code);
}