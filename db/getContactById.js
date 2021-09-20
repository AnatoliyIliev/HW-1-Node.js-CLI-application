const listContacts = require('./listContacts');

const getContactById = async() => {
    const contacts = await listContacts();
    const idx = contacts.findIndex(item => item.id === id);
};


module.exports = getContactById;