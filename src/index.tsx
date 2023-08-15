import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/app';
import App from './components/app/App';
import Interview from './components/interview/Interview';
import reportWebVitals from './reportWebVitals';

import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

root.render(
  <ThemeProvider theme={darkTheme}>
    <React.StrictMode>
      <AppProvider>
        <App />
        {/*<BrowserRouter basename='/'>*/}
        {/*  <Routes>*/}
        {/*    <Route path='/' element={<App />} />*/}
        {/*  </Routes>*/}
        {/*  <Routes>*/}
        {/*    <Route path='/interview' element={<Interview />}/>*/}
        {/*  </Routes>*/}
        {/*</BrowserRouter>*/}
      </AppProvider>
    </React.StrictMode>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
