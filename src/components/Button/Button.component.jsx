import { IoIosArrowForward } from "react-icons/io";
import "./Button.styles.scss";

const Button = ({ title }) => {
  return (
    <button className="button">
      {title} <IoIosArrowForward className="icon" size="25" />
    </button>
  );
};
export default Button;
