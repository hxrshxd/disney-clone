import styled from 'styled-components';

const Login = (props) => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="/images/cta-logo-one.svg" alt='' />
          <SignUp>GET ALL THERE</SignUp>
          <Description>
            Get Premier Access to Raya and the Last Dragon for an additional fee  with a Disney+ Subscsription. As of 03/26/2021 , the price of Disney+ and the Disney Bundle will increase by $1.
          </Description>
          <CTALogoTwo src="/images/cta-logo-two.png" alt='' />
        </CTA>
        <BgImage />
      </Content>
    </Container>
  )
};

const Container = styled.section`
  overflow: hidden;
  display:flex;
  flex-direction: column;
  width: 100vw;
  justify-content: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // margin-bottom: 10vw;
  min-height: 100vh;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  padding: 80px 40px;
`;

const BgImage = styled.div`
  background-image: url('/images/login-background.jpg');
  height:100%;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`;

const CTA = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 650px;
  width: 100%;
  text-align: center;
`;

const CTALogoOne = styled.img`
  width: 100%;
  max-width: 600px;
  margin-bottom: 12px;
  display: block;
  min-height: 1px;
`;

const SignUp = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding: 16.5px 0;
  letter-spacing: 1.5px;
  color: white;
  background-color: #0064e0;
  text-align: center;
  border-radius: 4px;
  border: 1px solid transparent;
  margin-bottom: 12px;
  width: 100%;

  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  letter-spacing: 1.5px;
  font-size: 12px;
  color: hsla(0%, 0%, 95.3%, 1);
  margin: 0 0 24px;
  line-height: 1.5;
`;

const CTALogoTwo = styled.img`
  max-width: 600px;
  display: inline-block;
  margin-bottom: 20px;
  width: 100%;
  vertical-align: bottom;
`;

export default Login;