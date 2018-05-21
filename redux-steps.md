# Redux steps

1. Install Redux packages
    1. Yarn add redux react-redux
    2. React: for the store
    3. React-readux: hooks React to the store
1. Read data
    1. Create store
    2. Wrap App with <Provider store={store}> in index.js
    3. Ase connect() to read data from store and give data to component as props
    4. Add window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() into your store.
1. Write data
    1. Create data
        1. Create reducer that will be used with store
            1. Create reducer function
            2. create action creators that build objects.  Every action must have a type, and optionaly a payload.  Export action creators so we can use them from our components.
        2. Use action creators in components, using dispatch.