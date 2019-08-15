import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="ui menu">
      <Link className="item left" to="/">
        The Email App
      </Link>
      <Link className="item" to="/compose">
        Compose
      </Link>
      <Link className="item" to="/inbox">
        Inbox
      </Link>

      <Link className="item" to="/sent">
        Sent
      </Link>
      <Link className="item" to="/archive">
        Archive
      </Link>
      <div className="ui icon input">
        <input type="text" placeholder="Search by sender" />
        <i className="search link icon" />
      </div>

      {/* <div className="ui inverted menu">
        <a className="item">Home</a>
        <a className="item">Create</a>
        <a className="item">Inbox</a>
        <a className="item">Sent</a>
        <a className="item">Archive</a>
        <div className="item search-bar">
          <div className="ui input">
            <input type="text" placeholder="search sender" />
          </div>
        </div>
      </div> */}
    </div>
  );
}
