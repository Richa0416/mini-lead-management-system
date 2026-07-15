import "./components/Lead.css";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import LeadForm from "./components/LeadForm";
import LeadList from "./components/LeadList";

function App() {
  const [selectedLead, setSelectedLead] = useState(null);
  const [leads, setLeads] = useState([]);

  return (
    <div className="container">
      <ToastContainer position="top-right" autoClose={2000} />

      <Navbar />

      <Dashboard leads={leads} />

      <h1>Mini Lead Management CRM</h1>

      <LeadForm
        selectedLead={selectedLead}
        setSelectedLead={setSelectedLead}
        fetchLeads={setLeads}
      />

      <LeadList
        handleEdit={setSelectedLead}
        leads={leads}
        setLeads={setLeads}
      />
    </div>
  );
}

export default App;