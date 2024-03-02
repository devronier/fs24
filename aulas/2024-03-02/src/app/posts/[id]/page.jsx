import axios from "axios";

export default async function Post({ params }) {
  console.log(params);
  const resposta = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post = resposta.data;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
