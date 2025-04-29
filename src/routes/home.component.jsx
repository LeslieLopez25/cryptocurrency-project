import React from "react";
import CoinSearch from "../components/coin-search.component";
import Trending from "../components/trending.component";

// Home component displays the CoinSearch and Trending sections
const Home = ({ coins }) => {
  return (
    <div>
      <CoinSearch coins={coins} />
      <Trending />
    </div>
  );
};

export default Home;
