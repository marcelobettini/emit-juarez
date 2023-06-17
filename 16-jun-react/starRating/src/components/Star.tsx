import { SyntheticEvent } from "react";
import { FaStar } from "react-icons/fa";
interface iProps {
  selected: boolean;
  onSelect: (e: SyntheticEvent) => void;
}

const Star = ({ selected, onSelect }: iProps) => {
  return <FaStar color={selected ? "white" : "black"} onClick={onSelect} />;
};

export default Star;
