import styled from 'styled-components';
import Card from 'react-bootstrap/Card';

const Reviews = ()=>  {
  return (
    <Wrapper>
        <Title>Testimonials</Title>
        <StyledCard>
        <Card.Header>Five Stars!</Card.Header>
        <Card.Body>
            <blockquote className="blockquote mb-0">
            <p>
                {' '}
                The most amazing experience I have ever had. They watched my dog for 6 months and asked no questions.
                {' '}
            </p>
            <footer className="blockquote-footer">
                Matt Rallo, <cite title="Source Title">St. Louis, MO</cite>
            </footer>
            </blockquote>
        </Card.Body>
        </StyledCard>
        <br></br>
        <StyledCard>
        <Card.Header>I was blown away.</Card.Header>
        <Card.Body>
            <blockquote className="blockquote mb-0">
            <p>
                {' '}
                After just one hour of training, my dog was able to cook a full three course meal for me and my family.
                {' '}
            </p>
            <footer className="blockquote-footer">
                Sarah Padilla, <cite title="Source Title">Kansas City, MO</cite>
            </footer>
            </blockquote>
        </Card.Body>
        </StyledCard>
    </Wrapper>
  );
}

export default Reviews;

const Wrapper = styled.div`
    border-top: 3px solid #111111;
    padding-top: 20px;
    padding-bottom: 20px;
    background-color: #92a8d1;
`

const Title = styled.h1`
    text-align: center;
    margin-bottom: 30px;
    font-family: baskerville, serif;
`

const StyledCard = styled(Card)`
    width: 70%;
    display: block;
    margin-right: auto;
    margin-left: auto;
    font-family: baskerville, serif;
    box-shadow: 1px 1px 10px #111111;
`