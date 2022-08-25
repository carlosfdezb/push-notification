import React, { Suspense } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';


import { Notification } from './components/widget';
import { TransferList } from './components/transferList';

const App = () => {
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/notification' element={<Notification />} />
        <Route path='/transfer/:id' element={<TransferList />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
