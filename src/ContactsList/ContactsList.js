import React, {Component} from 'react';
import checkList from '../Elements/checkList'
import buttonStyles from '../commonStyles/button.module.css'
import styles from './ContactList.module.css'


class ContactsList extends Component {

    renderContactList = list => {
        return <ul className={styles.list}>
        {list.map(contact => <li id={contact.id} key={contact.id} className={styles.listItem}><p><b>Name: </b>{contact.name}</p> <p><b>Number: </b>{contact.number}</p> <button type="button" onClick={this.props.deleteFunc} className={buttonStyles.button}>Delete</button></li>)}
    </ul>
    }

    render() {
        const { state: { contacts, filter } } = this.props;
        const contactListFiltered = checkList(contacts, "name", filter);

        return this.renderContactList(contactListFiltered)
    }
    
}

export default ContactsList;