import React, { Component } from 'react';
import styles from './Filter.module.css'

class Filter extends Component {
    
    render() {
        const { filterValue, onInput } = this.props;
        return <div className={styles.filterField}>
            <h2>Contacts</h2>
        <label> <p>Find contact by name:</p>
            <input type="text" name="filter" onChange={onInput} value={filterValue}></input>
            </label>
            </div>
    }
}

export default Filter;