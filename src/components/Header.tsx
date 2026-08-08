import Logo from "../assets/logo.png";
import AddListBoard from "./AddListBoard";
import Icon from "../components/Icon";
import { BsChatLeftFill } from "react-icons/bs";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="flex flex-wrap sm:flex-row gap-5 items-center justify-between drop-shadow-md bg-gradient-to-r from-my-blue to-my-pink px-5 py-5 md:py-2 text-white">
      <img
        src={Logo}
        alt="Chatzo Logo"
        className="w-[60px] drop-shadow-md cursor-pointer"
      />

      <div className="flex">
        <AddListBoard />
        <Icon IconName={BsChatLeftFill} ping={true} />
      </div>
    </header>
  );
}
