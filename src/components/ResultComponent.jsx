import React from 'react'

export default function ResultComponent(props) {
  
 
 // console.log(Date.parse(props.data.forecast.forecastday[2].date).toLocaleDateString('tr-TR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }));
    console.log(new Date(props.data.forecast.forecastday[2].date).toDateString().slice(0,3).toUpperCase())
  return (
    <>
    <div className='flex flex-col justify-center gap-12 bg-secondary p-12 shadow-sm shadow-neutral'>
  <div className='flex flex-col items-center gap-4  '>
  <h3 className='text-xl text-white max-[704px]:text-center'>
    {props.data.location.name}, {props.data.location.region}, {props.data.location.country}
  </h3>
  <div className='flex gap-20 items-center max-[704px]:flex-col'>
    <img src={props.data.current.condition.icon} alt="" className='w-20 glass max-[704px]:mt-8'/>
    <div className='flex gap-20 max-[704px]:flex-col'>
      <h1 className=' flex items-center text-5xl text-white'> {props.data.current.temp_c}°C </h1>
      <div>
        <p className='text-white max-[704px]:text-center'>Wind: {props.data.current.wind_kph}kph </p>
        <p className='text-white max-[704px]:text-center'>Precip: {props.data.current.precip_in} inhr</p>
        <p className='text-white max-[704px]:text-center'>Pressure: {props.data.current.pressure_mb}ba </p>
      </div>
    </div>
  </div>
  </div>
  <div className='flex justify-evenly glass p-4 max-[704px]:flex-col'>
    <div className='flex flex-col items-center max-[704px]:pt-8'>
      <h4 className='text-white'> {new Date(props.data.forecast.forecastday[1].date).toDateString().slice(0,3).toUpperCase()} </h4>
      <img src= {props.data.forecast.forecastday[1].day.condition.icon} alt="" />
      <h5 className='text-white'>{props.data.forecast.forecastday[1].day.avgtemp_c} °C</h5>
    </div>
    <div className='flex flex-col items-center max-[704px]:pt-8'>
      <h4 className='text-white'>{new Date(props.data.forecast.forecastday[2].date).toDateString().slice(0,3).toUpperCase()}</h4>
      <img src={props.data.forecast.forecastday[2].day.condition.icon} alt="" />
      <h5 className='text-white'>{props.data.forecast.forecastday[2].day.avgtemp_c}°C</h5>
    </div>
    <div className='flex flex-col items-center max-[704px]:pt-8'>
      <h4 className='text-white'>{new Date(props.data.forecast.forecastday[3].date).toDateString().slice(0,3).toUpperCase()}</h4>
      <img src={props.data.forecast.forecastday[3].day.condition.icon} alt="" />
      <h5 className='text-white'>{props.data.forecast.forecastday[3].day.avgtemp_c}°C</h5>
    </div>
  </div>
</div>
    </>

  )
}
