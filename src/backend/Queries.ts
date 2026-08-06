import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "./Firebase";
import { toastError } from "../utils/toast";
import { CatchErr } from "../utils/catchErr";
import type { authDataType, setLoadingType, userType } from "../Types";
import type { NavigateFunction } from "react-router-dom";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { defaultUser } from "../Redux/userSlice";
import type { AppDispatch } from "../Redux/store";
import { useDispatch } from 'react-redux';

// Collection names 
const usersColl = "users";
const tasksColl = "tasks";
const taskListColl = "taskList";
const messagesColl = "messages";

// Register or Signup new User 
export const BE_signUp = async (
    data: authDataType,
    setLoading: setLoadingType,
    reset: () => void,
    gotTo: NavigateFunction,
    dispatch: AppDispatch) => {
        const { email, password, confirmPassword } = data;
        
        setLoading(true);
        if (email && password) {
        if (password === confirmPassword) {
            createUserWithEmailAndPassword(auth, email, password)
                .then(({ user }) => {

                    // TODO create user image 

                    const userInfo = addUserToCollection(
                        user.uid,
                        user.email || "",
                        user.email?.split("@")[0] || "",
                        "imageLink"
                    );

                    // TODO set user info in store and localStorage 

                    dispatch(setUser(userInfo))

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

export const BE_signIn = (
    data: authDataType,
    setLoading: setLoadingType,
    reset: () => void,
    gotTo: NavigateFunction,
    dispatch: AppDispatch) => {
    const { email, password } = data;

    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
        .then(({ user }) => {

            // get user info




            // TODO Set user info in store and also local storage
            const userInfo =  getUserInfo(user.uid)
            dispatch(setUser(userInfo))


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
        creationTime: serverTimestamp(),
        lastSeen: serverTimestamp(),
        bio:`Hi my name is ${username}, thanks to Desmond I understand React and Typescript now.`
    });

   
    return getUserInfo(id);
};

const getUserInfo = async (id: string): Promise<userType> => {
    const userRef = doc(db, usersColl, id);
    const user = await getDoc(userRef);

    if(user.exists()){
        const {img, isOnline, username, email, bio, creationTime, lastSeen} = user.data();

        return {
            id: user.id,
            img,
            isOnline,
            username,
            email,
            bio,
            creationTime,
            lastSeen
        }
    }else {
        toastError("getUserInfo: User not found");
        return defaultUser
    }
}

