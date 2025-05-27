import { chatgptTheme } from './chatgpt';
import { copilotTheme } from './copilot';
import { lightTheme } from './light';

export const themes = {
  chatgpt: chatgptTheme,
  copilot: copilotTheme,
  light: lightTheme
};

export type ThemeType = typeof chatgptTheme;
