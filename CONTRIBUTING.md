# Contributing

Contributions to this project are [released](https://help.github.com/articles/github-terms-of-service/#6-contributions-under-repository-license) to the public under the [project's open source license](LICENSE).

Everyone is welcome to contribute to this project. Contributing doesn't just mean submitting pull requests—there are many different ways for you to get involved, including answering questions, reporting issues, improving documentation, or suggesting new features.

## How to Contribute

### Reporting Issues

If you find a bug or have a feature request:

1. Check if the issue already exists in the GitHub Issues
2. If not, create a new issue with:
   - Clear title and description
   - Steps to reproduce (for bugs)
   - Expected vs actual behavior
   - Your environment details (OS, Node version)

### Submitting Pull Requests

1. Fork the repository
2. Create a new branch for your feature/fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes following the code style guidelines below
4. Test your changes thoroughly
5. Commit with clear, descriptive messages
6. Push to your fork and submit a pull request

### Code Style Guidelines

This project uses:

- **React** with hooks and functional components
- **JavaScript/JSX** for component development
- Modern ES6+ syntax

Before submitting:

```bash
# Install dependencies for the example you're working on
cd <example-folder>
npm install

# Test the application
npm start

# Build to ensure no errors
npm run build
```

### Coding Standards

1. **Functional Components**: Use functional components with hooks instead of class components
2. **Clear naming**: Use descriptive names for components, functions, and variables
3. **Component structure**: Keep components focused and modular
4. **Props validation**: Consider adding PropTypes for component props
5. **Code organization**: Follow the existing folder structure within each example

### Adding New Examples

When adding new React examples:

1. Create a new folder with a descriptive name under the appropriate section number
2. Include a `README.md` explaining what the example demonstrates
3. Set up the project using Create React App or Next.js as appropriate
4. Ensure all dependencies are properly listed in `package.json`
5. Test the example thoroughly before submitting

### Documentation

When contributing:

1. Update the main `README.md` if adding a new example
2. Include a `README.md` in each example folder explaining:
   - What the example demonstrates
   - Key concepts covered
   - How to run the example
   - Any prerequisites or setup steps

## Questions or Need Help?

Please feel free to contact me with any question, comment, pull-request, issue, or any other thing you have in mind.

- Or Assayag <orassayag@gmail.com>
- GitHub: https://github.com/orassayag
- StackOverflow: https://stackoverflow.com/users/4442606/or-assayag?tab=profile
- LinkedIn: https://linkedin.com/in/orassayag

Thank you for contributing! 🙏
