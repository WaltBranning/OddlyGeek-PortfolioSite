// Component Imports
import HeaderComponent from './components/Header'

// Styles and Asset Imports
import './style/App.css'

function App() {
  return (
    <div className="App">
        <HeaderComponent />
        <div className='contentWrapper'>
        <section><h1>What</h1></section>
        <section><h1>Professional</h1></section>
        <section><h1>Projects</h1></section>
        <section><h1>Who</h1></section>
      </div>
    </div>
  );
}

export default App;
