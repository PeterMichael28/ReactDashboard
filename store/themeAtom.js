import {atom} from 'recoil';

export const themeState = atom( {
    key: 'theme', // unique ID (with respect to other atoms/selectors)
    default: false, // default value (aka initial value)
  });