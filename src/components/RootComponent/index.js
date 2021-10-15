import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "styled-components";
import themes, { GlobalStyle } from "../../themes";

export default function RootComponent({ children }) {
    const [themeNumber] = useState(0);

    return (
        <ThemeProvider theme={themes[themeNumber]}>
            <GlobalStyle />
            <Helmet>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossorigin
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
                    rel="stylesheet"
                />
            </Helmet>
            {children}
        </ThemeProvider>
    );
}
