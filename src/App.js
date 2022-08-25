import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import About from './components/About';
import  Home  from './components/Home';
import {PomodoroProvider} from './context/pomodoroContext'

function App() {
  return (
    <PomodoroProvider>
     <Router>
        <Navbar/>
        <Routes>
        <Route element={<Home/>} path="/"></Route>
          <Route element={<About/>} path="/about"></Route>
        </Routes>
     </Router>
     </PomodoroProvider>
  );
}

export default App;
