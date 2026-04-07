import { useState } from "react";

const AddDataModal = ({ onClose }) => {
  const [form, setForm] = useState({
    location: "",
    risk: "",
    lat: "",
    lng: "",
  });

  // 📍 Get current location
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        alert(`Location detected: ${lat}, ${lng}`);

        setForm((prev) => ({
          ...prev,
          lat,
          lng,
          location: "Current Location",
        }));
      },
      () => {
        alert("Location access denied");
      }
    );
  };

  const handleSubmit = () => {
    console.log(form);
    alert("Data submitted (demo)");
    onClose();
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h2>Add Data</h2>

        {/* ✅ City / Area Input */}
        <input
          placeholder="Enter City / Area"
          onChange={(e) =>
            setForm({ ...form, location: e.target.value })
          }
          style={styles.input}
        />

        {/* 📍 Current Location Button */}
        <button onClick={getLocation} style={styles.locBtn}>
          📍 Use Current Location
        </button>

        {/* Risk Input */}
        <input
          placeholder="Risk (0-100)"
          type="number"
          onChange={(e) =>
            setForm({ ...form, risk: e.target.value })
          }
          style={styles.input}
        />

        {/* CSV Upload */}
        <div style={{ marginTop: "10px" }}>
          <label>Upload CSV:</label>
          <input type="file" />
        </div>

        {/* Buttons */}
        <div style={styles.btnRow}>
          <button onClick={handleSubmit} style={styles.submit}>
            Submit
          </button>
          <button onClick={onClose} style={styles.cancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  },

  modal: {
    background: "#fff",
    padding: "20px",
    borderRadius: "12px",
    width: "300px",
  },

  input: {
    width: "100%",
    margin: "8px 0",
    padding: "8px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },

  locBtn: {
    background: "#2563eb",
    color: "white",
    border: "none",
    padding: "8px",
    borderRadius: "6px",
    width: "100%",
    marginBottom: "10px",
    cursor: "pointer",
  },

  btnRow: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "15px",
  },

  submit: {
    background: "green",
    color: "white",
    border: "none",
    padding: "8px 12px",
    borderRadius: "6px",
  },

  cancel: {
    background: "red",
    color: "white",
    border: "none",
    padding: "8px 12px",
    borderRadius: "6px",
  },
};

export default AddDataModal;