import PropTypes from 'prop-types';
import { ContactListContainer } from './ContactList.styled';
import ContactListItems from './ContactListItems';

const ContactList = ({ filteredContacts, deleteContact }) => {
  return (
    <ContactListContainer>
      {filteredContacts.map(contact => (
        <ContactListItems
          key={contact.id}
          contact={contact}
          deleteContact={deleteContact}
        />
      ))}
    </ContactListContainer>
  );
};

ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
