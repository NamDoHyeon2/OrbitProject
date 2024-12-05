import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './app/redux/store';
import App from './App';
import { createRoot } from "react-dom/client";

// ReactDOM.render(
//     <Provider store={store}>
//         <React.StrictMode>
//             <App />
//         </React.StrictMode>
//     </Provider>,
//     document.getElementById('root')
// );

const rootElement = document.getElementById("root"); //react-Dom 문제 수정
const root = createRoot(rootElement);
root.render(<App />);
