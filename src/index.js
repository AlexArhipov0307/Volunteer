import React from 'react';
import ReactDOM from 'react-dom';
import App from "./Components/App";
import './index.css';
import {BrowserRouter,  Route, Routes} from "react-router-dom";


import store from "./store/store";
import {Provider} from "react-redux";
import HomePage from "./pages/HomePage";
import PrisonersPage from "./pages/PrisonersPage";
import SearchPage from "./pages/SearchPage";

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App/>}>
              <Route index element={<HomePage/>}/>
            <Route path='search' element={<SearchPage/>}/>
            <Route path='prisoners' element={<PrisonersPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
