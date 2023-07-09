import { useEffect } from 'react';
import './App.css';
import Map from './components/Map'




function App() {


  // useEffect(() => {

  //   const script = document.createElement('script');

  //   script.src = `https://maps.googleapis.com/maps/api/js?key=${key}=3.32&callback=initMap`
  //   script.async = true;
  
  //   document.body.appendChild(script);
  
  //   return () => {
  //     document.body.removeChild(script);
  //   }
  // }, [key]);

  return (
    <div className="App">
          <header>
            Map Demo
          </header>
          <Map />
    </div>
  );
}

export default App;
