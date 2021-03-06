import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

:root {
    --fluid-min-width: 320;
    --fluid-max-width: 1140;

    --fluid-screen: 100vw;
    --fluid-bp: calc(
        (var(--fluid-screen) - var(--fluid-min-width) / 16 * 1rem) /
            (var(--fluid-max-width) - var(--fluid-min-width))
    );

    --mistyBlue: #bdc6d9;
    --blueGray: #52688f;
    --mistyBlueLight: #e3e7f1;
    --cornflower: #7391c8;
    --white: #fff;
    --black: #000;
}

@media screen and (min-width: 1140px) {
    :root {
        --fluid-screen: calc(var(--fluid-max-width) * 1px);
    }
}

*,
*::before,
*::after {
    box-sizing: border-box;
}
* {
    margin: 0;
}
html,
body {
    height: 100%;
}
body {
    line-height: 1.5;
    background-color: var(--cornflower);
    -webkit-font-smoothing: antialiased;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
        'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
        'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
img,
svg {
    display: block;
    max-width: 100%;
}
input,
button,
textarea,
select {
    font: inherit;
}
p,
h1,
h2,
h3,
h4,
h5,
h6 {
    overflow-wrap: break-word;
}

code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
}

`;
