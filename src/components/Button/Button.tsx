import { CircleArrowUp, Plus } from "lucide-react";
import './Button.css'

interface ButtonProps {
  type: string;
  text: string;
  icon: string;
}

const Button = ({ type, text, icon }: ButtonProps) => {
  if (type === "link")
    return (
      <a href="/criar" className="new-register">
        <Plus className="icon" size={20} />
        <p className="new-record">{text}</p>
      </a>
    );
    return (
      <button className="register" type="submit">
        {icon === 'plus' ? <Plus className="icon" size={20} />: <CircleArrowUp className="icon" size={20} />}
        <p className="new-record">{text}</p>
      </button>
    );
};

export default Button;
