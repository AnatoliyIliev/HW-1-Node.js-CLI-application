const contactsOperations = require('./db');
const argv = require('yargs').argv;

async function invokeAction({ action, id, name, email, phone }) {
    switch (action) {
        case 'list':
            const contacts = await contactsOperations.listContacts();
            console.log(contacts);
            break;
    
        case 'get':
            const oneContact = await contactsOperations.getContactById(id);
            if(!oneContact) {
                throw new Error (`Товара с таким id=${id} нет`)
            }
            else{
                console.log(oneContact);
            }            
            break;
    
        case 'add':
            const newContact = await contactsOperations.addContact(name, email, phone);
            console.log(newContact);
            break;
    
        case 'remove':
            const removeContactsById = await contactsOperations.removeContact(id);
            if(!removeContactsById) {
                throw new Error (`Товара с таким id=${id} нет`)
            }
            else{
                console.log('Удаление прошло успешно');
            // console.log(removeContactsById);                
            }
            
            break;
    
        default:
            console.warn('\x1B[31m Unknown action type!');  //красный цвет ошибки
    }  
}

invokeAction(argv);