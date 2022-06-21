import React from 'react'
import { iconUrlFromCode } from '../Services/weatherServices'

function Forecast({title, items}) {
  return (
    <div>
        <div className='flex items-center justify-start my-6'>
            <p className='text-white font-medium uppercase'>
               {title} </p>
        </div>
        <hr className='my-2' />

        <div className='flex flex-row items-center justify-between text-white'>
            {items.map(item =>(
                     <div className='flex flex-col item-center justify-center'>
                     <p className='font-light text-sm'>
                       {item.title}
                     </p>
                     {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Eo_circle_orange_blank.svg/768px-Eo_circle_orange_blank.svg.png" style={{ width: 25 }} alt='' className='w-13 my-1' /> */}
                     <img src={iconUrlFromCode(item.icon)} 
                     style={{ width: 25 }} alt='' className='w-13 my-1' />
                     <p className='font-medium'>{`${item.temp.toFixed()}°`}</p>
                 </div>
            ))}
           
            {/* <div className='flex flex-col item-center justify-center'>
                <p className='font-light text-sm'>
                    04:30 PM
                </p>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Eo_circle_orange_blank.svg/768px-Eo_circle_orange_blank.svg.png" style={{ width: 25 }} alt='' className='w-13 my-1' />
                <p className='font-medium'>22°</p>
            </div>
            <div className='flex flex-col item-center justify-center'>
                <p className='font-light text-sm'>
                    04:30 PM
                </p>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Eo_circle_orange_blank.svg/768px-Eo_circle_orange_blank.svg.png" style={{ width: 25 }} alt='' className='w-13 my-1' />
                <p className='font-medium'>22°</p>
            </div> */}
            {/* <div className='flex flex-col item-center justify-center'>
                <p className='font-light text-sm'>
                    04:30 PM
                </p>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Eo_circle_orange_blank.svg/768px-Eo_circle_orange_blank.svg.png" style={{ width: 25 }} alt='' className='w-13 my-1' />
                <p className='font-medium'>22°</p>
            </div>
            <div className='flex flex-col item-center justify-center'>
                <p className='font-light text-sm'>
                    04:30 PM
                </p>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Eo_circle_orange_blank.svg/768px-Eo_circle_orange_blank.svg.png" style={{ width: 25 }} alt='' className='w-13 my-1' />
                <p className='font-medium'>22°</p>
            </div>
             */}
        </div>
        
    </div>
  )
}

export default Forecast
