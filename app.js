const contactsOperations = require('./db');
// const argv = require('yargs').argv;

const id = "3";

(async() => {
    try{
        // const contacts = await contactsOperations.listContacts();
        // console.log(contacts);
        const oneContacts = await contactsOperations.getContactById(id);
        console.log(oneContacts);
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