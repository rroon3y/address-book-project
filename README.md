# Address Book & Places You've Been  
#### A project to manage contacts and log visited places, Version 1.0, April 2025  
#### By **Rooney**

## Description  
This application helps users manage their contacts in an address book and track the places they have visited. Users can add contacts with details like name, phone number, and email, while also logging places they have been, including location, landmarks, and personal notes.

## Setup/Installation Requirements  
- No specific server setup required.
- Simply clone or download the repository to your local machine.
- Open the `index.html` file in your browser to run the application.

## Known Bugs  
None

## Technologies Used  
- HTML5  
- CSS3  
- JavaScript (Vanilla JS)

## Support and Contact Details  
Feel free to reach out to me via email at alexrooney2016@gmail.com if you have any questions or suggestions.

### License  
MIT License - Copyright (c) 2025 Rooney

---

# Address Book Project

## Business Logic Tests

### Test 1: It should correctly create a Contact object.
**Code:**
const contact = new Contact("Ada", "Lovelace", "503-555-0100", "ada@lovelace.com");

**Expected Output:**
- contact.firstName is "Ada"
- contact.lastName is "Lovelace"
- contact.phoneNumber is "503-555-0100"
- contact.email is "ada@lovelace.com"


### Test 2: It should correctly add a Contact to the AddressBook.
**Code:**
const addressBook = new AddressBook();
const contact = new Contact("Ada", "Lovelace", "503-555-0100", "ada@lovelace.com");
addressBook.addContact(contact);

**Expected Output:**
- addressBook.contacts array contains 1 contact.
- The contact's firstName is "Ada".

### Test 3: It should assign an id to each new contact.
**Code:**
const addressBook = new AddressBook();
const contact = new Contact("Alan", "Turing", "503-555-0101", "alan@turing.com");
addressBook.addContact(contact);

**Expected Output:**
- contact.id is 1.

### Test 4: It should find a contact based on id.
**Code:**
addressBook.findContact(1);

**Expected Output:**
- Returns the Contact with firstName "Alan".

### Test 5: It should delete a contact by id.
**Code:**
addressBook.deleteContact(1);

**Expected Output:**
- The contacts array no longer contains the contact with id 1.
