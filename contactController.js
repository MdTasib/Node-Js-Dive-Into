const contacts = require('./Contacts');

exports.getAllContacts = (req, res) => {
  res.json(contacts.getAllContacts());
};

exports.createContact = (req, res) => {
  const { name, email, phone } = req.body;
  const contact = contacts.createContact({
    name,
    email,
    phone
  });

  res.json(contact);
};

exports.getContactById = (req, res) => {
  const { id } = req.params;
  id = parseInt(id);

  const contact = contacts.getContactsById(id);
  res.json(contact);
};