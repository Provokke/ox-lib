# 🖥️ ox_lib Retro Windows 2000s Theme

A nostalgic Windows 95/2000 themed reskin for ox_lib that brings back the classic retro computing aesthetic to your FiveM server.

![Windows 95 Theme Preview](https://img.shields.io/badge/Theme-Windows%2095-blue?style=flat-square&logo=windows95)
![Version](https://img.shields.io/badge/Version-1.0.0-green?style=flat-square)
![FiveM](https://img.shields.io/badge/FiveM-Compatible-orange?style=flat-square)

## 🎨 Features

### Authentic Retro Design
- **Classic Windows 95/2000 UI Elements**: Raised and inset borders, authentic button styling
- **Retro Color Palette**: Classic gray (#c0c0c0), Windows blue (#0080c0), and authentic system colors
- **MS Sans Serif Typography**: Period-accurate font styling throughout the interface
- **Pixel-Perfect Details**: Authentic shadows, borders, and visual effects

### Comprehensive Component Coverage
- ✅ **Notifications**: Classic Windows notification styling with raised borders
- ✅ **Progress Bars**: Authentic inset progress indicators with retro blue gradients
- ✅ **Context Menus**: Windows 95-style right-click menus
- ✅ **Dialog Boxes**: Classic modal dialogs with proper window chrome
- ✅ **Buttons**: Raised button styling with hover and focus states
- ✅ **Input Fields**: Inset text fields with authentic styling
- ✅ **Menu Lists**: Classic list item styling with proper selection states

## 📸 Screenshots

### Before & After Comparison
| Original ox_lib | Retro Windows Theme |
|----------------|-------------------|
| Modern flat design | Classic raised UI elements |
| Contemporary colors | Authentic Windows 95 palette |
| Sans-serif fonts | MS Sans Serif typography |

### Component Showcase
- **Notifications**: Classic Windows notification toasts
- **Progress Indicators**: Authentic progress bars with retro styling
- **Context Menus**: Period-accurate right-click menus
- **Dialog Windows**: Classic modal dialog styling

## 🚀 Installation

### Prerequisites
- FiveM Server with ox_lib installed
- Basic knowledge of FiveM resource management

### Method 1: Direct Installation (Recommended)

1. **Backup your current ox_lib**:
   ```bash
   cp -r resources/[ox]/ox_lib resources/[ox]/ox_lib_backup
   ```

2. **Download the theme files**:
   - Download the latest release from the [Releases](../../releases) page
   - Extract the files to your ox_lib directory

3. **Replace theme files**:
   ```bash
   # Copy the retro theme files
   cp web/src/theme/retro-windows.ts resources/[ox]/ox_lib/web/src/theme/
   cp web/src/index.css resources/[ox]/ox_lib/web/src/
   ```

4. **Rebuild the web interface**:
   ```bash
   cd resources/[ox]/ox_lib/web
   npm install
   npm run build
   ```

5. **Restart your server** or refresh the ox_lib resource

### Method 2: Git Clone

1. **Clone this repository**:
   ```bash
   git clone https://github.com/yourusername/ox_lib-retro-theme.git
   cd ox_lib-retro-theme
   ```

2. **Copy files to your ox_lib installation**:
   ```bash
   # Backup original
   cp -r /path/to/your/ox_lib /path/to/your/ox_lib_backup
   
   # Copy theme files
   cp -r web/src/* /path/to/your/ox_lib/web/src/
   ```

3. **Build and restart** as described in Method 1

## 🔧 Configuration

### Customizing Colors
Edit `web/src/theme/retro-windows.ts` to customize the retro color palette:

```typescript
export const retroColors = {
  buttonFace: '#c0c0c0',        // Classic Windows gray
  retroBlue: '#0080c0',         // Windows blue
  retroBlueDark: '#004080',     // Darker blue for gradients
  retroBlueLight: '#40a0e0',    // Lighter blue for highlights
  windowText: '#000000',        // Black text
  retroWhite: '#ffffff',        // Pure white
  retroBlack: '#000000',        // Pure black
};
```

### Font Customization
Modify the font settings in the same file:

```typescript
export const retroFonts = {
  system: 'MS Sans Serif, sans-serif',
  monospace: 'Courier New, monospace',
};
```

## 🎯 Compatibility

### Tested Versions
- ✅ ox_lib v3.x.x
- ✅ FiveM Server Build 6683+
- ✅ Modern browsers (Chrome, Firefox, Edge)

### Known Issues
- Some custom ox_lib modifications may require manual theme adjustments
- Third-party ox_lib extensions may not inherit the retro styling

## 🛠️ Development

### Building from Source

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/ox_lib-retro-theme.git
   cd ox_lib-retro-theme
   ```

2. **Install dependencies**:
   ```bash
   cd web
   npm install
   ```

3. **Development server**:
   ```bash
   npm start
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

### File Structure
```
ox_lib-retro-theme/
├── web/
│   ├── src/
│   │   ├── theme/
│   │   │   └── retro-windows.ts    # Main theme configuration
│   │   ├── index.css               # Global retro styles
│   │   └── components/             # Styled components
│   ├── package.json
│   └── vite.config.mjs
├── README.md
├── CHANGELOG.md
└── LICENSE
```

## 📝 Changelog

### Version 1.0.0 (Initial Release)
- ✨ Complete Windows 95/2000 theme implementation
- 🎨 Authentic retro color palette and typography
- 🔧 Comprehensive component styling coverage
- 📚 Full documentation and installation guide

## 🤝 Contributing

We welcome contributions to improve the retro theme! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Contribution Guidelines
- Maintain authentic Windows 95/2000 design principles
- Test changes across different ox_lib components
- Update documentation for any new features
- Follow the existing code style and conventions

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **ox_lib Team**: For creating the amazing ox_lib framework
- **Microsoft**: For the iconic Windows 95/2000 design language
- **Retro Computing Community**: For keeping the classic aesthetic alive
- **FiveM Community**: For continuous support and feedback

## 📞 Support

- **Issues**: Report bugs or request features via [GitHub Issues](../../issues)
- **Discord**: Join our community server for support and discussions
- **Documentation**: Check the [Wiki](../../wiki) for detailed guides

---

**Made with ❤️ and nostalgia for the golden age of computing**

*Bringing back the classic Windows experience to modern FiveM servers*