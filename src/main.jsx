import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Editor from './Components/feature/Editor.jsx';
import ColorPicker from './Components/feature/ColorPicker.jsx';
import Main from './Components/Main.jsx';
import expand from './assets/Images/expand-diagonal-line.png'
import collapse from './assets/Images/collapse-diagonal-line.png'
import { useState } from 'react';
import Gemini from './Components/feature/Gemini.jsx';
import sendIcon from './assets/Images/send-plane-2-fill.png';
import loading from './assets/Images/loading.gif'
import MainCanvas from './Components/feature/PlanProject/MainCanvas.jsx';

const route = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children:[
      {
        path:'/',
        element: <Gemini img={sendIcon} loading={loading}/>

      },
      {
        path: '/editor',
        element:<Editor expand={expand} collapse={collapse}/>,
      },
      {
        path:'/color-picker',
        element:<Main/>
       },
       {
        path : '/plan-project',
        element: <MainCanvas/>
      }
    ]
  },
  

])

ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={route}>
<App />
</RouterProvider>
    
 
)
