import { createPost, getAllPosts } from "../dal/postDal.js";

async function getAll(req, res) {
  try {
    const posts = await getAllPosts();
    res.json(posts);
  } catch (err) {
    console.log("get all error massege: ", err);
    res.status(500).json({ msg: err });
  }
}

async function addPost(req, res) {
  createPost(req.body.titel, req.body.content)
  res.json({ msg: "post added! "})
}

export {
    getAll,
    addPost
}