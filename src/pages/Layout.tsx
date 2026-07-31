import { Outlet } from "react-router-dom";

type Props = {};

export default function Layout({}: Props) {
  return (
    <>
      <h1>Header</h1>
      <Outlet />
    </>
  );
}
