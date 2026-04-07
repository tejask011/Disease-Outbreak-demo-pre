
import { useState } from "react";
import AddDataModal from "./AddDataModal";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div style={styles.navbar}>
        <div style={styles.left}>
          <h2>🦠 DiseaseGuard</h2>
        </div>

        <button onClick={() => setShowModal(true)} style={styles.button}>
          + Add Data
        </button>
      </div>

      {showModal && <AddDataModal onClose={() => setShowModal(false)} />}
    </>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 20px",
    background: "#020617",
    color: "white",
    borderRadius: "10px",
    marginBottom: "20px",
  },

  left: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },

  logo: {
    fontSize: "24px",
  },

  title: {
    margin: 0,
    fontSize: "20px",
  },

  button: {
    background: "#ef4444",
    border: "none",
    color: "white",
    padding: "8px 15px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default Navbar;