# Context API Example

A React application demonstrating the Context API for state management, eliminating the need for prop drilling.

## Overview

This example shows how to use React's Context API to manage authentication state across the application without passing props through every component level.

## Architecture

```mermaid
flowchart TD
    A[App Component] --> B[AuthContext.Provider]
    B --> C[MainHeader]
    B --> D[Login/Home]
    C --> E[Navigation]
    E --> F[useContext Hook]
    D --> G[useContext Hook]
    F --> H[Auth State]
    G --> H
    
    style B fill:#ffd700
    style F fill:#90EE90
    style G fill:#90EE90
    style H fill:#61dafb
```

## Features

- Context API implementation for authentication
- Login/Logout functionality
- LocalStorage integration
- Protected routes pattern
- Context Consumer pattern

## Data Flow

```mermaid
sequenceDiagram
    participant U as User
    participant L as Login
    participant C as Context
    participant LS as LocalStorage
    participant N as Navigation
    
    U->>L: Enter credentials
    L->>C: Update auth state
    C->>LS: Save login state
    C->>N: Trigger re-render
    N->>U: Show logged-in UI
    
    U->>N: Click logout
    N->>C: Update auth state
    C->>LS: Remove login state
    C->>L: Trigger re-render
    L->>U: Show login form
```

## Getting Started

### Installation

```bash
npm install
```

### Running the Application

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Home/
│   │   └── Home.jsx
│   ├── Login/
│   │   └── Login.jsx
│   ├── MainHeader/
│   │   ├── MainHeader.jsx
│   │   └── Navigation.jsx
│   └── UI/
│       ├── Button/
│       └── Card/
├── context/
│   └── auth-context.js      # Context definition
├── App.jsx                   # Context Provider setup
└── index.jsx
```

## Key Concepts

### Context Creation

The `auth-context.js` file creates a React Context that will hold authentication state.

### Provider Setup

The `App.jsx` component wraps the entire application with `AuthContext.Provider`, making the auth state available to all child components.

### Consuming Context

Components like `Navigation` and `MainHeader` consume the context using the `useContext` hook, avoiding the need for prop drilling.

## Technologies Used

- React 17.0.2
- React Context API
- React Hooks (useState, useEffect, useContext)
- LocalStorage API
- CSS Modules

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## Learn More

- [React Context Documentation](https://reactjs.org/docs/context.html)
- [useContext Hook](https://reactjs.org/docs/hooks-reference.html#usecontext)
- [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)

## Author

* **Or Assayag** - *Initial work* - [orassayag](https://github.com/orassayag)
* Or Assayag <orassayag@gmail.com>
* GitHub: https://github.com/orassayag
* StackOverflow: https://stackoverflow.com/users/4442606/or-assayag?tab=profile
* LinkedIn: https://linkedin.com/in/orassayag

## License

This application has an MIT License - see the [LICENSE](../../LICENSE) file for details.
