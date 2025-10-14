# ox_lib - Retro Windows 2000s Theme

A nostalgic Windows 2000s-inspired theme for the ox_lib FiveM resource, bringing back the classic aesthetic of early 2000s computing with modern functionality.

## 🎨 Features

### Visual Design
- **Authentic Windows 2000s Aesthetic**: Classic blue title bars, silver-gray backgrounds, and iconic button styles
- **Retro Color Palette**: Carefully selected colors that match the original Windows 2000/XP era
- **Classic Typography**: Period-appropriate fonts including Tahoma and MS Sans Serif
- **Nostalgic UI Elements**: Raised borders, classic shadows, and vintage button designs

### Component Coverage
- ✅ **Notifications**: Toast notifications with retro styling
- ✅ **Progress Indicators**: Classic progress bars and loading animations  
- ✅ **Interactive Elements**: Buttons, inputs, and form controls
- ✅ **Dialog Boxes**: Modal dialogs with authentic window chrome
- ✅ **Context Menus**: Right-click menus with classic appearance
- ✅ **Input Controls**: Text fields, dropdowns, and checkboxes

## 🚀 Installation

### Method 1: Direct Download
1. Download the latest release from the [Releases](https://github.com/Provokke/ox-lib/releases) page
2. Extract the files to your `resources/[ox]/ox_lib` directory
3. Restart your FiveM server

### Method 2: Git Clone
```bash
git clone https://github.com/Provokke/ox-lib.git
cd ox-lib
# Copy files to your FiveM server resources directory
```

### Method 3: Manual Installation
1. Download the source code as ZIP
2. Extract to your server's `resources/[ox]/ox_lib` folder
3. Ensure `ox_lib` is started in your `server.cfg`

## ⚙️ Configuration

The theme includes a centralized configuration system:

```json
{
  "theme": {
    "name": "retro-windows-2000s",
    "version": "1.0.0",
    "colors": {
      "primary": "#0054E3",
      "secondary": "#ECE9D8", 
      "accent": "#316AC5"
    },
    "fonts": {
      "primary": "Tahoma",
      "secondary": "MS Sans Serif"
    }
  }
}
```

## 🎯 Compatibility

- **FiveM**: Compatible with latest FiveM builds
- **ox_lib**: Requires ox_lib v3.0.0 or higher
- **Browsers**: Chrome 90+, Firefox 88+, Edge 90+
- **Performance**: Optimized for 60+ FPS gameplay

## 📸 Screenshots

*Screenshots showcasing the retro Windows 2000s theme will be added here*

## 🛠️ Development

### Prerequisites
- Node.js 18+
- pnpm or npm
- FiveM Server

### Setup
```bash
cd web
pnpm install
pnpm dev
```

### Building
```bash
pnpm build
```

## 📋 Changelog

### v1.0.0 (Initial Release)
- Complete visual overhaul with Windows 2000s theme
- All ox_lib components styled with retro aesthetic
- Centralized theme configuration system
- Performance optimizations
- Comprehensive documentation

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING-RETRO-THEME.md) for details.

### Quick Start for Contributors
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/retro-enhancement`
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE-RETRO-THEME) file for details.

## 🙏 Acknowledgments

- Original ox_lib developers for the excellent foundation
- Windows 2000/XP design team for the timeless aesthetic
- FiveM community for continued support and feedback

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/Provokke/ox-lib/issues)
- **Discussions**: [GitHub Discussions](https://github.com/Provokke/ox-lib/discussions)
- **Discord**: [FiveM Development Community](https://discord.gg/fivem)

## 🔗 Links

- [Original ox_lib Repository](https://github.com/overextended/ox_lib)
- [FiveM Documentation](https://docs.fivem.net/)
- [Retro Theme Documentation](README-RETRO-THEME.md)

---

**Made with ❤️ for the FiveM community**

*Bringing back the nostalgia of early 2000s computing to modern FiveM servers*
