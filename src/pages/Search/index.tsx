import { FC } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SearchSection from "../../layouts/SearchSection";
import "./style.scss";

export const SearchPage: FC = () => {
  return (
    <>
      <Header />
      <SearchSection />
      <Footer />
    </>
  );
};

export default SearchPage;
