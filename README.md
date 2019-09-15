# react-starter-kit
React application starter kit

#### Local Development QuickStart:
```bash
npm start
```

#### The Component Directory
```
my-app
└── src
    └── components
        └── component-name
            ├── component-name.scss
            ├── component-name.container.js
            ├── component-name.redux.js
            ├── component-name.styles.js
            ├── component-name.view.js
            └── index.js
```
###### component-name.scss
component-name.scss is a straight-forward SASS file imported by your stateless view Component.

###### component-name.container.js
component-name.container.js is your business logic and state management as handled before being sent to the stateless view Component.

###### component-name.redux.js
component-name.redux.js is the mapStateToProps, mapDispatchToProps, and connect functionality of Redux. If you use an alternative global state management tool, give it a similar file name, such as component-name-mobx.js. This allows you to harness multiple global states (if necessary, though not recommended) and allows you to easily swap global state managers in the future.

###### component-name.styles.js
component-name-styles.js is your JSS. I’ve used this file extensively for storing Material UI withStyles HOCs and JSS.

###### component-name.view.js
component-name-view.js is your stateless view Component. For the majority of cases, this Component should be able to be pure functional Component (no hooks!).

###### index.js
index.js is your entry point for importing your Component. It contains nothing but an export statement that points to the topmost Component at any point in time, because the topmost Component changes often during development.
