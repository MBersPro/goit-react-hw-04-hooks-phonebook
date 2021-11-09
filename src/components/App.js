import React, { useState, useEffect } from "react";
import Section from "./section/Section";
import { v4 as uuidv4 } from "uuid";
import ContactForm from "./contactForm/ContactForm";
import ContactList from "./contactList/ContactList";
import Filter from "./filter/Filter";

const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem("contacts")) || [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ]
  );
  const [filter, setFilter] = useState("");

  // state = {
  //   contacts: JSON.parse(localStorage.getItem("contacts")) || [
  //           { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  //           { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  //           { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  //           { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  //         ],
  //   filter: "",
  // };

  // componentDidUpdate(prevProps, prevState) {
  //   localStorage.setItem("contacts", JSON.stringify(this.state.contacts))
  // }
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (contact) => {
    const id = uuidv4();
    if (
      contacts.some(
        (item) => item.name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      return alert(`${contact.name} is already in contacts.`);
    }
    setContacts((prev) => [...prev, { ...contact, id }]);
  };

  const deleteContact = (e) => {
    const { id } = e.target;
    setContacts((prev) => [...prev.filter((contact) => contact.id !== id)]);
  };

  const getFilteredContacts = () =>
    contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  const ssetFilter = (e) => setFilter(e.target.value);

  return (
    <>
      <Section title={"Phonebook"}>
        <ContactForm addContact={addContact} />
      </Section>
      <Section title={"Contacts"}>
        <Filter setFilter={ssetFilter} filter={filter} />
        <ContactList
          contacts={getFilteredContacts()}
          deleteContact={deleteContact}
        />
      </Section>
    </>
  );
};

export default App;
