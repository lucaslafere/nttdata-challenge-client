import { Input } from "@ui5/webcomponents-react";
import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { setSearch } from "../../slices/search.slice";
import { RootState } from "../../store/store";
import "./style.scss";

interface iProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputField: FC<iProps> = () => {
  const { search } = useAppSelector((state: RootState) => state.search);
  const dispatch = useAppDispatch();
  const handleSearch = (e: any) => {
    dispatch(setSearch(e.target.value));
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
