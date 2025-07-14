import User from "../moddles/user.js";

async function getAllUsers() {
  return await User.findAll({ raw: true });
}

async function createUser(name, email) {
  try {
    User.create({
      name: name,
      email: email
    })
    console.log("user added");
  } catch (err) {
    console.log("create user error massege: ", err);
  }
}

export {
    getAllUsers, 
    createUser
}
