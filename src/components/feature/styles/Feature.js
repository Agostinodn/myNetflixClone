import styled from "styled-components/macro"

export const Container = styled.div `
display: flex;
flex-direction: column;
border-bottom: 8px solid solid #222;
text-align: center;
`;

export const Title = styled.h1 `
color: #ffffff;
max-width: 640px;
font-size: 60px;
font-weight: 500;
margin: 120px auto 0px auto;

@media (max-width: 600px){
    font-size: 40px
}
`;

export const SubTitle = styled.h2 `
font-size: 30px;
font-weight: normal;
margin: 16px auto;

@media (max-width: 600px){
    font-size: 20px
}
`;