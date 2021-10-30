import React from "react";
import PropTypes from "prop-types";
import {ul, p} from "./ContactList.module.css"

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className={ul}>
      {contacts.map((item) => (
        <li key={item.id}>
          <p className={p}>
            {item.name}: {item.number}
          </p>
          <button type="button" id={item.id} onClick={deleteContact}>Delete Contact</button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired
}

export default ContactList;
