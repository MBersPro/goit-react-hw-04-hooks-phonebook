import React, { Component } from "react";
import {form, label, input} from './ContactForm.module.css'

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  onHandleSubmit = (e) => {
    e.preventDefault();
    this.props.addContact(this.state);
    this.setState({
      name: "",
      number: "",
    });
  };

  onHandleChange = (e) => {
    const { value, name } = e.target;
    console.log(value);
    this.setState({ [name]: value });
  };

  render() {
    return (
      <>
        <form onSubmit={this.onHandleSubmit} className={form}>
          <label className={label}>
            Name
            <input
              className={input}
              type="text"
              onChange={this.onHandleChange}
              value={this.state.name}
              name="name"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            />
          </label>
          <label>
            Number
            <input
              className={input}
              type="text"
              onChange={this.onHandleChange}
              value={this.state.number}
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
  }
}

export default ContactForm;
