import React from "react";
import styled from "styled-components";
import Main from "../components/Main";
import RootComponent from "../components/RootComponent";

const Title = styled.h1`
    font-family: "Bebas Neue", Arial, Helvetica, sans-serif;
`;

const IndexPage = () => (
    <RootComponent>
        <Main>
            <Title>Welcome to my world</Title>
        </Main>
    </RootComponent>
);

export default IndexPage;
