import axios from "axios"
import { useState } from "react"

function App() {

  const apiJSH = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"

  })

  const [users, setUsers] = useState([])
  const [posts, setPosts] = useState([])

  async function buscarTodos() {

    const response = await apiJSH.get("/users")
  
    setUsers(response.data) 

  }

  async function buscarTodosPosts() {

    const response = await apiJSH.get("/posts")
  
    setPosts(response.data) 

  }

  async function criarUsuario() {

    const usuario = {
      nome: "Eu",
      email: "email@email.com"
    }

    const response = await apiJSH.post("/users", usuario)
  
    console.log(response.data) 

  }
 
  async function deletarUsuario() {

    const response = await apiJSH.delete("/users/3")
  
    console.log(response.data) 

  }

  return (
    <>
      <button onClick={buscarTodos}>Buscar usuários</button>
      <button onClick={criarUsuario}>Criar usuário</button>
      <button onClick={deletarUsuario}>Deletar usuário</button>
      <button onClick={buscarTodosPosts}>Buscar Posts</button>



      {users.map(user => <li key={user.id}>{user.name}</li>)}
      {posts.map(user => <li key={user.id}>{user.title}</li>)}
    </>
  )
}

export default App
