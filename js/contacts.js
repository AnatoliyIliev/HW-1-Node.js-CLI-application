const fs = require("fs/promises");
const contactsPath = require('./contacts');

const contactsPath = path.join(__dirname, "contacts.json");

const listContacts = async() => {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data);
    return contacts;
};


module.exports = listContacts;