import React, {useState} from 'react'

export default function SearchComponent(props) {
  const [query, setQuery] = useState("");


  async function handleClick() {
    console.log(query);
    props.setClick();
    props.setInput(query);
    await fetch(`http://api.weatherapi.com/v1/forecast.json?key=6ff4876b7bb94fb9acb142640230404&q=${query}&days=4&aqi=no&alerts=no
    `)
    .then(response => response.json())
    .then(data => {
      if(data.forecast) {
        props.setData(data)
        props.setNotFound(false);
      } else {
        props.setNotFound(true);
      }
      
    })
  
  }

  function handleChange(e) {
    setQuery(e.target.value);
  }
  return (
    <div className='flex justify-center max-[704px]:flex-col  max-[704px]:p-4 max-[704px]:items-stretch'>
      <input type="text" value={query} onChange={handleChange}  placeholder='Type a city to search' className='input input-bordered w-full max-w-md mt-28 max-[704px]:self-center'/>
      <button className='btn btn-accent ml-2 mt-28 max-[704px]:mt-4 max-[704px]:ml-0' onClick={handleClick}>Search</button>
    </div>
  )
}
