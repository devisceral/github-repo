import React from 'react'
import {Container, Form, SubmitButton} from "./styles"
import {FaGithub, FaPlus} from "react-icons/fa";

const Main = () => {
  return (
    <Container>
      <h1>
       <FaGithub size={25} />
        Meus Repositórios
      </h1>

      <Form onSubmit={()=>{}}>
        <input type="text" placeholder="Adicionar repositórios" />

        <SubmitButton>
          <FaPlus color="#FFF" size={14}  />
        </SubmitButton>

      </Form>
    </Container>
  )
}

export default Main
