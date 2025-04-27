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
