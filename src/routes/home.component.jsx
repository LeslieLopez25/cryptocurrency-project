import React from "react";
import CoinSearch from "../components/coinSearch";

const Home = ({ coins }) => {
  return (
    <div>
      <CoinSearch coins={coins} />
    </div>
  );
};

export default Home;
