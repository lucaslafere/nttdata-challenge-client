import { Button } from "@ui5/webcomponents-react";
import { FC } from "react";
import "./style.scss";

interface iProps {
  children: string;
  onClick: () => void;
}

export const ClickableButton: FC<iProps> = ({ children, onClick }) => {
  return (
    <Button
      className="orange-button"
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default ClickableButton;
