import { Input } from "@ui5/webcomponents-react";
import { FC } from "react";
import "./style.scss";

interface iProps {
  children?: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputField: FC<iProps> = ({ value }) => {
  return (
    <Input
      value={value}
      className="input-field"
      placeholder="Type the movie's name here"
    />
  );
};

export default InputField;
