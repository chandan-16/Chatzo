import { Outlet } from "react-router-dom";
import Header from "../components/Header";

type Props = {};

export default function Layout({}: Props) {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
