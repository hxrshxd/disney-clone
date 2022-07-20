import styled from 'styled-components';

const Login = (props) => {
  return (
    <Container>
      <Content>Content</Content>
    </Container>
  )
};

const Container = styled.section`
  overflow: hidden;
  display:flex;
  flex-direction: column:
  width: 100vw;
  justify-content: center;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10vw;
  min-height: 100vh;
  position: relative;
  box-sizing: border-box;
  height: 100%;
  padding: 80px 40px;
`

export default Login;