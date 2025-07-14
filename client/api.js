import rl from "readline-sync";
const URL = "http://localhost:3201/user";

async function getAllUsers() {
  const response = await fetch(URL);
  const users = await response.json();
  console.table(users);
}

async function createUser() {
  const user = createUserObj();
  const response = await fetch(URL, {
    method: "POST",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  console.log(await response.json());
}

function createUserObj() {
  const user = {
    name: rl.question("Enter your name: "),
    email: rl.question("Enter your email: "),
  };
  return user;
}

// createUser();
 getAllUsers()
