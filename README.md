# node-typescript-start

CRA & Express Server Starter Workspace

## Workspace

```
react-node
    │---server.js
    │---package.json
    |---.env
    |---public
        |--- index.html
        |--- ...rest
    |---client
        │---package.json
        │---src
            |--- index.js
            |--- App.js
            |--- App.css
            |--- ...rest
```

## Server Custom Scripts

- _server_: nodemon server.js (start server)
- _client_: npm start --prefix ./client (start react dev server)
- _both_: concurrently \"npm run dev\" \"npm run client\" (start both servers)
- _cdInstall_: cd client && npm install \${package: } (install a package in react app)

## React Custom Scripts

- _build_: react-scripts build && mv build ../public (build react app and move it to node public directory)
