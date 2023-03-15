

/********* Array to Store Contact

// Regex to validate phone number

// Function to add contact list - function will have to include:
// Get Name and value, validate statement for Regex and then check if number already exists (check.find) - if existing send alert if not push to contact end of list
 
// Clear input and update list - function to update contact list - clear current list and loop through the contacts array to add element to contact list
// Function to search contact by name- use filter? Find contact that matches search term and update list to show contact
*********/ 

// Define an array to store the contacts
let contacts = [];

// Define a regular expression to validate the phone number input
let phoneRegex = /^\d{10}$/;

// Define a function to add a contact to the list
function addContact() {
  // Get the name and number input values
  let nameInput = document.getElementById("name-input");
  let numberInput = document.getElementById("number-input");
  let name = nameInput.value;
  let number = numberInput.value;

  // Validate the phone number using the regular expression
  if (!phoneRegex.test(number)) {
    alert("Please enter a valid 10-digit phone number.");
    return;
  }

  // Check if the number is already in the contacts array
  let existingContact = contacts.find(function(contact) {
    return contact.number === number;
  });

  if (existingContact) {
    // If the number is already in the contacts array, show an error message
    alert("This number is already in your contacts.");
  } else {
    // If the number is not in the contacts array, create a new contact object and add it to the array
    let contact = { name, number };
    contacts.push(contact);

    // Clear the input fields
    nameInput.value = "";
    numberInput.value = "";

    // Update the contact list
    updateContactList();
  }
}

// Define a function to update the contact list
function updateContactList() {
  // Get the contact list ul element
  let contactList = document.getElementById("contact-list");

  // Clear the current contact list items
  contactList.innerHTML = "";

  // Loop through the contacts array and add li elements to the contact list
  for (let i = 0; i < contacts.length; i++) {
    let contact = contacts[i];
    let li = document.createElement("li");
    li.textContent = contact.name + ": " + contact.number;
    contactList.appendChild(li);
  }
}

// Define a function to search for a contact by name
function search() {
  // Get the search input value
  let searchInput = document.getElementById("search-input");
  let searchTerm = searchInput.value;

  // Filter the contacts array to find contacts that match the search term
  let searchResults = contacts.filter(function(contact) {
    return contact.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  // Update the contact list with the search results
  let contactList = document.getElementById("contact-list");
  contactList.innerHTML = "";

  for (let i = 0; i < searchResults.length; i++) {
    let contact = searchResults[i];
    let li = document.createElement("li");
    li.textContent = contact.name + ": " + contact.number;
    contactList.appendChild(li);
  }
}

// Add an event listener to the search input field to update the search results in real-time
let searchInput = document.getElementById("search-input");
searchInput.addEventListener("input", search);

// Fetch data from API and populate contact list
fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data => {
    contacts = data.map(user => {
      return {
        name: user.name,
        number: user.phone.replace(/[^\d]/g, '') // remove non-digit characters from phone number
      }
    });

    updateContactList();
  })
  .catch(error => console.error(error));