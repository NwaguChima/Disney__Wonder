import {
  Container,
  Content,
  BgImage,
  CTA,
  CTALogoOne,
  SignUp,
} from "./Login.styles";

const Login = () => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="/images/cta-logo-one.svg" alt="" />
          <SignUp>GET ALL THERE</SignUp>
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
};

export default Login;
