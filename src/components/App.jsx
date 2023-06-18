import { Component } from 'react';
import { AppContainer, Phonebook, Title } from './App.styled';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

class App extends Component {
  state = {
    contacts: [
      /* { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }, */
    ],
    filter: '',
  };

  componentDidMount() {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      this.setState({ contacts: JSON.parse(storedContacts) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = newContact => {
    const { contacts } = this.state;

    const isDuplicateName = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (isDuplicateName) {
      alert('This name is already in the contacts list.');
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  handleFilterChange = e => {
    this.setState({ filter: e.target.value });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.filterContacts();

    return (
      <AppContainer>
        <Phonebook>Phonebook</Phonebook>
        <ContactForm addContact={this.addContact} />
        <Title>Contacts</Title>
        <Filter filter={filter} onChange={this.handleFilterChange} />
        <ContactList
          filteredContacts={filteredContacts}
          deleteContact={this.deleteContact}
        />
      </AppContainer>
    );
  }
}

export default App;
