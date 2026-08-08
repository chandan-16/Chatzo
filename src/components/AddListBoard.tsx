import Icon from "../components/Icon";
import { MdAdd } from "react-icons/md";
import Button from "./Button";

type Props = {};

export default function AddListBoard({}: Props) {
  return (
    <>
      <Button text="Add New ListBoard" className="hidden md:flex" />
      <Icon IconName={MdAdd} className="block md:hidden" />
    </>
  );
}
