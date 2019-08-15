import React, { Component } from "react";
import "./inbox.css";
import { Link } from "react-router-dom";

class Inbox extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Shubham",
        email: "shubham@gmail.com",
        message:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius commodi, perferendis optio praesentium dicta labore ducimus laborum reiciendis voluptates quasi consequuntur, sint delectus magnam quam, iusto aliquam tempore in. Pariatur."
      },
      {
        id: 2,
        name: "Cole",
        email: "cole@gmail.com",
        message:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius commodi, perferendis optio praesentium dicta labore ducimus laborum reiciendis voluptates quasi consequuntur, sint delectus magnam quam, iusto aliquam tempore in. Pariatur."
      },
      {
        id: 3,
        name: "Smith",
        email: "smith@gmail.com",
        message:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius commodi, perferendis optio praesentium dicta labore ducimus laborum reiciendis voluptates quasi consequuntur, sint delectus magnam quam, iusto aliquam tempore in. Pariatur."
      }
    ]
  };
  render() {
    return (
      <div className="inbox">
        <Link to="/compose" className="header">
          Compose Email
        </Link>
        <h2>Inbox</h2>
        {this.state.contacts.map(contact => (
          <div className="ui card">
            <div className="content">
              <div className="header">
                {contact.name}
                <div class="content">
                  <h3>{contact.email}</h3>
                  <div class="ui small feed">
                    <div class="event">
                      <div class="content">
                        <div class="summary" />
                        <h4>Message:</h4>
                        <p>{contact.message}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default Inbox;
