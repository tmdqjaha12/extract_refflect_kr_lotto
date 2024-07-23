import LottoGenerator from "./components/LottoGenerator";
import LottoList from "./components/LottoList";
import SearchBar from "./components/SearchBar";

const Home = () => {
  return (
    <>
      <LottoGenerator />
      <SearchBar />
      <LottoList />
    </>
  );
};

export default Home;
