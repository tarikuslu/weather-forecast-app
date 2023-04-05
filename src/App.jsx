import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import SearchComponent from './components/SearchComponent'
import ResultComponent from './components/ResultComponent'
import Lottie from 'lottie-react'
import loading from './assets/loading.json' 
import notFound from './assets/notFound.json'
import './App.css'

function App() {
  const [searchParam, setSearchParam] = useState('');
  const [isClicked, setIsClicked] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  const [notfound, setNotFound] = useState(false);
  const [waiterElement, setWaiterElement] = useState(loading);
  
  useEffect(() => {
    if(notFound) {
      changeWaiterElement(loading, notFound);
    } else {
      changeWaiterElement(loading, loading)
    }
  }, [searchParam])

  function changeWaiterElement(param1, param2) {
    setWaiterElement(param1);
    setTimeout(() => {
     setWaiterElement(param2);
    }, 5000)   
  }

  function handleIsClicked() {
    setIsClicked(true);
  }

  function handleSetSearchParam(param) {
    setSearchParam(param);
  }

  function handleSetWeatherData(d) {
    setWeatherData(d);
  }

  function handleNotFound(param) {
    setNotFound(param);
  }

  function handleLoader() {
    setWaiterElement(loading);
  }

  return (
    <div className="bg-primary w-full h-screen">
      <div className='glass w-3/4 h-screen mx-auto'>
      <SearchComponent setInput = {handleSetSearchParam} setClick = {handleIsClicked} setData={handleSetWeatherData} setNotFound={handleNotFound}/>
      <div className='mt-24'>
        {
          isClicked && searchParam ? 
          (
            <>
              {
                notfound ?
                (
                  <Lottie animationData={waiterElement} loop={true} style={{width: 500, height:300, margin: '0 auto', }} />  
                ) :
                (
                  weatherData && <ResultComponent data={weatherData} setloader={handleLoader}/>
                )
              }
            </>
          ) 
          :
          (
            <h1 className='text-neutral text-3xl font-semibold text-center'>
          "Simple weather forecast. <br/> Just type in the city you want to see the weather forecast for."
        </h1>
          )
        }
      </div>

      </div>
      
    </div>
  )
}

export default App
