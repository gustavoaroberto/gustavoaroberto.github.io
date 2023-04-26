import styled from "styled-components";

const COLORS = {
  FLOOR_BASE: "#a6a6a6",
  SKY: "#cccccc",
};

const generateStripes = () => {
  let test = "";
  let control = false;

  for (let index = 0; index < 100; index++) {
    if (control) {
      control = false;
      test = test.concat(`rgba(255,255,255,1) ${index}%, `);
    } else {
      control = true;
      test = test.concat(`rgba(0,0,0,1) ${index}%, `);
    }
  }

  return test.substr(0, test.length - 2);
};

const FlappyBirdStyles = styled.div`
  background-color: ${COLORS.SKY};
  box-shadow: 0px 0px 0px 2px rgba(0, 0, 0, 0.75);
  position: relative;
  width: 100%;
  height: 350px;
  overflow-x: hidden;

  & > * {
    user-select: none;
  }

  .floor {
    position: absolute;
    bottom: 0;
    height: 60px;
    width: 100%;
    background-color: ${COLORS.FLOOR_BASE};
    box-shadow: 0px 0px 0px 2px rgba(0, 0, 0, 0.75);
    z-index: 2;

    .floor-top {
      position: absolute;
      bottom: 55px;
      height: 10px;
      width: 100%;
      background: linear-gradient(140deg, ${generateStripes()});
      box-shadow: 0px 0px 0px 2px rgba(0, 0, 0, 0.75);
    }
  }
`;

export default FlappyBirdStyles;
