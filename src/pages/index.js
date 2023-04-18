import React from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional
import Layout from "../components/Layout";
import { skills, social, componentsLibraries } from "../data/skills";
import FlappyBird from "../components/FlappyBird";

const IndexPage = () => {
  return (
    <>
      <Layout>
        <div className="nes-container">
          <h2>Hey, I'm Gus!</h2>
          <h3 className="nes-text is-primary">
            I'm a Senior Frontend Developer.
          </h3>
        </div>
        <div className="nes-container with-title">
          <p className="title">Find me on</p>
          {social.map((el) => (
            <a
              key={el.url}
              href={el.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Tippy content={el.name}>
                <img
                  className="nes-avatar is-large"
                  src={el.image}
                  alt={el.name}
                />
              </Tippy>
            </a>
          ))}
        </div>
        <div className="nes-container with-title">
          <p className="title">Skills</p>
          <div className="nes-container is-rounded">
            <p className="title">Technologies</p>
            {skills.map((el) => (
              <Tippy key={el.name} content={el.name}>
                <img
                  className="nes-avatar is-large"
                  src={el.image}
                  alt={el.name}
                />
              </Tippy>
            ))}
          </div>
          <div className="nes-container is-rounded">
            <p className="title">Components Libraries</p>
            {componentsLibraries.map((el) => (
              <Tippy key={el.name} content={el.name}>
                <img
                  className="nes-avatar is-large"
                  src={el.image}
                  alt={el.name}
                />
              </Tippy>
            ))}
          </div>
        </div>
        <div className="nes-container with-title">
          <p className="title">Experiences</p>
          <div className="lists">
            <ul className="nes-list is-disc">
              <li>
                Frontend Tech Lead -
                <span className="nes-text is-primary"> LEVEE</span>
              </li>
              <li>
                Frontend Tech Lead -
                <span className="nes-text is-error"> Raia Drogasil S.A</span>
              </li>
              <li>
                Frontend Developer -
                <span className="nes-text is-primary"> Canaltech</span>
              </li>
              <li>
                Frontend Developer -
                <span className="nes-text is-error"> Docket Brasil</span>
              </li>
              <li>
                Game Developer -
                <span className="nes-text is-primary">
                  Messier Data & Creative
                </span>
              </li>
            </ul>
          </div>
        </div>
      </Layout>
      <FlappyBird />
    </>
  );
};

export function Head() {
  return (
    <>
      <title>About me</title>
      <meta property="og:title" content="About me" />
      <meta property="og:site_name" content="Gustavo A Roberto" />
      <meta property="og:url" content="https://www.gustavoaroberto.me/" />
      <meta property="og:description" content="Just some things about me" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="" />
    </>
  );
}

export default IndexPage;
