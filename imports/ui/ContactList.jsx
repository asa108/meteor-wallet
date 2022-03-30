import React from "react";
import { ContactCollection } from "../api/ContactCollection";
import { useTracker } from "meteor/react-meteor-data";

const ContactList = () => {
  const contacts = useTracker(() => {
    return ContactCollection.find({}).fetch();
  });
  return (
    <div>
      <h3>Contact List</h3>
      {contacts.map((contact) => (
        <li key={contact._id}>{contact.name}</li>
      ))}
      <ul></ul>
    </div>
  );
};

export default ContactList;
