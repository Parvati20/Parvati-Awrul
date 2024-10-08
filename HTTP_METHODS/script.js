//HTTP => Hypertext Transfer Protocol

//Server = > Server is a computer that provides services to other computers in the same or other computers.

//HTTP Methods = these are the verbs that we use to interact with the server

//GET, POST, PUT, DELETE

// Get Method = > It is used to get the data from the server

//POST Method => It is used to send the data to the server  ==> create new data

//PUT Method => It is used to update the data on the server => update the existing data

//DELETE Method => It is used to delete the data from the server => delete the existing data

//Fetch API => It is used to make the request to the server.
//it provides an interface for fetching resources asynchronously across the network.
//It uses a  promise or it returns a promise

//url = https://reqres.in/api/users?page=1

//CAllback hell => It is a situation where the code is written in a nested manner and it becomes difficult to read and understand the code.

// URL to fetch data from
const url = 'https://reqres.in/api/users?page=1';

// Make a GET request using fetch
fetch(url)
  .then(response => {
    // Check if the response is okay
    if (response.ok) {
      return response.json(); // Convert the response to JSON
    } else {
      throw new Error('Failed to fetch data'); // Handle error
    }
  })
  .then(data => {
    console.log(data); // Log the data to the console
  })
  .catch(error => {
    console.error(error); // Log any errors
  });