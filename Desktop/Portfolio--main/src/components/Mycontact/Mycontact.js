import React from "react";
import "./Mycontact.scss";

function Mycontact() {

  const formStyle = {
    padding: "10px",
    maxWidth: "400px",
    margin: "0 auto"
  };

  const formHeadingStyle = {
    fontSize: "40px",
    textAlign: "center",
    marginBottom: "10px",
    fontWeight: "bold"
  };

  const inputFieldStyle = {
    border: "1px solid #ccc",
    fontSize: "14px",
    color: "black",
    padding: "10px 8px",
    marginBottom: "10px",
    borderRadius: "5px",
    width: "100%",
    boxSizing: "border-box"
  };

  const buttonStyle = {
    padding: "10px",
    border: "unset",
    textTransform: "uppercase",
    backgroundColor: "#117ca6",
    color: "#ffffff",
    width: "100%",
    cursor: "pointer"
  };

  return (
    <div className="details__section">

      <h2 style={{ textAlign: "center" }}>Feel Free to Contact Me</h2>

      {/* MAP */}
      <iframe
        src="https://www.google.com/maps?q=Maharishi+Markandeshwar&output=embed"
        title="location-map"
        width="100%"
        height="450"
        style={{ border: 0 }}
        loading="lazy"
      ></iframe>

      {/* FORM */}
      <form
        action="https://forms.gle/okSeeqUiq9a3otC1A"
        method="POST"
        style={formStyle}
        name="contactForm"
        autoComplete="off"
      >
        <p style={formHeadingStyle}>Contact Form</p>

        <input
          required
          style={inputFieldStyle}
          type="text"
          name="name"
          placeholder="Enter your name"
        />

        <input
          required
          style={inputFieldStyle}
          type="email"
          name="email"
          placeholder="Enter your email"
        />

        <textarea
          rows={5}
          required
          style={inputFieldStyle}
          name="message"
          placeholder="Enter your message"
        ></textarea>

        <input type="submit" value="Send" style={buttonStyle} />
      </form>

    </div>
  );
}

export default Mycontact;