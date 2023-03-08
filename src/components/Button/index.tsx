import { Button } from "@ui5/webcomponents-react";
import { FC } from "react";
import "./style.scss";

interface iProps {
  children: string;
}

export const ClickableButton: FC<iProps> = ({ children }) => {
  return <Button className="orange-button">{children}</Button>;
};

export default ClickableButton;
