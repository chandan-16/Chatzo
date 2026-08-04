import { useState } from "react";
import Button from "./Button";
import { Input } from "./Input";
import { BE_signUp } from "../backend/Queries";

export const Login = () => {
  const [login, setLogin] = useState<boolean>(true);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const handleSignUp = () => {
    const data = { email, password, confirmPassword };
    BE_signUp(data);
  };

  const handleSignIn = () => {
    const data = { email, password };
    console.log(data);
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

          {/* {login ? (
            <>
              <Button onClick={handleSignUp} text="Login" />
              <Button
                onClick={() => setLogin(false)}
                text="Register"
                secondary
              />
            </>
          ) : (
            <>
              <Button onClick={handleSignIn} text="Register" />
              <Button onClick={() => setLogin(true)} text="Login" secondary />
            </>
          )} */}

          {login ? (
            <>
              <Button onClick={handleSignIn} text="Login" />
              <Button
                onClick={() => setLogin(false)}
                text="Register"
                secondary
              />
            </>
          ) : (
            <>
              <Button onClick={handleSignUp} text="Register" />
              <Button onClick={() => setLogin(true)} text="Login" secondary />
            </>
          )}
        </div>
      </div>
    </>
  );
};
