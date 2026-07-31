import { Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import { LoginPage } from "./pages/LoginPage";
import ListPage from "./pages/ListPage";
import ChatPage from "./pages/ChatPage";
import ProfilePage from "./pages/ProfilePage";
import Layout from "./pages/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/auth" element={<LoginPage />} />
        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<ListPage />} />
          <Route path="chat" element={<ChatPage />} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </>
  );
}

export default App;
