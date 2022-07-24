// function createUser(email, password) {
//   if (!email || !email.includes("@") || !password || password.trim() === "") {
//     console.log("Invalid input!");
//     return;
//   }

//   const user = {
//     email,
//     password,
//   };

//   database.insert(user);
// }

// After refactor
function createUser(email, password) {
  if (inputIsNotValid(email, password)) {
    showErrorMessage("No valid input!");
    return;
  }
  saveUser(email, password);
}

function inputIsNotValid(email, password) {
  return !email || !email.includes("@") || !password || password.trim() === "";
}

function showErrorMessage(message) {
  console.log(message);
}

function saveUser(email, password) {
  const user = {
    email,
    password,
  };

  database.insert(user);
}
