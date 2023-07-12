
import Homepage from './components/Homepage';
import * as React from 'react';
import { PlasmicCanvasHost } from '@plasmicapp/loader-react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PLASMIC } from './plasmic-init';

function App() {
  // return (<Homepage />);
  return ( PLASMIC &&
    <BrowserRouter>
      <Routes>
        {/* Your other routes... */}
        <Route path="/homepage" element={<Homepage/>}/>
        <Route path="/plasmic-host" element={<PlasmicCanvasHost />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
  