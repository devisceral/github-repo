import styled, {keyframes, css} from "styled-components";

export const Container = styled.div`
  max-width: 700px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0,0,0, 0.2);
  padding: 30px;
  margin: 80px auto;

  h1 {
    font-size: 20px;
    display: flex;
    align-items: center;
    flex-direction: row;

    svg {
      margin-right: 10px;
    }
  }
`;

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row; //Para o botão ficar grudado ao input

  input {
    flex: 1; //para esse input pegar toda a largura da nossa tela
    border: 1px solid #DDD;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 17px;
  }
`;

// Criando animação do botão

const animate = keyframes`
  from{
    transform: rotate(0deg);
  }

  to{
    transform: rotate(360deg);
  }
`;


export const SubmitButton = styled.button.attrs(props => ({
  type:"submit",
  disabled: props.loading,
}))`

  background: #0d2636;
  border: 0;
  border-radius: 4px;
  margin-left: 10px;
  padding: 0 15px;
  //Para garantir que ele vai estar sempre alinhado ao centro
  display: flex;
  align-items: center;
  justify-content: center;

  /* quando a propriedade for disabled: */
  &[disabled]{
    cursor: not-allowed;
    opacity: 0.5;
  }

  ${props => props.loading &&
    css`
      svg{
        animation:${animate} 2s linear infinite;
      }
    `
  }

`;