import React from "react";

function Child({ showModal, setShowModal }) {
  return (
    <div
      style={{
        backgroundColor: "red",
        padding: "20px",
        marginTop: "20px",
      }}
    >
      <h2>Child Component</h2>

      <button onClick={() => setShowModal(true)}>
        Open Modal
      </button>

      {showModal && (
        <div style={{ marginTop: "20px" }}>
          <h2>Modal Content</h2>
          <h3>This is modal content.</h3>
        </div>
      )}
    </div>
  );
}

export default Child;
