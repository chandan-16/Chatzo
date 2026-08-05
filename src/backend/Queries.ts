import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "./Firebase";
import { toastError } from "../utils/toast";
import { CatchErr } from "../utils/catchErr";
import type { authDataType, setLoadingType } from "../Types";
import type { NavigateFunction } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";

// Collection names 
const usersColl = "users";
const tasksColl = "tasks";
const taskListColl = "taskList";
const messagesColl = "messages";

// Register or Signup new User 
export const BE_signUp = (data: authDataType, setLoading: setLoadingType, reset: () => void, gotTo: NavigateFunction) => {
    const { email, password, confirmPassword } = data;

    setLoading(true);
    if (email && password) {
        if (password === confirmPassword) {
            createUserWithEmailAndPassword(auth, email, password)
                .then(({ user }) => {
                    const userInfo = addUserToCollection(user.uid)
                    console.log(user)
                    setLoading(false);
                    reset();
                    // Got to Dash Board 
                    gotTo("/dashboard")
                })

                .catch((err) => { CatchErr(err); setLoading(false) })
        } else toastError("Password must match!")
    } else toastError("Fields shoudn't be left empty! ");
};

export const BE_signin = (data: authDataType, setLoading: setLoadingType, reset: () => void, gotTo: NavigateFunction) => {
    const { email, password } = data;

    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
        .then(({ user }) => {
            console.log(user)
            setLoading(false)
            reset();

            // Go to Dashboard
            gotTo("/dashboard")
        }).catch(err => {
            CatchErr(err)
            setLoading(false)
        })
}

const addUserToCollection = async (id: string, email: string, username: string, img: string) => {
    await setDoc(doc(db, usersColl, id), {
        isOnLine: true,
        img,
        username,
        email,
        creationTime:
    })
}