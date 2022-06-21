import React ,{useState}from 'react'
import { UilSearch ,UilLocationPoint} from '@iconscout/react-unicons'
function Inputs({setQuery ,units ,setUnits}) {

  const  [city, setCity] = useState ("");

  const handleSearchClick = () => 
  {
    if(city !== '') setQuery({q:city})
  }
  const handleUnitsChange = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  }
  
  return (
    <div className='flex flex-row justify-center my-6'>
        <div className='flex flex-row 3/4 item-center  justify-center space-x-4'>

            <input
            value={city}
            onChange={(e) => setCity(e.currentTarget.value)}
            type="text"
            placeholder='Search.....' 
            style={{width:386}} className='text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase rounded-b-3xl'>
            </input>
            <UilSearch 
             style={{margin:8}}
              size={25} 
              className="text-white cursor-pointer transition ease-out hover:scale-125"
  
              onClick={handleSearchClick}
             />
            <UilLocationPoint  style={{margin:8}}size={25} className="text-white cursor-pointer transition ease-out hover:scale-125"/>
        </div>
        <div className='flex flex-row w-1/4 item-center justify-center'>
            <button name="metric" className='text-2xl text-white font-light transition east-out hover:scale-125 ' onClick={handleUnitsChange}>
             °C
            </button>
            <p style={{margin:8}} className='text-white text-xl mx-1'>|</p>
            <button name="imperial" className='text-2xl text-white font-light transition east-out hover:scale-125'onClick={handleUnitsChange}>
             °F
            </button>
        </div>

    </div>
  )
}

export default Inputs