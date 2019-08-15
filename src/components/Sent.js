import React, { Component } from "react";

export default class Sent extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Shazam",
        email: "shazam@gmail.com",
        message:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius commodi, perferendis optio praesentium dicta labore ducimus laborum reiciendis voluptates quasi consequuntur, sint delectus magnam quam, iusto aliquam tempore in. Pariatur."
      },
      {
        id: 2,
        name: "James",
        email: "james@gmail.com",
        message:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius commodi, perferendis optio praesentium dicta labore ducimus laborum reiciendis voluptates quasi consequuntur, sint delectus magnam quam, iusto aliquam tempore in. Pariatur."
      },
      {
        id: 3,
        name: "Bruce",
        email: "bruce@gmail.com",
        message:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius commodi, perferendis optio praesentium dicta labore ducimus laborum reiciendis voluptates quasi consequuntur, sint delectus magnam quam, iusto aliquam tempore in. Pariatur."
      }
    ]
  };
  render() {
    return (
      <div>
        <div className="inbox">
          <h2>Sent Mails</h2>
          <h2 />
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
      </div>
    );
  }
}
