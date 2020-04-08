import React from 'react';
import './App.css';
import Greet from './component/Greet'
import Welcome from './component/Welcome'
import Lifecycle from './component/Lifecycle'
import LifecycleB  from './component/LifecycleB'

function App() {
  return (
    <div className="App">
      <Greet/>
      <Welcome/>
      <LifecycleB/>
      <Lifecycle/>
    </div>
  );
}

export default App;
