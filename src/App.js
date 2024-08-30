import logo from './logo.svg';
import './App.css';
import { useCallback, useEffect, useMemo, useState } from 'react';
import Todos from './Todos';
import LeftSection from './components/LeftSection'; 
import RightSection from './components/RightSection';
import { GptContextProvider } from './context/ContextapiProvider';




function App() {


  return (
    <GptContextProvider>
    <div className= "flex overflow-x-hidden overflow-y-hidden">
      <LeftSection />

      <RightSection />
      
    </div>
    </GptContextProvider>
  );
}

export default App;
