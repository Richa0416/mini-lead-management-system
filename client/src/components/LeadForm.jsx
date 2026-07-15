import axios from "axios";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

function LeadForm({
  selectedLead,
  setSelectedLead,
  fetchLeads,
}) {
  const [lead, setLead] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
  });

  // Fill form while editing
  useEffect(() => {
    if (selectedLead) {
      setLead({
        name: selectedLead.name,
        email: selectedLead.email,
        phone: selectedLead.phone,
        company: selectedLead.company,
      });
    }
  }, [selectedLead]);

  // Handle Input Change
  const handleChange = (e) => {
    setLead({
      ...lead,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!lead.name || !lead.email || !lead.phone || !lead.company) {
      toast.warning("Please fill all fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(lead.email)) {
      toast.warning("Enter a valid email.");
      return;
    }

    if (!/^\d{10}$/.test(lead.phone)) {
      toast.warning("Phone number must contain exactly 10 digits.");
      return;
    }

    try {
      if (selectedLead) {
        await axios.put(
          `http://localhost:5000/api/leads/${selectedLead._id}`,
          lead
        );

        toast.success("Lead Updated Successfully!");
      } else {
        await axios.post(
          "http://localhost:5000/api/leads",
          lead
        );

        toast.success("Lead Added Successfully!");
      }

      // Refresh Lead List
      const res = await axios.get(
        "http://localhost:5000/api/leads"
      );

      fetchLeads(res.data);

      // Clear Form
      setLead({
        name: "",
        email: "",
        phone: "",
        company: "",
      });

      // Exit Edit Mode
      setSelectedLead(null);

    } catch (error) {
      console.log(error);
      toast.error("Operation Failed!");
    }
  };

  return (
    <div className="form-card">
      <h2>
        {selectedLead
          ? "✏️ Update Lead"
          : "➕ Add New Lead"}
      </h2>

      <form onSubmit={handleSubmit} className="lead-form">

        <div className="form-grid">

          <div>
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              value={lead.name}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={lead.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Phone</label>
            <input
              type="text"
              name="phone"
              placeholder="Enter Phone Number"
              value={lead.phone}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Company</label>
            <input
              type="text"
              name="company"
              placeholder="Enter Company"
              value={lead.company}
              onChange={handleChange}
            />
          </div>

        </div>

        <button className="submit-btn" type="submit">
          {selectedLead ? "Update Lead" : "Add Lead"}
        </button>

      </form>
    </div>
  );
}

export default LeadForm;