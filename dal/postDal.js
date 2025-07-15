import Post from "../moddles/post.js";

async function getAllPosts() {
  return await Post.findAll({ raw: true });
}

async function createPost(titel, content) {
  try {
    Post.create({
      titel: titel,
      content: content,
    });
    console.log("post added");
  } catch (err) {
    console.log("create post error massege: ", err);
  }
}

export { getAllPosts, createPost };
