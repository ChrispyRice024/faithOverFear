import React from 'react'

//Seed Data
import data from '../data'

export default function Home (){
    return(
        <div id='home'>
            {/* The list of featured items */}
            <ul className='list'>
                {data.map(item => (
                    <li className='listItem' key={item.id}>
                        {item.thumbnail}<br/>
                        <strong>
                            {item.title} | {item.price}<br/>
                        </strong>
                        {item.description}
                    </li>
                ))}
            </ul>
        </div>
    )
}