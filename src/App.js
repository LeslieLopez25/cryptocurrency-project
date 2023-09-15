import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar.component";
import { ThemeProvider } from "./context/ThemeContext";
import Home from "./routes/home.component";
import Signin from "./routes/sign-in.component";
import Signup from "./routes/sign-up.component";
import Account from "./routes/account.component";
import CoinPage from "./routes/coin-page.component";
import axios from "axios";
import Footer from "./components/footer.component";
import { AuthContextProvider } from "./context/AuthContext";
import Loader from "./components/loader.component";

function App() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=mxn&order=market_cap_desc&per_page=10&page=1&sparkline=true";

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data);
      setLoading(false);
    });
  }, [url]);

  return (
    <ThemeProvider>
      <AuthContextProvider>
        <Navbar />
        {loading ? (
          <Loader />
        ) : (
          <Routes>
            <Route path="/" element={<Home coins={coins} />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/account" element={<Account />} />
            <Route path="/coin/:coinId" element={<CoinPage />}>
              <Route path=":coinId" />
            </Route>
          </Routes>
        )}
        <Footer />
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default App;
