import { Button } from "@ui5/webcomponents-react";
import { FC } from "react";
import "./style.scss";

interface iProps {
  children?: string;
  onClick: () => void;
  disabled?: boolean;
  icon?: string;
}

export const ClickableButton: FC<iProps> = ({
  children,
  onClick,
  disabled,
  icon,
}) => {
  return (
    <Button
      className="orange-button"
      onClick={onClick}
      disabled={disabled}
      icon={icon}
    >
      {children}
    </Button>
  );
};

export default ClickableButton;
