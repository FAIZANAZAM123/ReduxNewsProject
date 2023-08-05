

import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact key="general" path='/'  />
          <Route exact key="entertainment" path='/entertainment'  />
          <Route exact key="business'" path='/business'  />
          <Route exact key="health" path='/health'  />
          <Route exact key="general" path='/general'  />
          <Route exact key="science" path='/science'  />
          <Route exact key="sports'" path='/sports'  />
          <Route exact key="technology" path='/technology'  />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
