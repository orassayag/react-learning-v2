# Setup and Usage Instructions

## Version

Current version: 1.0.0

## Last Updated

Last updated: May 25, 2026

## Table of Contents

- [Initial Setup](#initial-setup)
- [System Requirements](#system-requirements)
- [Available Commands](#available-commands)
- [Running Scripts](#running-scripts)
- [Best Practices](#best-practices)
- [Documentation](#documentation)

## Setup Instructions

1. Clone the repository to your computer
2. Navigate to the example you want to run
3. Install dependencies:
   ```bash
   cd <example-folder>
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```

## Initial Setup

1. **Clone the repo**: `git clone https://github.com/orassayag/react-learning-v2.git`
2. **Select Example**: Choose a folder from sections 10, 15, 18, 19, or 22.
3. **Install**: Run `npm install` in that folder.

## Install Dependencies

Each example has its own `package.json`. Navigate to the specific example folder and run:

```bash
npm install
```

## Project Structure

This repository is organized by course sections, with each section containing one or more example projects:

### Section 10: Advanced React Concepts

- `context-api/` - Basic Context API implementation
- `context-api-custom/` - Custom Context API with provider component
- `complex-useRef/` - Advanced useRef usage with imperative handles

### Section 15: Custom Hooks

- `simple-custom-hooks/` - Basic custom hooks (useCounter)
- `http-custom-hooks/` - HTTP request handling with custom hooks

### Section 18: Redux Basics

- `counter/` - Redux Toolkit implementation with authentication
- `demo/` - Basic Redux demonstration

### Section 19: Advanced Redux

- `shop-redux-action-creator/` - Shopping cart with action creators
- `shop-redux-useeffect/` - Shopping cart with useEffect side effects

### Section 22: Next.js

- `meetups-v1/` - Meetups application with MongoDB integration
- `demo/` - Basic Next.js demonstration

## Running Examples

### React Examples (Create React App)

Most examples use Create React App. To run them:

```bash
cd <example-folder>
npm install
npm start
```

The application will open at `http://localhost:3000`

Available commands:

- `npm start` - Starts the development server
- `npm run build` - Creates a production build
- `npm test` - Runs the test suite

### Next.js Examples

For Next.js examples (section 22):

```bash
cd 22/meetups-v1
npm install
npm run dev
```

The application will open at `http://localhost:3000`

Available commands:

- `npm run dev` - Starts the development server
- `npm run build` - Creates a production build
- `npm start` - Runs the production build

## Available Commands

In most example directories, you can run:

- `npm start`: Runs the app in development mode.
- `npm run build`: Builds the app for production.
- `npm test`: Launches the test runner.
- `npm run eject`: Removes the single build dependency (use with caution).

## Development Commands

- **Start Dev Server**: `npm start` or `npm run dev`
- **Check Types**: `npm run type-check` (if configured)
- **Linting**: `npm run lint`
- **Formatting**: `npx prettier --write .`

## Running Scripts

Scripts are run from the terminal within the example directory. Ensure you have Node.js installed and are in the correct directory before running any `npm` commands.

## Prerequisites

- Node.js (v14 or higher recommended)
- npm (comes with Node.js)
- Modern web browser (Chrome, Firefox, Safari, or Edge)
- Code editor (VSCode recommended)

## System Requirements

- **Node.js**: Version 14.x or 16.x or higher
- **npm**: Version 6.x or higher
- **Browser**: Modern browser with ES6 support
- **OS**: Windows, macOS, or Linux

## Example-Specific Notes

### Context API Examples (Section 10)

These examples demonstrate different approaches to using React Context for state management:

- Basic context with Consumer
- Custom context provider
- useRef with forwardRef for imperative handles

### Custom Hooks Examples (Section 15)

Learn how to create reusable logic with custom hooks:

- Counter logic extraction
- HTTP request handling
- Loading and error states

### Redux Examples (Sections 18-19)

Learn Redux state management from basics to advanced:

- Redux Toolkit setup
- Slice creation
- Action creators
- Async logic with thunks
- Side effects management

### Next.js Examples (Section 22)

Server-side rendering and static site generation:

- File-based routing
- API routes
- MongoDB integration
- Pre-rendering strategies

## Best Practices

1. **Component Purity**: Keep components small and focused on one task.
2. **Hook Rules**: Always follow the rules of hooks (only call at top level, only in React functions).
3. **Key Usage**: Always provide unique `key` props for list items.
4. **State Location**: Lift state up only as far as necessary.
5. **Effect Dependencies**: Be diligent with `useEffect` dependency arrays.

## Troubleshooting

### Port Already in Use

If port 3000 is already in use:

1. Stop other applications using the port
2. Or modify the port in the start script

### Module Not Found

If you get module not found errors:

1. Ensure you're in the correct example folder
2. Run `npm install` again
3. Delete `node_modules` and `package-lock.json`, then run `npm install`

### Build Errors

If you encounter build errors:

1. Check Node.js version (v14+ recommended)
2. Clear npm cache: `npm cache clean --force`
3. Reinstall dependencies

## Documentation

- [Official React Docs](https://reactjs.org/)
- [Redux Toolkit Docs](https://redux-toolkit.js.org/)
- [Next.js Docs](https://nextjs.org/docs)
- [Academind Course](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)

## External Resources

- [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbhfkeoomphjhmhi)
- [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)
- [MDN Web Docs](https://developer.mozilla.org/)

## Development

### Making Changes

1. Navigate to the example you want to modify
2. Make your changes
3. The development server will hot-reload automatically
4. Test thoroughly before committing

### Adding New Examples

1. Create a new folder under the appropriate section
2. Set up the project (Create React App or Next.js)
3. Add a README.md explaining the example
4. Update this INSTRUCTIONS.md file
5. Update the main README.md

## Extending the Application

To add a new example:

1. Create a new folder under the relevant section.
2. Initialize with `npx create-react-app` or `npx create-next-app`.
3. Add your logic and components.
4. Update the main `README.md` and `INSTRUCTIONS.md` to include it.

## Author

- **Or Assayag** - _Initial work_ - [orassayag](https://github.com/orassayag)
- Or Assayag <orassayag@gmail.com>
- GitHub: https://github.com/orassayag
- StackOverflow: https://stackoverflow.com/users/4442606/or-assayag?tab=profile
- LinkedIn: https://linkedin.com/in/orassayag
