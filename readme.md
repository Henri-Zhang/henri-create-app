# Henri Create App [![PRs](https://img.shields.io/badge/PRs-welcome-green.svg)](https://github.com/Henri-Zhang/henri-create-app/pulls)

Creates a React application using the command line. A custum project structure by Henri.

---

## Quick Overview

```
  yarn global add henri-create-app
  henri-create-app myApp
  cd myApp
  yarn install
  yarn start
```

Then open [http://localhost:3000](http://localhost:3000) to see your app.

---

# License

Henri Create App is open source software [licensed as MIT](https://github.com/Henri-Zhang/henri-create-app/blob/master/LICENSE).

---

It will create a directory called `myApp` inside the current folder.
Inside that directory, it will generate the initial project structure and install the transitive dependencies:

```
├── .gitignore
├── config
│   └── config.js
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
├── readme.md
├── src
│   ├── assets
│   │   └── avatar.png
│   ├── components
│   │   └── SpinCircle.js
│   ├── datas
│   │   └── data.json
│   ├── index.js
│   ├── layouts
│   │   ├── index.js
│   │   └── verticaLayout
│   │   ├── Footer.js
│   │   ├── Header.js
│   │   └── index.js
│   ├── models
│   │   └── root.js
│   ├── pages
│   │   ├── Home
│   │   │   └── index.js
│   │   └── NoPage
│   │   └── index.js
│   ├── routers
│   │   └── index.js
│   ├── services
│   │   └── root.js
│   └── utils
│   └── util.js
└── webpack.config.js
```
