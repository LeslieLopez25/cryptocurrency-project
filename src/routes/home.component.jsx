import React from "react";
import CoinSearch from "../components/coinSearch";
import Trending from "../components/trending";

const Home = ({ coins }) => {
  return (
    <div>
      <CoinSearch coins={coins} />
      <Trending />
    </div>
  );
};

export default Home;
