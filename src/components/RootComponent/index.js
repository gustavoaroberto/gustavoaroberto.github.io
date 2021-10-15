import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "styled-components";
import themes, { GlobalStyle } from "../../themes";

export default function RootComponent({ children }) {
    const [themeNumber, setTheme] = useState(0);

    const onChangeTheme = () => {
        console.log(themeNumber);
        if (themeNumber >= themes.length - 1) {
            setTheme(0);
        } else {
            setTheme(themeNumber + 1);
        }

        localStorage.setItem("gusTheme", themeNumber);
    };

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
            <button onClick={onChangeTheme}>Change theme</button>
            {children}
        </ThemeProvider>
    );
}
