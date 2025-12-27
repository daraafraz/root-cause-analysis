# Contributing to Root Cause Analysis

Thank you for your interest in contributing! This document provides guidelines and instructions for contributing to this project.

## Code of Conduct

This project adheres to a Code of Conduct that all contributors are expected to follow. Please read [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) before participating.

## How to Contribute

We welcome contributions in several forms:

- **Code contributions** - Bug fixes, UI improvements, new features
- **Documentation** - Improving README, adding examples, clarifying instructions
- **Bug reports** - Help us identify and fix issues
- **Feature suggestions** - Share ideas for improvements (please open an issue first to discuss scope)

## Getting Started

### Prerequisites

- **Node.js** - Version 18.x or higher
- **npm** - Version 9.x or higher (comes with Node.js)
- A code editor (VS Code recommended)
- Git

### Setting Up Locally

1. **Fork the repository** on GitHub

2. **Clone your fork:**
   ```bash
   git clone https://github.com/yourusername/root-cause-analysis.git
   cd root-cause-analysis
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Verify setup worked:**
   - Open `http://localhost:5173` in your browser
   - You should see the homepage
   - Navigate to `/root-cause` to see the main demo
   - Navigate to `/kitchen-sink` to see component examples

If you see the application running, your setup is complete!

## Development Workflow

### Making Changes

1. **Create a branch** for your changes:
   ```bash
   git checkout -b your-name/feature-or-fix-description
   ```
   
   Example: `git checkout -b jane/improve-date-picker-ux`

2. **Make your changes** in the codebase

3. **Test your changes:**
   - Run the dev server and manually test your changes
   - Check that the app still builds: `npm run build`
   - Preview the production build: `npm run preview`

4. **Commit your changes:**
   ```bash
   git add .
   git commit -m "Description of your changes"
   ```

   **Commit message guidelines:**
   - Use clear, descriptive messages
   - Start with a verb in imperative mood ("Add", "Fix", "Update", etc.)
   - Keep the first line under 72 characters
   - Add more detail in the body if needed

   Examples:
   - `Fix date picker not updating chart on mobile`
   - `Add keyboard navigation to trigger rules section`
   - `Update README with clearer setup instructions`

5. **Push to your fork:**
   ```bash
   git push origin your-name/feature-or-fix-description
   ```

6. **Open a Pull Request** on GitHub

### Pull Request Guidelines

When opening a PR, please include:

- **Clear title** describing what the PR does
- **Description** explaining:
  - What problem this solves or what feature this adds
  - How you tested the changes
  - Any screenshots (for UI changes)
- **Reference related issues** if applicable (e.g., "Fixes #123")

**PR Requirements:**
- Code should follow existing patterns and style
- The app should build successfully (`npm run build`)
- Manual testing should be done to verify changes work
- Documentation should be updated if needed

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

**Note:** This project currently does not have automated tests or linting configured. Manual testing and code review are the primary quality checks.

## What to Contribute

### High Priority

- **UI/UX improvements** - Making the root cause analysis interface more intuitive
- **Accessibility** - Improving keyboard navigation, screen reader support, ARIA labels
- **Documentation** - Clarifying setup instructions, adding examples
- **Bug fixes** - Fixing broken interactions or visual issues

### Medium Priority

- **Component examples** - Adding more examples to the kitchen sink
- **Code organization** - Refactoring for clarity (with discussion first)
- **Performance** - Optimizing render performance if needed

### Out of Scope (For Now)

- Backend integration or real data sources
- Authentication or user management
- Database or persistence layer
- Production deployment automation (beyond basic Vercel config)

## Communication

### Response Times

- **Issues:** We aim to respond within 3-5 business days
- **Pull Requests:** Reviews typically happen within 3-5 business days
- **Questions:** Community members may respond faster than maintainers

### Proposing Large Changes

If you want to make a significant change (refactoring, new major features, architectural changes):

1. **Open an issue first** to discuss the proposal
2. Explain the problem you're solving
3. Describe your proposed solution
4. Wait for feedback before starting implementation

This helps ensure your work aligns with project goals and avoids wasted effort.

### Getting Help

- **Questions about setup?** Open an issue with the "question" label
- **Found a bug?** Open an issue with the "bug" label
- **Have an idea?** Open an issue with the "enhancement" label

## Code Style

While we don't have strict linting rules yet, please follow these guidelines:

- **Use functional components** with hooks (this is a React project)
- **Follow existing patterns** - look at how similar features are implemented
- **Keep components focused** - one component, one responsibility
- **Use meaningful variable names** - `selectedDateRange` is better than `sdr`
- **Add comments** for complex logic, but prefer self-documenting code

## Expectations

### For Contributors

- Be patient - maintainers have limited time
- Be respectful in all interactions
- Follow the Code of Conduct
- Test your changes before submitting
- Be open to feedback and suggestions

### For Maintainers

- Review PRs in a timely manner
- Provide constructive feedback
- Be welcoming to newcomers
- Make decisions transparently
- Say "no" politely when needed

## Questions?

If you have questions that aren't covered here, please open an issue with the "question" label. We're happy to help!

Thank you for contributing! 🎉

