# Budget
A React training app from Udemy - Use React, React Redux and Redux Saga, and master React Hooks and State Management with asynchronies call in React Redux [course](https://redventures.udemy.com/course/react-redux-saga/learn/lecture/23433806#overview).

---

# Getting Started

NPM version `8.9.0`

Node `v18.2.0`

`npx create-react-app budget`

`npm install semantic-ui-react --force`

`npm install semantic-ui-css --force`

`npm audit fix --force`

`npm start`

`git init`

`git remote add origin git@github.com:markDub77/react-budget-app.git`

`git config --global user.email "markwilliams1977@gmail.com"`

`git config --global user.name "Mark Williams" `

`git add .`

`git commit -m "initial commit"`

`git push -u origin main`

PHPStorm - ESlint specify node.js interpreter - configure node.js path

---

Semantic UI does not play well with React 18, so we need to downgrade to React 17:
   - delete `node_modules` directory
   - update package.json with:
     ``` 
     "react": "^17.0.2"
     "react-dom": "^17.0.2"
     ```
   - Then go to your entry file `index.js` at the top, replace:

        `import ReactDOM from 'react-dom/client'`
        
        with
        
        `import ReactDOM from 'react-dom';`


   - Then in your `index.js` file, replace:
        
        ```
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(
            <React.StrictMode>
                <App />
            </React.StrictMode>
        );
        ```
        
        with
        
        ```
        ReactDOM.render(
            <React.StrictMode>
                <App />
            </React.StrictMode>,
            document.getElementById('root')
        );
        ```
     
---
Install React Developer Tools
https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en

and

Install Redux DevTools
https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en



