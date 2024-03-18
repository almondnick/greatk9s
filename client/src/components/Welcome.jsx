import React from 'react';
import styled from 'styled-components';
import photo from '../../src/assets/Cute-dogs.jpg'

const Welcome = () => {
    return (
            <Wrapper>
                <Banner>Welcome to Gimme Paw</Banner>
                <Pic src={photo}></Pic>
                <Paragraph>We are dedicated to helping you train and care for your furry friend.</Paragraph>
                <Hours>
                    Located at 69 Dawg St. in
                    St. Louis, MO 63118
                </Hours>
                <Hours>Hours of Operation: 9 a.m. to 5 p.m</Hours>
                <Paragraph>Explore our website to learn more about our services!</Paragraph>
            </Wrapper>
    )
}

export default Welcome;

const Banner = styled.h1`
    font-family: baskerville, serif;
    font-size: 48px;
    text-align: center;
    color: #111111;
    background-color: #92a8d1;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 2px 2px 5px #111111;
    max-width: 75%;
    margin-left: auto;
    margin-right: auto;
`;

const Wrapper = styled.div`
    background-color: #92a8d1;
    border-bottom: 2px solid #111111;
    padding-bottom: 10px;
    padding-top: 15px;
    align-items: center;
`

const Paragraph = styled.h4`
    font-family: baskerville, serif;
    text-align: center;
    color: #111111;
`

const Hours = styled.h4`
    font-family: baskerville, serif;
    text-align: center;
    color: #111111;
    font-weight: bold;
`

const Pic = styled.img`
    display: block;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    border: 2px solid #111111;
    border-radius: 2px;
    margin-top: 15px;
    margin-bottom: 15px;
    box-shadow: 1px 1px 10px #111111;
`