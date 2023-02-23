import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import { ThemeProvider } from "./context/ThemeContext";
import Home from "./routes/home.component";
import SignIn from "./routes/sign-in.component";
import SignUp from "./routes/sign-up.component";
import Account from "./routes/account.component";
import axios from "axios";

function App() {
  const [coins, setCoins] = useState([]);

  return (
    <ThemeProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
