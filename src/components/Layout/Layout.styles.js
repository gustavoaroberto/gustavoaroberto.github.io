import styled from "styled-components";

const LayoutStyles = styled.main`
  padding: 20px;

  .nes-avatar {
    margin-left: 8px;
    margin-bottom: 8px;
  }

  img {
    image-rendering: pixelated;
    filter: grayscale(100%);
  }

  .nes-container {
    margin-bottom: 20px;
  }

  li {
    margin-bottom: 8px;
  }
`;

export default LayoutStyles;
