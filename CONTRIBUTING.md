# Contributing to PuppyThoth

We're excited that you're interested in contributing to PuppyThoth! Before you get started, please take a moment to read this guide to understand how to contribute effectively.

## Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md).

## Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally
   ```bash
   git clone https://github.com/your-username/PuppyThoth.git
   cd PuppyThoth
   ```
3. **Install dependencies**
   ```bash
   npm install
   ```
4. **Create a new branch** for your changes
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development Workflow

### Running Tests
```bash
npm test
```

### Linting and Formatting
```bash
# Check for linting errors
npm run lint

# Automatically fix linting issues
npm run lint:fix

# Format code
npm run format
```

### Committing Changes
We use [Conventional Commits](https://www.conventionalcommits.org/) for our commit messages. Please follow this format:

```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

Example:
```
feat(auth): add login functionality

- Add login form component
- Add authentication service
- Add login tests

Closes #123
```

### Pull Requests
1. Ensure all tests pass
2. Update documentation if needed
3. Submit a pull request to the `main` branch
4. Reference any related issues in your PR description

## Reporting Issues

When reporting issues, please include:
- A clear title and description
- Steps to reproduce the issue
- Expected vs. actual behavior
- Screenshots if applicable
- Browser/OS version if relevant

## License

By contributing, you agree that your contributions will be licensed under the [ISC License](LICENSE).
