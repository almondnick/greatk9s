import styled from 'styled-components'

function Bottom(){
  
  return (
    <Footer>
        <Banner>Gimme Paw</Banner>
          <Information>
          <InformationRow>69 Dawg St.</InformationRow>
          <InformationRow>St. Louis, MO 63118</InformationRow>
          <InformationRow>555-555-5555</InformationRow>
          </Information>
        <Copyright>&copy;2024</Copyright>
    </Footer>
  );
};

export default Bottom;

const Footer = styled.footer`
  font-family: helvetica neue, arial, sans-serif;  
  text-align: center;
  border-top: 2px solid #111111;
`
const Banner = styled.h3`
  text-align: center;
  font-size: 20px;
  margin: 20px;
`
const Information = styled.div`
  line-height: 5px
`
const InformationRow = styled.p`
  color: #808080;
  font-size: 15px;
`
const Copyright = styled.h5`
  color: #2b2738;
  font-size: 10px;
  padding: 15px;
`