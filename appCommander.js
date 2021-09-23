const contactsOperations = require('./db');
const { Command } = require('commander');

const program = new Command();
program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);

const argv = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
  console.log("invokeAction", id);
  switch (action) {
    case 'list':
      const contacts = await contactsOperations.listContacts();
      console.log(contacts);
      break;

    case 'get':
      console.log("get", id);
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
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);
