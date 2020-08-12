import React, { Component } from 'react';
import Contact from './Contact';

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'Manal Abaline',
        email: 'mabal086@uottawa.ca',
        phone: '613 429 8301'
      },
      {
        id: 2,
        name: 'person2',
        email: 'p2@gmail.com',
        phone: '613 000 0000'
      },
      {
        id: 3,
        name: 'person3',
        email: 'p3@gmail.com',
        phone: '613 999 0000'
      }
    ]
  };

  render() {
    const { contacts } = this.state;
    return (
      <React.Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-success">Contacts</span> List
        </h1>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;
