import { toastError } from "./toast"

export const CatchErr = (error:{code?: string}) => {
    const { code } = error
        if(code === "auth/invalid-email") toastError("Invalid Email")
        else if(code === "auth/weak-password") toastError("Password should be atleast 6 characters")
        else if(code === "auth/user-not-found") toastError("User not found.")
        else if(code === "auth/email-already-in-use") toastError("Email already exists")
        else if(code === "auth/wrong-password") toastError("Wrong Password")
        else if(code === "auth/requires-recent-login") toastError("Logout and login before updating your profile")
        else if(code === "unavailable") toastError("Firebase client is offline")
        else toastError("An error occured")
        console.log(error, error.code);
}