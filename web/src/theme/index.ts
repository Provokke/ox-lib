import { MantineThemeOverride } from '@mantine/core';
import { retroWindowsTheme } from './retro-windows';

// Original dark theme
export const darkTheme: MantineThemeOverride = {
  colorScheme: 'dark',
  fontFamily: 'Roboto',
  shadows: { sm: '1px 1px 3px rgba(0, 0, 0, 0.5)' },
  components: {
    Button: {
      styles: {
        root: {
          border: 'none',
        },
      },
    },
  },
};

// Export retro theme as default for 90s Windows aesthetic
export const theme: MantineThemeOverride = retroWindowsTheme;

// Export both themes for flexibility
export { retroWindowsTheme };
export default theme;
