import { useContext, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Pages from './components/mainPage/page/Pages';
import { DataProvider } from './GlobalStateContext';

function App({darkToggle}) {

  // const [darkToggle, setDarkToggle]=useState(false)
  // const toggleDark=()=>setDarkToggle(!darkToggle);
  
  return (
  
      <div className={`${
        darkToggle && 'dark'}`}>
       <DataProvider>
       <Router>
        <Pages/>
        </Router>
       </DataProvider>
      </div>
  
  )
}

export default App



