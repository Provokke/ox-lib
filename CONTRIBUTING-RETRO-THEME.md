# 🤝 Contributing to ox_lib Retro Windows Theme

Thank you for your interest in contributing to the ox_lib Retro Windows Theme! This document provides guidelines and information for contributors.

## 🎯 Project Vision

Our goal is to create an authentic, nostalgic Windows 95/2000 experience for ox_lib users while maintaining:
- **Authenticity**: True to the original Windows design language
- **Performance**: Minimal impact on ox_lib functionality
- **Compatibility**: Works seamlessly with existing ox_lib features
- **Quality**: High-quality, production-ready code

## 🚀 Getting Started

### Prerequisites
- Node.js 16 or higher
- Git
- Basic knowledge of TypeScript/JavaScript
- Familiarity with CSS and web development
- Understanding of ox_lib structure (helpful but not required)

### Development Setup
1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/ox-lib-retro-theme.git
   cd ox-lib-retro-theme
   ```
3. **Install dependencies**:
   ```bash
   cd web
   npm install
   ```
4. **Start development server**:
   ```bash
   npm start
   ```

## 📋 How to Contribute

### 🐛 Reporting Bugs
Before creating bug reports, please check existing issues to avoid duplicates.

**Bug Report Template:**
```markdown
**Describe the bug**
A clear description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '....'
3. See error

**Expected behavior**
What you expected to happen.

**Screenshots**
If applicable, add screenshots.

**Environment:**
- ox_lib version: [e.g. v3.0.0]
- FiveM build: [e.g. 2802]
- Browser: [e.g. Chrome 90]
- Theme version: [e.g. v1.0.0]
```

### 💡 Suggesting Features
We welcome feature suggestions! Please use the feature request template:

**Feature Request Template:**
```markdown
**Is your feature request related to a problem?**
A clear description of what the problem is.

**Describe the solution you'd like**
A clear description of what you want to happen.

**Describe alternatives you've considered**
Any alternative solutions or features you've considered.

**Additional context**
Add any other context or screenshots about the feature request.

**Windows 95/2000 Authenticity**
How does this feature align with the retro Windows aesthetic?
```

### 🔧 Code Contributions

#### Branch Naming Convention
- `feature/description` - New features
- `fix/description` - Bug fixes
- `docs/description` - Documentation updates
- `style/description` - Styling improvements
- `refactor/description` - Code refactoring

#### Commit Message Format
Follow conventional commits:
```
type(scope): description

[optional body]

[optional footer]
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Examples:**
```bash
feat(notifications): add Windows 95 toast styling
fix(progress): resolve circular progress bar alignment
docs(readme): update installation instructions
style(buttons): improve hover state transitions
```

#### Pull Request Process
1. **Create a feature branch** from `main`
2. **Make your changes** following our coding standards
3. **Test thoroughly** across different browsers
4. **Update documentation** if needed
5. **Submit a pull request** with a clear description

**Pull Request Template:**
```markdown
## Description
Brief description of changes made.

## Type of Change
- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update

## Testing
- [ ] Tested in Chrome
- [ ] Tested in Firefox
- [ ] Tested in Edge
- [ ] Tested with ox_lib components
- [ ] No console errors

## Screenshots
If applicable, add screenshots of your changes.

## Checklist
- [ ] My code follows the project's style guidelines
- [ ] I have performed a self-review of my code
- [ ] I have commented my code, particularly in hard-to-understand areas
- [ ] I have made corresponding changes to the documentation
- [ ] My changes generate no new warnings
- [ ] I have tested my changes thoroughly
```

## 🎨 Design Guidelines

### Windows 95/2000 Authenticity
When contributing styling changes, ensure they align with authentic Windows design:

#### Color Palette
```css
/* Primary Colors */
--button-face: #c0c0c0;        /* Classic Windows gray */
--retro-blue: #0080c0;         /* Windows blue */
--retro-blue-dark: #004080;    /* Darker blue variant */
--retro-blue-light: #40a0e0;   /* Lighter blue variant */
--window-text: #000000;        /* Black text */
--retro-white: #ffffff;        /* Pure white */

/* System Colors */
--button-shadow: #808080;      /* Button shadow */
--button-highlight: #ffffff;   /* Button highlight */
--window-frame: #c0c0c0;       /* Window borders */
```

#### Typography
- **Primary Font**: MS Sans Serif, sans-serif
- **Monospace Font**: Courier New, monospace
- **Font Sizes**: 11px-14px for authentic appearance
- **Font Weight**: Normal (400) for most text, bold (700) for emphasis

#### Border Styles
```css
/* Raised Elements (buttons, toolbars) */
border: 2px outset #c0c0c0;

/* Inset Elements (text fields, progress bars) */
border: 2px inset #c0c0c0;

/* Flat Elements */
border: 1px solid #808080;
```

#### Box Shadows
```css
/* Subtle depth for windows and dialogs */
box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

/* Button press effect */
box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.3);
```

### Component Guidelines

#### Buttons
- Use raised border styling (`outset`)
- Implement proper hover and active states
- Maintain consistent padding and margins
- Support keyboard focus indicators

#### Progress Bars
- Use inset styling for the container
- Implement blue gradient fills
- Ensure smooth animations
- Support both determinate and indeterminate states

#### Notifications
- Classic Windows toast appearance
- Proper positioning and stacking
- Fade in/out animations
- Icon support with retro styling

#### Menus and Dropdowns
- Windows 95-style borders and shadows
- Proper hover states for menu items
- Keyboard navigation support
- Submenu indicators (arrows)

## 🧪 Testing Guidelines

### Browser Testing
Test your changes in:
- **Chrome** 90+ (primary target)
- **Firefox** 88+
- **Edge** 90+
- **Safari** 14+ (if possible)

### Component Testing
Verify that your changes work with:
- All ox_lib notification types
- Progress bars (linear and circular)
- Context menus and dropdowns
- Dialog boxes and modals
- Form inputs and buttons
- Menu lists and navigation

### Performance Testing
Ensure your changes don't negatively impact:
- Page load times
- Animation smoothness
- Memory usage
- Bundle size

## 📚 Code Style Guidelines

### TypeScript/JavaScript
```typescript
// Use descriptive variable names
const retroButtonStyles = {
  backgroundColor: retroColors.buttonFace,
  border: `2px outset ${retroColors.buttonFace}`,
  fontFamily: retroFonts.primary
};

// Prefer const over let when possible
const RETRO_ANIMATION_DURATION = 200;

// Use meaningful function names
function applyRetroStyling(element: HTMLElement): void {
  // Implementation
}
```

### CSS/Styling
```css
/* Use consistent naming conventions */
.retro-button {
  /* Group related properties */
  background-color: var(--button-face);
  border: 2px outset var(--button-face);
  
  /* Typography */
  font-family: var(--retro-font-primary);
  font-size: var(--retro-font-size-md);
  
  /* Layout */
  padding: 4px 12px;
  margin: 2px;
  
  /* Effects */
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
}

/* Use meaningful class names */
.retro-progress-bar__container { }
.retro-progress-bar__fill { }
.retro-progress-bar__label { }
```

### File Organization
```
web/src/
├── theme/
│   ├── retro-windows.ts      # Main theme configuration
│   ├── colors.ts             # Color definitions
│   ├── fonts.ts              # Typography settings
│   └── components/           # Component-specific styles
├── components/
│   └── retro/                # Retro-specific components
└── utils/
    └── theme-helpers.ts      # Theme utility functions
```

## 🏆 Recognition

Contributors will be recognized in:
- README.md contributors section
- CHANGELOG.md for significant contributions
- GitHub repository contributors page
- Release notes for major contributions

## 📞 Getting Help

If you need help or have questions:
- **GitHub Discussions**: For general questions and community support
- **GitHub Issues**: For bug reports and feature requests
- **Discord**: Join our community server for real-time chat

## 📄 License

By contributing to this project, you agree that your contributions will be licensed under the MIT License.

## 🙏 Thank You

Thank you for contributing to the ox_lib Retro Windows Theme! Your efforts help bring nostalgia and joy to the FiveM community.

---

**Happy coding! 🖥️✨**