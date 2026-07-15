import { CSVLink } from "react-csv";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function LeadList({ handleEdit, leads, setLeads }) {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const leadsPerPage = 5;

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/leads");
      setLeads(res.data);
    } catch (error) {
      console.log(error);
      toast.error("Failed to fetch leads.");
    }
  };

  const deleteLead = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this lead?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:5000/api/leads/${id}`);

      toast.success("Lead Deleted Successfully!");

      fetchLeads();
    } catch (error) {
      console.log(error);
      toast.error("Failed to delete lead.");
    }
  };

  const filteredLeads = leads.filter(
    (lead) =>
      lead.name.toLowerCase().includes(search.toLowerCase()) ||
      lead.email.toLowerCase().includes(search.toLowerCase()) ||
      lead.company.toLowerCase().includes(search.toLowerCase())
  );

  const indexOfLastLead = currentPage * leadsPerPage;
  const indexOfFirstLead = indexOfLastLead - leadsPerPage;

  const currentLeads = filteredLeads.slice(
    indexOfFirstLead,
    indexOfLastLead
  );

  const totalPages = Math.ceil(filteredLeads.length / leadsPerPage);

  const headers = [
    { label: "Name", key: "name" },
    { label: "Email", key: "email" },
    { label: "Phone", key: "phone" },
    { label: "Company", key: "company" },
  ];

  return (
    <div style={{ marginTop: "40px" }}>
      <h2
        style={{
          marginBottom: "20px",
          color: "#1e3a8a",
        }}
      >
        All Leads
      </h2>

      <div className="top-bar">
        <input
          className="search-box"
          type="text"
          placeholder="Search by Name, Email or Company..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
        />

        <CSVLink
          data={filteredLeads}
          headers={headers}
          filename="Leads.csv"
          className="csv-btn"
        >
          Export CSV
        </CSVLink>
      </div>

      <div className="table-card">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Company</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {currentLeads.length > 0 ? (
              currentLeads.map((lead) => (
                <tr key={lead._id}>
                  <td>{lead.name}</td>

                  <td>{lead.email}</td>

                  <td>{lead.phone}</td>

                  <td>
                    <span className="company-badge">
                      {lead.company}
                    </span>
                  </td>

                  <td>
                    <button
                      className="edit-btn"
                      onClick={() => handleEdit(lead)}
                    >
                      Edit
                    </button>

                    <button
                      className="delete-btn"
                      onClick={() => deleteLead(lead._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  style={{
                    textAlign: "center",
                    padding: "20px",
                  }}
                >
                  No Leads Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="pagination">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <span>
          Page {currentPage} of {totalPages || 1}
        </span>

        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={
            currentPage === totalPages || totalPages === 0
          }
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default LeadList;