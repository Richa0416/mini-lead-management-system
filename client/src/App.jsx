import { useState } from "react";
import "./components/Lead.css";
import LeadForm from "./components/LeadForm";
import LeadList from "./components/LeadList";

function App() {
  const [selectedLead, setSelectedLead] = useState(null);

  // Called when Edit button is clicked
  const handleEdit = (lead) => {
    setSelectedLead(lead);
  };

  return (
    <div className="container">
      <h1>Mini Lead Management CRM</h1>

      <LeadForm
        selectedLead={selectedLead}
        setSelectedLead={setSelectedLead}
      />

      <LeadList
        handleEdit={handleEdit}
      />
    </div>
  );
}

export default App;