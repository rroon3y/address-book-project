document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const phoneNumber = document.getElementById("phone-number").value;
    const email = document.getElementById("email").value;

    
    const contact = new Contact(firstName, lastName, phoneNumber, email);

    
    if (!window.addressBook) {
        window.addressBook = new AddressBook();
    }

    
    addressBook.addContact(contact);

    
    addContactToUI(contact);


    document.getElementById("contact-form").reset();
});

function addContactToUI(contact) {
    const contactList = document.getElementById("contact-list");

    const li = document.createElement("li");
    li.textContent = `${contact.firstName} ${contact.lastName} - ${contact.phoneNumber} - ${contact.email}`;
    
    
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function() {
        addressBook.deleteContact(contact.id);
        contactList.removeChild(li);
    };
    li.appendChild(deleteButton);

    contactList.appendChild(li);
}

document.getElementById("place-form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const placeName = document.getElementById("place-name").value;
    const location = document.getElementById("location").value;
    const landmarks = document.getElementById("landmarks").value;
    const notes = document.getElementById("notes").value;

    
    const place = new Place(placeName, location, landmarks, notes);

    
    if (!window.places) {
        window.places = [];
    }

    
    places.push(place);

    
    addPlaceToUI(place);

    
    document.getElementById("place-form").reset();
});

function addPlaceToUI(place) {
    const placeList = document.getElementById("place-list");

    const div = document.createElement("div");
    div.innerHTML = `
        <strong>${place.placeName}</strong><br>
        Location: ${place.location}<br>
        Landmarks: ${place.landmarks}<br>
        Notes: ${place.notes}
    `;

    
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function() {
        const index = places.indexOf(place);
        if (index > -1) {
            places.splice(index, 1);
            placeList.removeChild(div);
        }
    };
    div.appendChild(deleteButton);

    placeList.appendChild(div);
}


function AddressBook() {
    this.contacts = [];
    this.currentId = 0;
}

AddressBook.prototype.assignId = function() {
    this.currentId += 1;
    return this.currentId;
};

AddressBook.prototype.addContact = function(contact) {
    contact.id = this.assignId();
    this.contacts.push(contact);
};

AddressBook.prototype.deleteContact = function(id) {
    const contactIndex = this.contacts.findIndex(contact => contact.id === id);
    if (contactIndex !== -1) {
        this.contacts.splice(contactIndex, 1);
    }
};

function Contact(firstName, lastName, phoneNumber, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.id = null;  
}

function Place(placeName, location, landmarks, notes) {
    this.placeName = placeName;
    this.location = location;
    this.landmarks = landmarks;
    this.notes = notes;
}
