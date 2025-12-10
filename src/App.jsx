import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./ui/Navbar";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";

import Universities from "./pages/Universities";
import News from "./pages/News";
import PageNotFound from "./pages/PageNotFound";
import OurServices from "./pages/OurServices";
import VisaInfo from "./pages/VisaInfo";
import UploadDocuments from "./pages/UploadDocuments";
import StudentForm from "./pages/StudentForm";
import PartnerForm from "./pages/PartnerForm";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="ourservices" element={<OurServices />} />
          <Route path="visainfo" element={<VisaInfo />} />
          <Route path="universities" element={<Universities />} />
          <Route path="uploaddocuments" element={<UploadDocuments />} />
          <Route path="uploaddocuments/studentform" element={<StudentForm />} />
          <Route path="uploaddocuments/partnerform" element={<PartnerForm />} />
          <Route path="news" element={<News />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="privacypolicy" element={<PrivacyPolicy />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
