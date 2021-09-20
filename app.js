const contactsPath = require('./db/contacts.json');


(async() => {
    try{
        // const contacts = await contactsPath.getAll();
        const contacts = await contactsPath;
        console.log(contacts);
    }
    catch(error) {
        console.log(error.message)
    }
})();