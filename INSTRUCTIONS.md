# Instructions

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

## Prerequisites

- Node.js (v14 or higher recommended)
- npm (comes with Node.js)
- Modern web browser (Chrome, Firefox, Safari, or Edge)
- Code editor (VSCode recommended)

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

## Author

* **Or Assayag** - *Initial work* - [orassayag](https://github.com/orassayag)
* Or Assayag <orassayag@gmail.com>
* GitHub: https://github.com/orassayag
* StackOverflow: https://stackoverflow.com/users/4442606/or-assayag?tab=profile
* LinkedIn: https://linkedin.com/in/orassayag
