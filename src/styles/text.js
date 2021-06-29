import { createGlobalStyle } from 'styled-components';

import HeeboLight from '../fonts/Heebo-Light.ttf';
import HeeboRegular from '../fonts/Heebo-Regular.ttf';
import HeeboMedium from '../fonts/Heebo-Medium.ttf';
import HeeboBold from '../fonts/Heebo-Bold.ttf';

const GlobalTextStyles = createGlobalStyle`
    @font-face {
        font-family: 'Heebo';
        src: url(${HeeboLight}) format('truetype');
        font-weight: 300;
    }

    @font-face {
        font-family: 'Heebo';
        src: url(${HeeboRegular}) format('truetype');
        font-weight: 400;
    }

    @font-face {
        font-family: 'Heebo';
        src: url(${HeeboMedium}) format('truetype');
        font-weight: 500;
    }

    @font-face {
        font-family: 'Heebo';
        src: url(${HeeboBold}) format('truetype');
        font-weight: 700;
    }
`;

export const Text = {
    family: {
        heebo: 'Heebo, Sans-serif',
    },
    size:{
        small: '12px',
        default: '16px',
        medium: '18px',
        large: '24px',
        hero: '40px'

    },
    weight:{
        light: '300',
        default: '400',
        medium: '500',
        bold: '700'
    }
}

export default GlobalTextStyles;