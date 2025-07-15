import rl from "readline-sync";
const URL = "http://localhost:3201/post";

async function getAllPosts() {
    const response = await fetch(URL);
    const posts = await response.json();
    console.table(posts);
  }
  
  async function createPost() {
    const post = createpostObj();
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });
    console.log(await response.json());
  }
  
  function createpostObj() {
    const post = {
      titel: rl.question("Enter titel: "),
      content: rl.question("Enter content: "),
    };
    return post;
  }
  

//   createPost()
  getAllPosts()