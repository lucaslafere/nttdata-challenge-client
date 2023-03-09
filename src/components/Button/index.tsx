import { Button } from "@ui5/webcomponents-react";
import { FC } from "react";
import "./style.scss";

interface iProps {
  children: string;
  onClick: () => void;
  disabled?: boolean;
}

export const ClickableButton: FC<iProps> = ({
  children,
  onClick,
  disabled,
}) => {
  return (
    <Button
      className="orange-button"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </Button>
  );
};

export default ClickableButton;
