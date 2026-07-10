function Dashboard({ leads }) {
  const totalCompanies = new Set(
    leads.map((lead) => lead.company)
  ).size;

  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        margin: "30px 0",
      }}
    >
      <div
        style={{
          flex: 1,
          background: "#1976d2",
          color: "white",
          padding: "20px",
          borderRadius: "10px",
          textAlign: "center",
        }}
      >
        <h2>{leads.length}</h2>
        <p>Total Leads</p>
      </div>

      <div
        style={{
          flex: 1,
          background: "#4caf50",
          color: "white",
          padding: "20px",
          borderRadius: "10px",
          textAlign: "center",
        }}
      >
        <h2>{totalCompanies}</h2>
        <p>Companies</p>
      </div>
    </div>
  );
}

export default Dashboard;