import ServiceCard from "../components/ServiceCard";
import styled from 'styled-components';

const Services = () => {
  return (
      <Wrapper>
          <Title>Services</Title>
          < ServiceCard />
      </Wrapper>
    );
  };
  
  export default Services;

  const Wrapper = styled.div`
    background-color: #dedede;
  `

  const Title = styled.h1`
    font-family: helvetica neue, arial, sans-serif;
    font-size: 600;
    text-align: center;
    color: #111111;
    padding-top: 20px;
  `
  