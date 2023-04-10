const header = {
  "Content-type": "application/json; charset=UTF-8",
};

const getPosts = async () => {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts");
  let data = await response.json();

  console.log(data);
};

//getPosts();

const newPost = async () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  let options = {
    method: "POST",
    body: {
      title: "Teste1",
      body: "Este é um novo teste1",
      userId: 5,
    },
  };

  let response = await fetch(url, options, header);
  let data = await response.json();

  console.log(data);
};

//newPost();

const updatePost = async (id, body) => {
  const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
  let options = {
    method: "PUT",
    body: JSON.stringify(body),
  };

  let response = await fetch(url, options, header);
  let json = await response.json();

  console.log(json);
};

// updatePost(3, {title: "teste", body:'teste updating body', userId:10});

const deletePost = async(id)=>{
 const url = `https://jsonplaceholder.typicode.com/posts/${id}`
 let response = await fetch(url, { method:'DELETE'})
 console.log('deletado');
}

deletePost(3)