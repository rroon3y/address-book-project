function AddressBook() {
    this.contacts = [];
}

AddressBook.prototype.addContact = function (contact) {
    this.contacts.push(contact);
};

AddressBook.prototype.deleteContact = function (id) {
    this.contacts = this.contacts.filter(contact => contact.id !== id);
};

function Contact(firstName, lastName, phoneNumber, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.id = Date.now();
}


const addressBook = new AddressBook();


const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function (event) {
    event.preventDefault();


    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const phoneNumber = document.getElementById('phone-number').value;
    const email = document.getElementById('email').value;


    const newContact = new Contact(firstName, lastName, phoneNumber, email);


    addressBook.addContact(newContact);


    contactForm.reset();


    displayContacts();
});


function displayContacts() {
    const contactList = document.getElementById('contact-list');
    contactList.innerHTML = '';
    addressBook.contacts.forEach(contact => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${contact.firstName} ${contact.lastName} - ${contact.phoneNumber} - ${contact.email}</span>
            <button onclick="deleteContact(${contact.id})">Delete</button>
        `;
        contactList.appendChild(li);
    });
}


function deleteContact(id) {
    addressBook.deleteContact(id);
    displayContacts();
}

