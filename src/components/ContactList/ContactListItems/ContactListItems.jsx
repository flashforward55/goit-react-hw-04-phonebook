import PropTypes from 'prop-types';
import {
  ContactListItem,
  ContactName,
  ContactNumber,
  DeleteButton,
} from './ContactListItems.styled';

const ContactListItems = ({ contact, deleteContact }) => {
  const handleDelete = () => {
    deleteContact(contact.id);
  };

  return (
    <ContactListItem>
      <ContactName>{contact.name}</ContactName>
      <ContactNumber>{contact.number}</ContactNumber>
      <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
    </ContactListItem>
  );
};

ContactListItems.propTypes = {
  contact: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactListItems;
