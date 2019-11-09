// Import React to allow us to write jsx text is similar to html
import React from 'react';
// Import ReactDom, this allows us to render our app
// to the documents "root" id
import ReactDOM from 'react-dom';
// Import our React application that we built
import App from './App';
import * as serviceWorker from './serviceWorker';

// Render our react app to the html document at the "root" id
ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
