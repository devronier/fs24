import axios from "axios";
import Link from "next/link";

async function Posts() {
  const resposta = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );

  const posts = resposta.data;

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          {" "}
          <h4>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </h4>{" "}
          <p>{post.body}</p>{" "}
        </li>
      ))}
    </ul>
  );
}

export default Posts;
