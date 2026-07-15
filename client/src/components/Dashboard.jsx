function Dashboard({ leads }) {
  const totalLeads = leads.length;

  const companies = [...new Set(leads.map((lead) => lead.company))];

  const today = new Date().toDateString();

  const todayLeads = leads.filter(
    (lead) =>
      lead.createdAt &&
      new Date(lead.createdAt).toDateString() === today
  );

  return (
    <div className="dashboard">

      <div className="card total-card">
        <h3>Total Leads</h3>
        <h2>{totalLeads}</h2>
      </div>

      <div className="card company-card">
        <h3>Companies</h3>
        <h2>{companies.length}</h2>
      </div>

      <div className="card today-card">
        <h3>Today's Leads</h3>
        <h2>{todayLeads.length}</h2>
      </div>

    </div>
  );
}

export default Dashboard;