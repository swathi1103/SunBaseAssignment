let bearerToken;

function authenticateUser() {
  const loginId = document.getElementById("login_id").value;
  const password = document.getElementById("password").value;

  
  bearerToken = "dummyBearerToken";

  showCustomerListScreen();
}

function showCustomerListScreen() {
  // Hide other screens and show the customer list screen
  document.getElementById("loginScreen").style.display = "none";
  document.getElementById("addCustomerScreen").style.display = "none";
  document.getElementById("customerListScreen").style.display = "block";

  // Fetch and display the customer list using the bearer token
  fetchCustomerList();
}

function showAddCustomerScreen() {
  // Hide other screens and show the add customer screen
  document.getElementById("loginScreen").style.display = "none";
  document.getElementById("customerListScreen").style.display = "none";
  document.getElementById("addCustomerScreen").style.display = "block";
}

function createCustomer() {
  // Get customer data from the form
  const firstName = document.getElementById("first_name").value;
  const lastName = document.getElementById("last_name").value;

  
  showCustomerListScreen();
}

function fetchCustomerList() {

  const dummyCustomerData = [{
    "first_name": "Jane",
    "last_name": "Doe",
    "street": "Elvnu Street",
    "address": "H no 2",
    "city": "Delhi",
    "state": "Delhi",
    "email": "sam@gmail.com",
    "phone": "12345678"
  }];

  updateCustomerTable(dummyCustomerData);
}

function updateCustomerTable(customerData) {
  const table = document.getElementById("customerTable");
  // Clear existing rows
  table.innerHTML = "";

  // Add header row
  const headerRow = table.insertRow(0);
  for (const key in customerData[0]) {
    const th = document.createElement("th");
    th.textContent = key.charAt(0).toUpperCase() + key.slice(1);
    headerRow.appendChild(th);
  }

  // Add data rows
  customerData.forEach((customer, index) => {
    const row = table.insertRow(index + 1);
    for (const key in customer) {
      const cell = row.insertCell();
      cell.textContent = customer[key];
    }
  });
}


let customerList = [];

function createCustomer() {
  // Get customer data from the form
  const firstName = document.getElementById("first_name").value;
  const lastName = document.getElementById("last_name").value;
  const street = document.getElementById("street").value;
  const address = document.getElementById("address").value;
  const city = document.getElementById("city").value;
  const state = document.getElementById("state").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  // Validate required fields (first_name and last_name)
  if (!firstName || !lastName) {
    alert("First Name and Last Name are required!");
    return;
  }

  // Create a new customer object
  const newCustomer = {
    "first_name": firstName,
    "last_name": lastName,
    "street": street,
    "address": address,
    "city": city,
    "state": state,
    "email": email,
    "phone": phone
  };

  // Add the new customer to the in-memory list
  customerList.push(newCustomer);

  // Show the customer list screen
  showCustomerListScreen();

  // Clear the form fields for the next entry
  document.getElementById("addCustomerForm").reset();
}

function showCustomerListScreen() {
  // Hide other screens and show the customer list screen
  document.getElementById("loginScreen").style.display = "none";
  document.getElementById("addCustomerScreen").style.display = "none";
  document.getElementById("customerListScreen").style.display = "block";

  // Display the customer list using the in-memory list
  updateCustomerTable(customerList);
}

function updateCustomerTable(customerData) {
  const table = document.getElementById("customerTable");
  // Clear existing rows
  table.innerHTML = "";

  // Add header row
  const headerRow = table.insertRow(0);
  for (const key in customerData[0]) {
    const th = document.createElement("th");
    th.textContent = key.charAt(0).toUpperCase() + key.slice(1);
    headerRow.appendChild(th);
  }

  // Add data rows
  customerData.forEach((customer, index) => {
    const row = table.insertRow(index + 1);
    for (const key in customer) {
      const cell = row.insertCell();
      cell.textContent = customer[key];
    }
  });
}

// Initial test data for demonstration
customerList.push({
  "first_name": "John",
  "last_name": "Doe",
  "street": "Main Street",
  "address": "Apt 123",
  "city": "Cityville",
  "state": "CA",
  "email": "john@example.com",
  "phone": "9876543210"
});


function showDeleteCustomerScreen() {
    // Hide other screens and show the delete customer screen
    document.getElementById("loginScreen").style.display = "none";
    document.getElementById("addCustomerScreen").style.display = "none";
    document.getElementById("customerListScreen").style.display = "none";
    document.getElementById("deleteCustomerScreen").style.display = "block";
    updateDeleteCustomerTable(customerList);
  }
  
  function updateDeleteCustomerTable(customerData) {
    const table = document.getElementById("deleteCustomerTable");

    table.innerHTML = "";
  

    const headerRow = table.insertRow(0);
    for (const key in customerData[0]) {
      const th = document.createElement("th");
      th.textContent = key.charAt(0).toUpperCase() + key.slice(1);
      headerRow.appendChild(th);
    }
  
    
    customerData.forEach((customer, index) => {
      const row = table.insertRow(index + 1);
      for (const key in customer) {
        const cell = row.insertCell();
        cell.textContent = customer[key];
      }
  
      
      const deleteCell = row.insertCell();
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.onclick = function () {
        deleteCustomer(index);
      };
      deleteCell.appendChild(deleteButton);
    });
  }
  
  function deleteCustomer(index) {
    customerList.splice(index, 1);
    showCustomerListScreen();
  }
  

  