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
import UploadInteriorVisuals from "./components/NewProjectPages/UploadInteriorVisuals";
import UploadSocialAreaVisuals from "./components/NewProjectPages/UploadSocialAreaVisuals";
import Add360Links from "./components/NewProjectPages/Add360Links";
import AddVideoLink from "./components/NewProjectPages/AddVideoLink";
import UploadBrochuresOrFiles from "./components/NewProjectPages/UploadBrochuresOrFiles";
import CreateANewType from "./components/NewTypePages/CreateANewType";
import MasterTypeA from "./components/NewTypePages/MasterTypeA";
import ChangeProjectDetails from "./components/NewTypePages/ChangeProjectDetails";
import CreateANewGroup from "./components/NewTypePages/CreateANewGroup";
import ChangePOI from "./components/NewTypePages/ChangePOI";
import AddPOI from "./components/NewTypePages/AddPOI";
import NameThisUnit from "./components/NewUnitPages/NameThisUnit";
import AddDetails from "./components/NewUnitPages/AddDetails";
import AddDetailsWithButton from "./components/NewUnitPages/AddDetailsWithButton";
import AddDetailsWithProperties from "./components/NewUnitPages/AddDetailsWithProperties";
import AddDetailsWithExtraButttons from "./components/NewUnitPages/AddDetailsWithExtraButttons";
import AddFinancialPlan from "./components/NewUnitPages/AddFinancialPlan";

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
        <Route path="/upload-interior-visuals" element={<UploadInteriorVisuals />} />
        <Route path="/upload-social-area-visuals" element={<UploadSocialAreaVisuals />} />
        <Route path="/add-360-links" element={<Add360Links />} />
        <Route path="/add-video-link" element={<AddVideoLink />} />
        <Route path="/upload-brochures-or-files" element={<UploadBrochuresOrFiles />} />
        <Route path="/create-a-new-type" element={<CreateANewType />} />
        <Route path="/master-type-a" element={<MasterTypeA />} />
        <Route path="/change-project-details" element={<ChangeProjectDetails />} />
        <Route path="/create-a-new-group" element={<CreateANewGroup />} />
        <Route path="/change-poi" element={<ChangePOI />} />
        <Route path="/add-poi" element={<AddPOI />} />
        <Route path="/name-this-unit" element={<NameThisUnit />} />
        <Route path="/add-details" element={<AddDetails />} />
        <Route path="/add-details-with-button" element={<AddDetailsWithButton />} />
        <Route path="/add-details-with-properties" element={<AddDetailsWithProperties />} />
        <Route path="/add-details-with-extra-buttons" element={<AddDetailsWithExtraButttons />} />
        <Route path="/add-financial-plan" element={<AddFinancialPlan />} />
      </Routes>
    </Router>
  );
}

export default App;
