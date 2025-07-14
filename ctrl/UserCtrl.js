import { createUser, getAllUsers } from "../dal/userDal.js";

async function getAll(req, res) {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (err) {
    console.log("get all error massege: ", err);
    res.status(500).json({ msg: err });
  }
}

async function addUser(req, res) {
  createUser(req.body.name, req.body.email)
  res.json({ msg: "user added! "})
}

export {
    getAll,
    addUser
}