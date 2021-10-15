import React from "react";
import styled from "styled-components";
import skyTexture from "../../images/stars.png";

const MainStyle = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    background: url(${skyTexture});
    background-size: cover;
    background-repeat: repeat;
    transition: all 0.4s;
`;

export default function Main({
    children,
    onMouseMove,
    onTouchMove,
    reference,
}) {
    return (
        <MainStyle
            ref={reference}
            onMouseMove={onMouseMove}
            onTouchMove={onTouchMove}
        >
            {children}
        </MainStyle>
    );
}
