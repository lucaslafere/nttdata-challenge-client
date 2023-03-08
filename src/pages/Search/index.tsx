import { FC } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MovieSection from "../../layouts/MovieSection";
import SearchSection from "../../layouts/SearchSection";
import "./style.scss";

export const SearchPage: FC = () => {
  return (
    <>
      <Header />
      <SearchSection />
      <MovieSection />
      <Footer />
    </>
  );
};

export default SearchPage;
