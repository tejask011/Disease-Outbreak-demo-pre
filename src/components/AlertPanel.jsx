// src/components/AlertPanel.jsx

const AlertPanel = ({ data }) => {
  const highRisk = data.filter((d) => d.risk > 70);

  return (
    <div style={{ marginTop: "20px" }}>
      <h2 style={{ marginBottom: "15px" }}>🚨 Alerts</h2>

      {/* GRID CONTAINER */}
      <div style={styles.grid}>
        {highRisk.length === 0 && (
          <div style={styles.card}>
            <p>✅ No high risk areas</p>
          </div>
        )}

        {highRisk.map((d, i) => (
          <div key={i} style={styles.card}>
            <h3 style={{ marginBottom: "8px" }}>🚨 High Risk</h3>
            <p><b>{d.location}</b></p>
            <p>Risk Score: {d.risk}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "15px",
  },

  card: {
    background: "#fff",
    padding: "15px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    borderTop: "5px solid red",
    transition: "0.2s",
  },
};

export default AlertPanel;