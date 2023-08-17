// Component Imports
import HeaderComponent from './components/Header';
import ContentComponent from './components/Content';
import { useRef } from 'react';

// Styles and Asset Imports
import './style/App.css'

function App() {

  function transitionToSectionCallBack(idx) {
    const sectionList = sectionRef.current;
    const sectionNode = sectionList.querySelectorAll('section')[idx];
    sectionNode.scrollIntoView({
      behavior: 'smooth',
    });
  };

  const curSection = useRef(null)
  const sectionRef = useRef(null);
  
  return (
    <div className="App">
      <HeaderComponent transitionToSection={transitionToSectionCallBack} />
      <ContentComponent sectionRef={sectionRef} /> 
    </div>
  );
}

export default App; 

