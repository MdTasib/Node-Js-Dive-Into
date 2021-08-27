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

exports.updateContact = (req, res) => {
  const { id } = req.params;
  id = parseInt(id);

  let { name, email, phone } = req.body;
  const contact = contacts.updateContactById({
    name,
    email,
    phone
  });

  res.json(contact);
};

exports.deleteContact = (req, res) => {
  const { id } = req.params;
  id = parseInt(id);

  let contact = contacts.deleteContactById(id);
  res.json(contact);
};