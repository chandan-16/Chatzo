import Button from "./Button"
import { Input } from "./Input"

export const Login = () => {
  return (
    <>
        <div className="w-full md:w-[450px]">
            <h1 className='text-white text-center font-bold text-4xl md:text-6xl mb-10'>Login</h1>
            <div className="bg-white flex flex-col w-full gap-3 p-6 min-h-[150px] rounder-xl rounded-xl drop-shadow-xl">
                <Input name="name" type="email" />
                <Input name="password" type="password"/>
                <Input name="confirm-password" type="password"/>
                <Button text="Login"/>
                <Button text="Register" secondary />

            </div>
        </div>    
    </>
  )
}
