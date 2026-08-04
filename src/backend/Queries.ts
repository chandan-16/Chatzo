import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Firebase";

export const BE_signUp = (data : {email: string, password: string, confirmPassword: string}) =>
     {
        const {email, password, confirmPassword} = data;

        if(email && password){
            if(password === confirmPassword){
                createUserWithEmailAndPassword(auth, email, password)
                .then(userCred => {
                    console.log(userCred)
                })
                    
                .catch(err => console.log(err))
            }else console.log("Password must match!")
        } else console.log("Fileds shouldn't be left empty!");
     };