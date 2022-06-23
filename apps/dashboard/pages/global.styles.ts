import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html {
        font-size: 10px;
    }
    body {
        font-family: ${(props) => props.theme.fonts.default};
        background-color: ${(props) => props.theme.colors.background};
        scroll-behavior: smooth;
        overflow-x: hidden;
        font-size: 1.6rem;

        &::-webkit-scrollbar {
            width: 7px;
        }

        /* Track */
        &::-webkit-scrollbar-track {
            box-shadow: inset 0 0 5px #f5f5f5;
            border-radius: 10px;
        }

        /* Handle */
        &::-webkit-scrollbar-thumb {
            background: #716e6e;
            border-radius: 10px;
        }

        /* Handle on hover */
        &::-webkit-scrollbar-thumb:hover {
            background: #333;
        }
    }

        p,
    ul,
    li {
        margin: 0;
    }

    li {
        list-style: none;
    }

    ul {
        padding: 0;
    }

    .container {
        width: 100%;
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
    }

    // Mobile
    @media (max-width: 767px) {
        .container {
            max-width: 767px;
        }
    }

    // Tablet
    @media (min-width: 768px) and (max-width: 1319) {
        .container {
            max-width: 1319;
        }
    }

    // Desktop
    @media (min-width: 1320px) {
        .container {
            max-width: 1320px;
        }
    }
`;
