import './App.css';
import Navbar from './components/Navbar';
import TestForm from './components/TestForm'
import About from './components/About';

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar title="TextUtils"/>
      <Routes>
        <Route exact path={"/"} element={
            <div className="container">
              <TestForm heading="Enter the text to modify" />
            </div>
        } />
        <Route exact path={"/about"} element={<About/>} />
        
      </Routes>
          
    </BrowserRouter>

    {/* <About/> */}
    </>
  );
}

export default App;
