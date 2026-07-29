import { Login } from '../components/Login'

export const LoginPage = () => {
  return (
    <div className='  h-[100vh] flex items-center justify-center p-10 '>
      <Login />

      <div className="h-full w-full bg-gradient-to-r opacity-70 from-my-blue to-my-pink absolute top-0 -z-10"></div>

      <div className="h-full w-full bg-[url('https://i.pinimg.com/736x/8c/98/99/8c98994518b575bfd8c949e91d20548b.jpg')] absolute bg-pattern -z-20 top-0"></div>
    </div>
  )
}
