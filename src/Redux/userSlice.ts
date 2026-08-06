import { createSlice } from "@reduxjs/toolkit";
import type { userType } from "../Types";

export const defaultUser: userType = {
    id: "",
    username: "",
    isOnline: false,
    email: "",
    img: "",
    creationTime: "",
    lastSeen: "",
    bio: "",
}

const initialState = {
    // user: [],
    currentUser: defaultUser,
    // currentSelectedUser: null
}

const userSlice = createSlice({
    name: "username",
    initialState,
    reducers: {
        setUser: (state, action) => {
            console.log(action);
            // set logedin user
            // state.currentUser = action.payload
        },
        setUsers: (state, action) => {
            // set all users 
        }
    }
});

export const { setUser, setUsers } = userSlice.actions;

export default userSlice.reducer