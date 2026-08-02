import { Outlet } from "react-router-dom";
import Header from "../components/Header";

type Props = {};

export default function Layout({}: Props) {
  return (
    <div className="flex flex-col bg-hero bg-cover bg-center h-screen w-full">
      <Header />
      <div className="bg-patter max-h-[90%] overflow-y-scroll">
        <Outlet />
      </div>
    </div>
  );
}
