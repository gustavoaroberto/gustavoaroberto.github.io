import React from "react";
import styled from "styled-components";

const MainStyle = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
`;

export default function Main({ children }) {
    return <MainStyle>{children}</MainStyle>;
}
