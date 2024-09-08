/**
 * README!
 * Usually colors have like 10 level starting from 50, 100, 200, ..., ..., 900
 * There's 5 main and 1 decorative key in every color, here's are the description below:
 * default: 400
 * dark: 500
 * darkest: 600
 * light: 100
 * decorative: except the level of main(above)
 * lightest: 50
 */

type ColorValues<T> = {
  [K in keyof T]: T[K] extends object ? ColorValues<T[K]> : T[K];
};

const ColorConstant = {
  white: '#FFFFFF',
  black: '#000000',
  teal: {
    default: '#00697F',
    dark: '#005466',
    darkest: '#003F4C',
    light: '#C1E0E7',
    lightest: '#E9F7FA',
    decorative: {
      200: '#72B2C0',
      300: '#228499',
      700: '#002A33',
    },
  },
  orange: {
    default: '#D45214',
    dark: '#A6471A',
    darkest: '#7D3514',
    light: '#F1CDBC',
    lightest: '#FAEEE9',
    decorative: {
      200: '#E39B7A',
      300: '#D97A4D',
      400: '#D05921',
      700: '#53240D',
    },
  },
  green: {
    default: '#10D180',
    dark: '#0DA766',
    darkest: '#0A7D4D',
    light: '#B7F1D9',
    lightest: '#E7FAF2',
    decorative: {
      200: '#70E3B3',
      300: '#40DA99',
      500: '#74B50C',
      700: '#065433',
    },
  },
  red: {
    default: '#ED260B',
    dark: '#C41800',
    darkest: '#9B1300',
    light: '#FFD7D1',
    lightest: '#FFE9E6',
    decorative: {
      200: '#FF7663',
      300: '#FF4F38',
      700: '#730E00',
    },
  },
  gray: {
    default: '#828282',
    dark: '#4E4E4E',
    darkest: '#343434',
    light: '#CDCDCD',
    lightest: '#DADADA',
    decorative: {
      25: '#F3F3F3',
      200: '#B4B4B4',
      300: '#9B9B9B',
      400: '#828282',
      500: '#686868',
      700: '#272727',
      800: '#1A1A1A',
    },
  },
  blue: {
    dark: '#374062',
    decorative: {
      500: '#018CB2',
    },
  },
  warning: {
    hard: '#D14848',
    medium: '#FF6F6F',
    soft: '#FFE4E4',
  },
  success: {
    medium: '#75D37F',
    soft: '#E7FFDC',
  },
  info: {
    medium: '#66A3FF',
    soft: '#EAF2FF',
  },
  alert: {
    medium: '#FFA24B',
    soft: '#FFF2E3',
  },
} as const;

const Colors: ColorValues<typeof ColorConstant> = ColorConstant;

export default Colors;
