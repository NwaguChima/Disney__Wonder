import { Container, Content, BgImage, CTA, CTALogoOne } from "./Login.styles";

const Login = () => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="/images/cta-logo-one.svg" alt="" />
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
};

export default Login;
