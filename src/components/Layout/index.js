import React from "react";
import LayoutStyles from "./Layout.styles";

import "../../styles/reset.css";
import "nes.css/css/nes.min.css";

export default function Layout({ children }) {
  return <LayoutStyles>{children}</LayoutStyles>;
}
