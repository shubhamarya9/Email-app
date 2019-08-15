import React from "react";
import "./inbox.css";
import { Link } from "react-router-dom";

export default function Compose() {
  return (
    <div className="ui form">
      <div className="field">
        <label className="composeField">Email</label>
        <input type="text" />
      </div>
      <div className="field">
        <label className="composeField">Subject</label>
        <input type="text" />
      </div>
      <div className="field">
        <label className="composeField">Message</label>
        <textarea spellcheck="false" />
      </div>
      <button className="ui button submit-button">
        <Link to="/success">Submit</Link>
      </button>
    </div>
  );
}
