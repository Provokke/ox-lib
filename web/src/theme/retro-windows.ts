import { MantineThemeOverride } from '@mantine/core';

// Classic Windows 95/98 color palette
const retroColors = {
  // System colors
  buttonFace: '#c0c0c0',
  buttonShadow: '#808080',
  buttonDarkShadow: '#404040',
  buttonLight: '#dfdfdf',
  buttonHighlight: '#ffffff',
  windowFrame: '#808080',
  windowText: '#000000',
  captionText: '#ffffff',
  activeBorder: '#c0c0c0',
  inactiveBorder: '#c0c0c0',
  appWorkspace: '#808080',
  highlight: '#0000ff',
  highlightText: '#ffffff',
  btnText: '#000000',
  grayText: '#808080',
  menu: '#c0c0c0',
  menuText: '#000000',
  window: '#ffffff',
  scrollbar: '#c0c0c0',
  activeTitleBar: '#0000ff',
  inactiveTitleBar: '#808080',
  
  // Enhanced retro palette with more blue variations
  retroBlue: '#0000ff',
  retroBlueLight: '#3366ff',
  retroBlueDark: '#0000cc',
  retroBlueAccent: '#1a8cff',
  retroGray: '#c0c0c0',
  retroDarkGray: '#808080',
  retroLightGray: '#dfdfdf',
  retroWhite: '#ffffff',
  retroBlack: '#000000',
  retroGreen: '#008000',
  retroRed: '#ff0000',
  retroYellow: '#ffff00',
  retroCyan: '#00ffff',
  retroMagenta: '#ff00ff',
  // Additional accent colors
  accentBlue: '#4da6ff',
  selectedBlue: '#316ac5'
};

// Classic Windows fonts
const retroFonts = {
  system: 'MS Sans Serif, sans-serif',
  dialog: 'MS Shell Dlg, sans-serif',
  menu: 'MS Sans Serif, sans-serif',
  status: 'MS Sans Serif, sans-serif',
  caption: 'MS Sans Serif, sans-serif'
};

// Retro Windows theme configuration
export const retroWindowsTheme: MantineThemeOverride = {
  colorScheme: 'light',
  fontFamily: retroFonts.system,
  fontSizes: {
    xs: 10,
    sm: 11,
    md: 12,
    lg: 14,
    xl: 16
  },
  spacing: {
    xs: 2,
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16
  },
  radius: {
    xs: 0,
    sm: 0,
    md: 0,
    lg: 0,
    xl: 0
  },
  shadows: {
    xs: 'inset -1px -1px 0px #808080, inset 1px 1px 0px #ffffff',
    sm: 'inset -2px -2px 0px #808080, inset 2px 2px 0px #ffffff',
    md: 'inset -2px -2px 0px #404040, inset -1px -1px 0px #808080, inset 1px 1px 0px #dfdfdf, inset 2px 2px 0px #ffffff',
    lg: '2px 2px 0px #808080',
    xl: '3px 3px 0px #808080'
  },
  colors: {
    // Override default Mantine colors with retro palette
    dark: [
      retroColors.retroWhite,
      retroColors.retroLightGray,
      retroColors.buttonFace,
      retroColors.retroDarkGray,
      retroColors.buttonShadow,
      retroColors.buttonDarkShadow,
      retroColors.retroBlack,
      retroColors.retroBlack,
      retroColors.retroBlack,
      retroColors.retroBlack
    ],
    gray: [
      retroColors.retroWhite,
      retroColors.retroLightGray,
      retroColors.buttonFace,
      retroColors.retroDarkGray,
      retroColors.buttonShadow,
      retroColors.buttonDarkShadow,
      retroColors.retroBlack,
      retroColors.retroBlack,
      retroColors.retroBlack,
      retroColors.retroBlack
    ],
    blue: [
      '#e6f3ff',
      '#b3d9ff',
      retroColors.accentBlue,
      retroColors.retroBlueAccent,
      retroColors.retroBlueLight,
      retroColors.retroBlue,
      retroColors.selectedBlue,
      retroColors.retroBlueDark,
      '#0000b3',
      '#000099'
    ]
  },
  primaryColor: 'blue',
  primaryShade: 5,
  components: {
    Button: {
      styles: (theme) => ({
        root: {
          backgroundColor: retroColors.buttonFace,
          color: retroColors.btnText,
          border: `2px outset ${retroColors.buttonFace}`,
          borderRadius: 0,
          fontFamily: retroFonts.system,
          fontSize: 11,
          fontWeight: 'normal',
          padding: '2px 8px',
          minHeight: 23,
          boxShadow: 'none',
          '&:hover': {
            backgroundColor: retroColors.retroBlueLight,
            color: retroColors.retroWhite,
            border: `2px outset ${retroColors.retroBlueLight}`,
            transform: 'none'
          },
          '&:active': {
            backgroundColor: retroColors.retroBlueDark,
            color: retroColors.retroWhite,
            border: `2px inset ${retroColors.retroBlueDark}`,
            transform: 'none'
          },
          '&:focus': {
            outline: `1px dotted ${retroColors.retroBlue}`,
            outlineOffset: '-4px'
          },
          '&[data-variant="filled"]': {
            backgroundColor: retroColors.retroBlue,
            color: retroColors.retroWhite,
            border: `2px outset ${retroColors.retroBlue}`,
            '&:hover': {
              backgroundColor: retroColors.retroBlueLight,
              border: `2px outset ${retroColors.retroBlueLight}`
            }
          }
        }
      })
    },
    Paper: {
      styles: (theme) => ({
        root: {
          backgroundColor: retroColors.buttonFace,
          border: `2px outset ${retroColors.buttonFace}`,
          borderRadius: 0,
          boxShadow: 'none'
        }
      })
    },
    Modal: {
      styles: (theme) => ({
        modal: {
          backgroundColor: retroColors.buttonFace,
          border: `2px outset ${retroColors.buttonFace}`,
          borderRadius: 0,
          boxShadow: '2px 2px 4px rgba(0,0,0,0.5)'
        },
        header: {
          backgroundColor: retroColors.activeTitleBar,
          color: retroColors.captionText,
          padding: '2px 4px',
          minHeight: 18,
          fontFamily: retroFonts.caption,
          fontSize: 11,
          fontWeight: 'bold'
        },
        title: {
          fontSize: 11,
          fontWeight: 'bold',
          color: retroColors.captionText
        },
        body: {
          padding: 8,
          backgroundColor: retroColors.buttonFace
        }
      })
    },
    Menu: {
      styles: (theme) => ({
        dropdown: {
          backgroundColor: retroColors.menu,
          border: `2px outset ${retroColors.buttonFace}`,
          borderRadius: 0,
          boxShadow: '2px 2px 4px rgba(0,0,0,0.5)',
          padding: 2
        },
        item: {
          backgroundColor: 'transparent',
          color: retroColors.menuText,
          fontSize: 11,
          fontFamily: retroFonts.menu,
          padding: '2px 16px',
          borderRadius: 0,
          '&:hover': {
            backgroundColor: retroColors.retroBlue,
            color: retroColors.highlightText
          },
          '&[data-selected="true"]': {
            backgroundColor: retroColors.selectedBlue,
            color: retroColors.retroWhite
          }
        }
      })
    },
    Input: {
      styles: (theme) => ({
        input: {
          backgroundColor: retroColors.window,
          border: `2px inset ${retroColors.buttonFace}`,
          borderRadius: 0,
          color: retroColors.windowText,
          fontSize: 11,
          fontFamily: retroFonts.system,
          padding: '2px 4px',
          '&:focus': {
            borderColor: retroColors.retroBlue,
            border: `2px solid ${retroColors.retroBlue}`,
            boxShadow: `inset 0 0 3px ${retroColors.accentBlue}`,
            outline: 'none'
          },
          '&:hover': {
            borderColor: retroColors.retroBlueLight
          }
        }
      })
    },
    Text: {
      styles: (theme) => ({
        root: {
          fontFamily: retroFonts.system,
          fontSize: 11,
          color: retroColors.windowText
        }
      })
    },
    Title: {
      styles: (theme) => ({
        root: {
          fontFamily: retroFonts.system,
          fontWeight: 'bold',
          color: retroColors.windowText
        }
      })
    },
    Notification: {
      styles: (theme) => ({
        root: {
          backgroundColor: retroColors.buttonFace,
          border: `2px outset ${retroColors.buttonFace}`,
          borderRadius: 0,
          boxShadow: '2px 2px 4px rgba(0,0,0,0.5)'
        },
        title: {
          fontFamily: retroFonts.system,
          fontSize: 11,
          fontWeight: 'bold',
          color: retroColors.retroBlue
        },
        description: {
          fontFamily: retroFonts.system,
          fontSize: 11,
          color: retroColors.windowText
        },
        closeButton: {
          backgroundColor: retroColors.buttonFace,
          border: `1px outset ${retroColors.buttonFace}`,
          color: retroColors.retroBlue,
          '&:hover': {
            backgroundColor: retroColors.retroBlueLight,
            color: retroColors.retroWhite
          }
        }
      })
    },
    Progress: {
      styles: (theme) => ({
        root: {
          backgroundColor: retroColors.buttonFace,
          border: `2px inset ${retroColors.buttonFace}`,
          borderRadius: 0,
          height: 20,
          boxShadow: 'inset -1px -1px 0px #808080, inset 1px 1px 0px #ffffff'
        },
        bar: {
          backgroundColor: retroColors.retroBlue,
          background: `linear-gradient(90deg, ${retroColors.retroBlueDark} 0%, ${retroColors.retroBlue} 50%, ${retroColors.retroBlueDark} 100%)`,
          borderRadius: 0
        },
        label: {
          fontFamily: retroFonts.system,
          fontSize: 11,
          color: retroColors.windowText,
          fontWeight: 'normal'
        }
      })
    },
    RingProgress: {
      styles: (theme) => ({
        root: {
          '& .mantine-RingProgress-curve': {
            stroke: retroColors.retroBlue
          }
        }
      })
    }
  },
  globalStyles: (theme) => ({
    '*, *::before, *::after': {
      boxSizing: 'border-box'
    },
    body: {
      backgroundColor: retroColors.appWorkspace,
      fontFamily: retroFonts.system,
      fontSize: 11,
      color: retroColors.windowText,
      margin: 0,
      padding: 0
    },
    '#root': {
      backgroundColor: 'transparent',
      minHeight: '100vh'
    }
  })
};

export { retroColors, retroFonts };