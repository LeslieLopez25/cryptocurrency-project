import React, { lazy, Suspense, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar.component";
import { ThemeProvider } from "./context/ThemeContext";
import axios from "axios";
import Footer from "./components/footer.component";
import { AuthContextProvider } from "./context/AuthContext";

// Lazily import route components to optimize performance
const Home = lazy(() => import("./routes/home.component"));
const Signin = lazy(() => import("./routes/sign-in.component"));
const Signup = lazy(() => import("./routes/sign-up.component"));
const Account = lazy(() => import("./routes/account.component"));
const CoinPage = lazy(() => import("./routes/coin-page.component"));

function App() {
  const [coins, setCoins] = useState([]);

  // URL for fetching top 10 cryptocurrency in MXN
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=mxn&order=market_cap_desc&per_page=10&page=1&sparkline=true";

  // Fetch crypto market data when components mounts
  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data);
    });
  }, [url]);

  return (
    // Provide theme context to all children components
    <ThemeProvider>
      <AuthContextProvider>
        <Navbar />
        <Suspense
          fallback={<div className="text-center py-10">Loading...</div>}
        >
          <Routes>
            <Route path="/" element={<Home coins={coins} />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/account" element={<Account />} />
            <Route path="/coin/:coinId" element={<CoinPage />} />
            <Route path=":coinId" />
          </Routes>
        </Suspense>
        <Footer />
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default App;
