# Redux steps

1. Install Redux packages
    1. yarn add redux react-redux
    2. react: for the store
    3. react-readux: hooks React to the store
1. Read data
    1. create store
    2. wrap App with <Provider store={store}> in index.js
    3. use connect() to read data from store and give data to component as props
    4. add window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() into your store.
1.