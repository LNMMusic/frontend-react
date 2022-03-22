// LIBS
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
// Pages
import HomePage from './pages/HomePage'
// Components



// APP [Component]
function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Root */}
          <Route exact path="/" element={<HomePage />}/>

        </Routes>
      </div>
    </Router>
  );
}

export default App;
