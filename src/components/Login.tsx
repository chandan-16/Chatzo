import { useState } from "react";
import Button from "./Button";
import { Input } from "./Input";
import { BE_signIn, BE_signUp } from "../backend/Queries";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../Redux/store";
import type { authDataType } from "../Types";

export const Login = () => {
  const [login, setLogin] = useState<boolean>(true);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [signUpLoading, setSignUpLoading] = useState(false);
  const [signInLoading, setSignInLoading] = useState(false);
  const goTo = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const handleSignUp = () => {
    const data = { email, password, confirmPassword };
    auth(data, BE_signUp, setSignUpLoading);
  };

  const handleSignIn = () => {
    const data = { email, password };
    auth(data, BE_signUp, setSignInLoading);
  };

  const auth = (
    data: authDataType,
    func: any,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  ) => {
    (func(data), setLoading, reset, goTo, dispatch);
  };

  const reset = () => {
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <>
      <div className="w-full md:w-[450px]">
        <h1 className="text-white text-center font-bold text-4xl md:text-6xl mb-10">
          {login ? "Login" : "Register"}
        </h1>

        <div className="bg-white flex flex-col w-full gap-3 p-6 min-h-[150px] rounder-xl rounded-xl drop-shadow-xl">
          <Input
            name="name"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {!login && (
            <Input
              name="confirm-password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          )}

          {login ? (
            <>
              <Button
                onClick={handleSignIn}
                text="Login"
                loading={signInLoading}
              />
              <Button
                onClick={() => setLogin(false)}
                text="Register"
                secondary
              />
            </>
          ) : (
            <>
              <Button
                onClick={handleSignUp}
                text="Register"
                loading={signUpLoading}
              />
              <Button onClick={() => setLogin(true)} text="Login" secondary />
            </>
          )}
        </div>
      </div>
    </>
  );
};
