import React, { useRef } from "react";
import styled from "styled-components";
import Main from "../components/Main";
import RootComponent from "../components/RootComponent";
import Comet from "../components/Comet";
import MarsTexture from "../images/mars_1k_color.jpg";

const Circle = styled.div`
    position: absolute;
    right: 0;
    width: 240px;
    height: 240px;
    background: url(${MarsTexture});
    background-size: 190%;
    border-radius: 50%;
    transform: rotateZ(-10deg);
    box-shadow: inset 0 0 10px #000000;
    overflow: hidden;
    z-index: 3;
`;
const IndexPage = () => {
    const circleRef = useRef();
    const mainRef = useRef();

    const onParallax = (event) => {
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        circleRef.current.style.right = 30 + mouseX / 300 + "%";
        circleRef.current.style.top = 20 + mouseY / 350 + "%";

        mainRef.current.style.backgroundPosition = `top -${
            mouseY / 80
        }px  right -${mouseX / 80}px `;
    };

    const onParallaxTouch = (event) => {
        const mouseX = event.touches[0].clientX;
        const mouseY = event.touches[0].clientY;

        console.log("mouseX: ", mouseX);
        console.log("mouseY: ", mouseY);

        circleRef.current.style.right = mouseX / 350 + "%";
        circleRef.current.style.top = mouseY / 400 + "%";

        mainRef.current.style.backgroundPosition = `top -${
            mouseY / 80
        }px  right -${mouseX / 80}px `;
    };

    return (
        <RootComponent>
            <Main
                reference={mainRef}
                onMouseMove={onParallax}
                onTouchMove={onParallaxTouch}
            >
                <Circle ref={circleRef} />
                <Comet />
            </Main>
        </RootComponent>
    );
};

export default IndexPage;
