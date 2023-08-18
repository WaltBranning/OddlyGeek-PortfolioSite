// Component Imports
import HeaderComponent from './components/Header';
import ContentComponent from './components/Content';
import { useRef, useEffect, useState } from 'react';

// Styles and Asset Imports
import './style/App.css'

function App() {
  window.onscroll = () => {
    // const curIdx = curSection.current;
    // const sectionHeights = sectionSizes.current;
    const sectionNode = sectionRef.current.querySelectorAll('section');
    const sectionPagePos = sectionSizes.current;
    // var sectionHeight = sectionNode[curIdx].getBoundingClientRect().height;
    // var y_position = sectionNode[curIdx].getBoundingClientRect().y;
    const y_position = window.scrollY;
    const offset = 100;

    for (let i=0; i < sectionSizes.current.length; ++i) {
      if (y_position + offset > sectionPagePos[i][0] & y_position + offset < sectionPagePos[i][1]) {
        if (curSection.current != sectionNode[i].id) {
          curSection.current = sectionNode[i].id;
          if (curSection.current == 'resume'){
            const root = document.documentElement;
            const new_color = getComputedStyle(root).getPropertyValue(`--brand-dark`);
            root.style.setProperty('--highlight-color', new_color);
          } else if (curSection.current == 'who') {
            const root = document.documentElement;
            const new_color = getComputedStyle(root).getPropertyValue(`--brand-color`);
            root.style.setProperty('--highlight-color', new_color);
          }

          console.log(curSection);
        }
      }
    };
  };

  function transitionToSectionCallBack(idx) {
    const sectionList = sectionRef.current.querySelectorAll('section');
    const sectionNode = sectionList[idx];
    sectionNode.scrollIntoView({
      behavior: 'smooth',
    });
  };

  const curSection = useRef('who');
  const sectionRef = useRef(null);
  const sectionSizes = useRef(null);

  useEffect(() => {
    const sectionList = sectionRef.current.querySelectorAll('section');
    var sectionCheckSize = [];

    var startval = 0;
    for (let i = 0; i < sectionList.length; i++){
      var endVal = sectionList[i].offsetHeight + startval;
      sectionCheckSize.push([startval, endVal]);
      startval = endVal
    };

    sectionSizes.current = sectionCheckSize;
  }, []);
  
  return (
    <div className="App">
      <HeaderComponent transitionToSection={transitionToSectionCallBack} />
      <ContentComponent sectionRef={sectionRef} /> 
    </div>
  );
}

export default App; 

