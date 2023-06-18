import PropTypes from 'prop-types';
import { Form, Input, Button } from './ContactForm.styled';

const ContactForm = ({ addContact }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const { name, number } = e.target;
    if (name.value.trim() === '' || number.value.trim() === '') {
      alert('Please enter a name and a number');
      return;
    }
    const newContact = {
      id: Date.now().toString(),
      name: name.value.trim(),
      number: number.value.trim(),
    };
    addContact(newContact);
    name.value = '';
    number.value = '';
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="name"
        placeholder="Name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <Input
        type="tel"
        name="number"
        placeholder="Phone number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <Button type="submit">Add Contact</Button>
    </Form>
  );
};

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};

export default ContactForm;
