import React, { useState } from "react";
import { form, label, input } from "./ContactForm.module.css";

const initialState = {
  name: "",
  number: "",
};

const ContactForm = ({ addContact }) => {
  const [state, setState] = useState({ ...initialState });

  const onHandleSubmit = (e) => {
    e.preventDefault();
    addContact(state);
    setState({ ...initialState });
  };

  const onHandleChange = (e) => {
    const { value, name } = e.target;
    setState((prev) => ({...prev, [name]: value }));
  };

  return (
    <>
      <form onSubmit={onHandleSubmit} className={form}>
        <label className={label}>
          Name
          <input
            className={input}
            type="text"
            onChange={onHandleChange}
            value={state.name}
            name="name"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          />
        </label>
        <label>
          Number
          <input
            className={input}
            type="text"
            onChange={onHandleChange}
            value={state.number}
            name="number"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          />
        </label>
        <button type="submit" className={input}>
          Add contact
        </button>
      </form>
    </>
  );
};

export default ContactForm;
