import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './layouts/app-layout';
import LandingPage from './Pages/Landing/Landing.page';
import ColorGenerator from './Questions/Random-Color-Generator/ColorGenerator';
import SinglVideoPlay from './Questions/Single-Video-Play';
import StopButtonRender from './Questions/Stop-Button-Render/StopButtonRender';
import DebounceQuestion from './Questions/Debouncer/Debouncer';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <LandingPage />
      },
      {
        path: '/random-color-generator',
        element: <ColorGenerator />
      },
      {
        path: '/single-video-play',
        element: <SinglVideoPlay />
      },
      {
        path: '/stop-button-render',
        element: <StopButtonRender />
      },
      {
        path: '/debounce-question',
        element: <DebounceQuestion />
      },
      
    ]
  }
]);

function App() {
  return <RouterProvider router={router}/>;
}

export default App
