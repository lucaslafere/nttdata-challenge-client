import { Input } from "@ui5/webcomponents-react";
import { FC, useContext } from "react";
import SearchContext from "../../contexts/searchContext";
import "./style.scss";

interface iProps {
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputField: FC<iProps> = () => {
  const { search, setSearch } = useContext(SearchContext);
  console.log(search);

  const handleSearch = (e: any) => {
    setSearch(e.target.value);
  };
  return (
    <Input
      value={search}
      className="input-field"
      placeholder="Type your favorite movie's name here"
      onChange={(e) => handleSearch(e)}
    />
  );
};

export default InputField;
