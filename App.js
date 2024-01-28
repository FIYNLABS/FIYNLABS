import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import AboutUs from "./pages/About";
import Footer from "./components/Footer";
import Careers from "./pages/Careers";
import NonProfit from "./pages/industries/NonProfit";
import HealthCare from "./pages/industries/HealthCare";
import Education from "./pages/industries/Education";
import RealEstate from "./pages/industries/RealEstate";
import PublicSector from "./pages/industries/PublicSector";
import Automotive from "./pages/industries/Automotive";
import ManufacturingEnergy from "./pages/industries/ManufacturingEnergy";
import FinancialServices from "./pages/industries/FinancialServices";
import ProfessionalServices from "./pages/industries/ProfessionalServices";
import ConsumerGoods from "./pages/industries/ConsumerGoods";
import OnlineRetail from "./pages/industries/OnlineRetail";
import TravelHospitality from "./pages/industries/TravelHospitality";
import CommunicationMedia from "./pages/industries/CommunicationMedia";
import SalesforceAdmin from "./pages/salesforce-trainings/SalesforceAdmin";
import Salesforce from "./pages/salesforce-trainings/Salesforce";
import SalesforceDev from "./pages/salesforce-trainings/SalesforceDev";
import SalesforceFSL from "./pages/salesforce-trainings/SalesforceFSL";
import CPQ from "./pages/salesforce-trainings/CPQ";
import LWC from "./pages/salesforce-trainings/LWC";
import Lightning from "./pages/salesforce-trainings/Lightning";
import SalesforceTableau from "./pages/salesforce-trainings/SalesforceTableau";
import SalesforcePardot from "./pages/salesforce-trainings/SalesforcePardot";
import Velocity from "./pages/salesforce-trainings/Velocity";
import MarketingCloud from "./pages/salesforce-trainings/MarketingCloud";
import SalesforceCommerceCloud from "./pages/salesforce-trainings/SalesforceCommerceCloud";
import NewNavbar from "./components/NewNavbar";
import NCino from "./pages/salesforce-trainings/NCino";
import SalesforceQA from "./pages/salesforce-trainings/SalesforceQA";
import SalesforceCloud from "./pages/salesforce-services/SalesforceCloud";
import SalesforceServices from "./pages/salesforce-services/SalesforceServices";
import OtherCRMServices from "./pages/salesforce-services/OtherCRMServices";
import SalesforceIntegrationServices from "./pages/salesforce-services/SalesforceIntegrationService";
import ProductIntegration from "./pages/salesforce-services/ProductIntegration";
import NetsuiteTraining from "./pages/netsuite/training/netsuiteTraining.js";
import NetsuiteHome from "./pages/netsuite/services/netsuiteHome";
import NetsuiteSuiteSuccess from "./pages/netsuite/services/netsuiteSuiteSuccess";
import NetsuiteIntegration from "./pages/netsuite/services/netsuiteIntegration";
import NetsuiteImplementation from "./pages/netsuite/services/netsuiteImplementation";
import NetsuiteConsulting from "./pages/netsuite/services/netsuiteConsulting";
import SuiteCommerce from "./pages/netsuite/services/suiteCommerce";
import NetsuiteLicense from "./pages/netsuite/services/netsuiteLicense";
import NetsuiteOpenair from "./pages/netsuite/services/netsuiteOpenair";
import NetsuiteConnector from "./pages/netsuite/services/netsuiteConnector";
import NetsuiteSupport from "./pages/netsuite/services/netsuiteSupport";
import SalesforceTraining from "./pages/salesforce-trainings/SalesforceTraining";

function App() {
  const [showPopup, setShowPopup] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowPopup(true);
    }, 100000);
  }, []);

  const setPopupShow = () => {
    setShowPopup(false);
  };

  return (
    <>
      <NewNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<Contacts />} />
        <Route path="/netsuite">
          <Route path="netsuite-erp" element={<NetsuiteHome />} />
          <Route
            path="netsuite-integration"
            element={<NetsuiteIntegration />}
          />
          <Route
            path="netsuite-implementation"
            element={<NetsuiteImplementation />}
          />
          <Route path="netsuite-consulting" element={<NetsuiteConsulting />} />
          <Route path="suitecommerce-advanced" element={<SuiteCommerce />} />
          <Route path="netsuite-licensing" element={<NetsuiteLicense />} />
          <Route path="netsuite-support" element={<NetsuiteSupport />} />
          <Route path="suitesuccess" element={<NetsuiteSuiteSuccess />} />
          <Route path="netsuite-openair" element={<NetsuiteOpenair />} />
          <Route
            path="netsuite-plugin-connectors"
            element={<NetsuiteConnector />}
          />
        </Route>
        <Route path="/industries">
          <Route path="non-profit" element={<NonProfit />} />
          <Route path="healthcare" element={<HealthCare />} />
          <Route path="education" element={<Education />} />
          <Route path="public-sector" element={<PublicSector />} />
          <Route path="real-estate" element={<RealEstate />} />
          <Route path="communication" element={<CommunicationMedia />} />
          <Route path="automotive" element={<Automotive />} />
          <Route path="manufacturing" element={<ManufacturingEnergy />} />
          <Route path="financial-services" element={<FinancialServices />} />
          <Route
            path="professional-services"
            element={<ProfessionalServices />}
          />
          <Route path="consumer-goods" element={<ConsumerGoods />} />
          <Route path="online-retail" element={<OnlineRetail />} />
          <Route path="travel-hospitality" element={<TravelHospitality />} />
        </Route>
        <Route path="/online-training">
          <Route path="salesforce">
            <Route index element={<SalesforceTraining />} />
            <Route path="salesforce" element={<Salesforce />} />
            <Route path="admin" element={<SalesforceAdmin />} />
            <Route path="development" element={<SalesforceDev />} />
            <Route path="fsl" element={<SalesforceFSL />} />
            <Route path="velocity" element={<Velocity />} />
            <Route path="marketing-cloud" element={<MarketingCloud />} />
            <Route
              path="commerce-cloud"
              element={<SalesforceCommerceCloud />}
            />
            <Route path="cpq" element={<CPQ />} />
            <Route path="lwc" element={<LWC />} />
            <Route path="lightning" element={<Lightning />} />
            <Route path="tableau" element={<SalesforceTableau />} />
            <Route path="pardot" element={<SalesforcePardot />} />
            <Route path="ncino" element={<NCino />} />
            <Route path="qa" element={<SalesforceQA />} />
          </Route>
          <Route path="netsuite" element={<NetsuiteTraining />} />
        </Route>
        <Route path="/services">
          <Route
            path="salesforce-cloud-implementation"
            element={<SalesforceCloud />}
          />
          <Route path="salesforce-services" element={<SalesforceServices />} />
          <Route path="other-crm-services" element={<OtherCRMServices />} />
          <Route
            path="salesforce-integration-services"
            element={<SalesforceIntegrationServices />}
          />
          <Route path="product-integration" element={<ProductIntegration />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
