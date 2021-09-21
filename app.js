const contactsOperations = require('./db');
// const argv = require('yargs').argv;

const id = 3;

const newData = {
    name: "Boobiba Chocho",
    email: "Boobiba.Chocho@auris.net",
    phone: "(687) 5568-111"
};

(async() => {
    try{
        // const contacts = await contactsOperations.listContacts();
        // console.log(contacts);
        const oneContacts = await contactsOperations.getContactById(id);
        if(!oneContacts) {
            throw new Error (`Товара с таким id=${id}нет`)
        }
        // console.log(oneContacts);
        // const newContacts = await contactsOperations.addContact(newData.name, newData.email, newData.phone);
        // console.log(newContacts);
        const removeContacts = await contactsOperations.removeContact(id);
        console.log(removeContacts);
    }
    catch(error) {
        console.log(error.message)
    }
})();

//1:22
//2:15  yargs

// async function invokeAction({ action, id, name, email, phone }) {
//   switch (action) {
//     case 'list':
//         const contacts = await contactsOperations.listContacts();
//         console.log(contacts);
//         break;

//     case 'get':
//         const contacts = await contactsOperations.getContactById(id);
//         console.log(contacts);
//         break;

//     case 'add':
//       // ... name email phone
//         const contacts = await contactsOperations.addContact(name, email, phone);
//         console.log(contacts);
//         break;

//     case 'remove':
//         const contacts = await contactsOperations.removeContact(id);
//         console.log(contacts);
//         break;

//     default:
//       console.warn('\x1B[31m Unknown action type!');
//   }
// }

// invokeAction(argv);