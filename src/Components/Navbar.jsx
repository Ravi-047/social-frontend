import React from "react";

const Navbar = () => {
  return (
    <div
      style={{
        border: "1px solid black",
        height: "fit-content",
        display: "flex",
        padding: "0.5rem",
      }}
    >
      <div style={{ flex: "1" }}>
        <div>Number of Post</div>
      </div>

      <div style={{ flex: "1" }}></div>
      <button>Login</button>
    </div>
  );
};

export default Navbar;
