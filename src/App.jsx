import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./components/AuthenticationPages/SignIn";
import CreateAnAccount from "./components/AuthenticationPages/CreateAnAccount";
import ForgetYourPassword from "./components/AuthenticationPages/ForgetYourPassword";
import LockScreen from "./components/AuthenticationPages/LockScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <SignIn />
            </div>
          }
        />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/create-account" element={<CreateAnAccount />} />
        <Route path="/forget-password" element={<ForgetYourPassword />} />
        <Route path="/lock-screen" element={<LockScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
