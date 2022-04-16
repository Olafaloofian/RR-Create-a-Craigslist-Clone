// Import data
import Gallery from './Gallery.js'
import Sidebar from "./Sidebar"

// Import components
import './App.css';

function App(){
  return (
    <div>
      <div className="App">
        <Sidebar />
        <Gallery />
      </div>
    </div>
  );
}

export default App;
