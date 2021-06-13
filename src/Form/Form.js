import React, { Component } from 'react';
import buttonStyles from '../commonStyles/button.module.css'
import styles from './Form.module.css'

class Form extends Component {
    state = {
        name: '',
        number: ''
    }


    onInput = e => {
        const value = e.target.value;
        const fieldName = e.target.name;

        this.setState({
        [fieldName]: value
        })
    }

    onFormSubmitButtonClick = e => {
        e.preventDefault();

        const name = this.state.name;
        const number = this.state.number;
        
        this.setState({
            name: "",
            number: ""
        });
            
        this.props.onFormSubmit(number, name);
    }
    
    render(){
        const { name, number } = this.state;

        return <form onSubmit={this.onFormSubmitButtonClick} className={styles.formBox}>
            <label> <p>Name:</p> 
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
                value={name}
                    onChange={this.onInput}
                />
            </label>

            <label> <p>Telephone number:</p> 
                <input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Номер телефона должен состоять из цифр, может содержать пробелы, тире, круглые скобки и может начинаться с +"
                required
                value={number}
                    onChange={this.onInput}
                />
            </label>
            
            <button type="submit" className={buttonStyles.button}> Add a contact</button>
        </form>
    }
    
}

export default Form;