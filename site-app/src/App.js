// Component Imports
import HeaderComponent from './components/Header'
import ContentComponent from './components/Content';

// Styles and Asset Imports
import './style/App.css'

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <ContentComponent /> 
      {/* <div id='downbutton-container'><a href="#" className='downnbutton pi pi-forward nav-link link-icon'></a></div>        */}
    </div>
  );
}

export default App;
