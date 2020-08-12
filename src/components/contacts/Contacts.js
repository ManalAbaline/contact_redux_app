import React, { Component } from 'react';
import Contact from './Contact';
import {connect} from 'react-redux';

class Contacts extends Component {

  ComponentDidMount() {
    this.props.getContacts();
  }
  
  render() {
    //const { contacts } = this.state;
    const { contacts } = this.props;
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
//method 1 
const mapStateToProps = (state) => {
  return {
    contacts: state.contact.contacts
  }
}

//method 2 

const mapDispatchToProps = (dispatch) =>{

return {
  getContacts: () => {
    dispatch({
      type: 'GET_CONTACTS'
    })

   }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Contacts);
