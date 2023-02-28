import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import { ThemeProvider } from "./context/ThemeContext";
import Home from "./routes/home.component";
import SignIn from "./routes/sign-in.component";
import SignUp from "./routes/sign-up.component";
import Account from "./routes/account.component";
import CoinPage from "./routes/coin-page.component";
import axios from "axios";
import Footer from "./components/footer";

function App() {
  const [coins, setCoins] = useState([]);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=mxn&order=market_cap_desc&per_page=10&page=1&sparkline=true";

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data);
    });
  }, [url]);

  return (
    <ThemeProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home coins={coins} />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/account" element={<Account />} />
        <Route path="/coin/:coinId" element={<CoinPage />}>
          <Route path=":coinId" />
        </Route>
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
