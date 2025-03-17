import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./components/AuthenticationPages/SignIn";
import CreateAnAccount from "./components/AuthenticationPages/CreateAnAccount";
import ForgetYourPassword from "./components/AuthenticationPages/ForgetYourPassword";
import LockScreen from "./components/AuthenticationPages/LockScreen";
import Verification from "./components/AuthenticationPages/Verification";
import CreateAPassword from "./components/AuthenticationPages/CreateAPassword";
import NameThisProject from "./components/NewProjectPages/NameThisProject";
import UploadExteriorVisuals from "./components/NewProjectPages/UploadExteriorVisuals";

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
        <Route path="/verification" element={<Verification />} />
        <Route path="/create-password" element={<CreateAPassword />} />
        <Route path="/name-this-project" element={<NameThisProject />} />
        <Route path="/upload-exterior-visuals" element={<UploadExteriorVisuals />} />
      </Routes>
    </Router>
  );
}

export default App;
