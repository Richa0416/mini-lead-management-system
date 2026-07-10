import axios from "axios";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

function LeadForm({ selectedLead, setSelectedLead }) {
  const [lead, setLead] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
  });

  // Fill form when Edit button is clicked
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

  // Handle input changes
  const handleChange = (e) => {
    setLead({
      ...lead,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!lead.name || !lead.email || !lead.phone) {
      toast.warning("Please fill all required fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(lead.email)) {
      toast.warning("Please enter a valid email.");
      return;
    }

    if (!/^\d{10}$/.test(lead.phone)) {
      toast.warning("Phone number must be exactly 10 digits.");
      return;
    }

    try {
      if (selectedLead) {
        // Update Lead
        await axios.put(
          `http://localhost:5000/api/leads/${selectedLead._id}`,
          lead
        );

        toast.success("Lead Updated Successfully!");
      } else {
        // Add Lead
        await axios.post(
          "http://localhost:5000/api/leads",
          lead
        );

        toast.success("Lead Added Successfully!");
      }

      // Clear form
      setLead({
        name: "",
        email: "",
        phone: "",
        company: "",
      });

      // Exit edit mode
      setSelectedLead(null);

      // Temporary refresh
      window.location.reload();

    } catch (error) {
      console.error(error);
      toast.error("Operation Failed!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        value={lead.name}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Enter Email"
        value={lead.email}
        onChange={handleChange}
      />

      <input
        type="text"
        name="phone"
        placeholder="Enter Phone Number"
        value={lead.phone}
        onChange={handleChange}
      />

      <input
        type="text"
        name="company"
        placeholder="Enter Company"
        value={lead.company}
        onChange={handleChange}
      />

      <button className="submit-btn" type="submit">
        {selectedLead ? "Update Lead" : "Add Lead"}
      </button>
    </form>
  );
}

export default LeadForm;