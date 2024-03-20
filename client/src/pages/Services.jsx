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
    padding-top: 15px;
  `

  const Title = styled.h1`
  font-family: helvetica neue, arial, sans-serif;
  font-size: 48px; 
  text-align: center;
  color: #111111;
  padding: 10px;
  background-color: #fefefe;
  border-radius: 5px;
  box-shadow: 2px 2px 5px #111111;
  max-width: 75%;
  margin-left: auto;
  margin-right: auto;
`;

  