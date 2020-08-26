We gonna be building airbnb clone using nextjs, react

Pre-requisite software:-

1. node
2. npm
3. Editor of your choice (I'm gonna be using vscode)

Initial Project setup :-

Creating folder for our project

```
mkdir nextbnb
cd nextbnb
```

installing packages

```
npm init -y
npm i -S react react-dom next
```

package.json looks as below

```
{
  "name": "nextbnb",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "next": "^9.5.2",
    "react": "^16.13.1",
    "react-dom": "^16.13.1"
  }
}
```

updating scripts in package.json

```
"scripts": {
    "dev": "next -p 8080",
    "build": "next build",
    "start": "next start"
},
```

creating index route

```
mkdir pages
touch pages/index.js
```

add below snippet to pages/index.js

```
import React from "react";

export default function Index() {
  return <div>Index route</div>;
}
```

running the application

```
open terminal of your choice
navigate to application folder
1. npm run dev
application will be running at http://localhost:8080
```

Hola! Our initial setup is completed :)
