import styled from 'styled-components';

const Welcome = () => {
    

    return (
        <main>
            <Wrapper>
                <Banner>Welcome to Great K9s</Banner>
                <p>We are dedicated to helping you train and care for your furry friend.</p>
                <p>Explore our website to learn more or click below to book an appointment now!</p>
                <a href="/booknow" class="btn">Book Now</a>
            </Wrapper>
        </main>
    )
}

export default Welcome;

const Banner = styled.h1`
    font-size: x-large;
    text-align: center;
    color: #111111;
`

const Wrapper = styled.section`
    background-color: ;
    margin: 10px;
`