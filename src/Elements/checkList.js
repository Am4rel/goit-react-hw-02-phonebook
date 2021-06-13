const checkList = (listOfContacts, condition, value) => {
    return listOfContacts.filter(item => { return item[condition].toString().toLowerCase().includes(value.toString().toLowerCase()) })
}

export default checkList;