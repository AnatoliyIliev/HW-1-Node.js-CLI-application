const listContacts = require('./listContacts');

const removeContact = async() => {
    const contacts = await listContacts();
    const idx = contacts.findIndex(item => item.id === id);
    if (idx === -1){
        return null;
    }
    return contacts[idx];
};


module.exports = removeContact;