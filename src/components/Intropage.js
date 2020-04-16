import React, { useState } from 'react';

const Intropage = () => {
    const initState = [
        { fact: 'Coronaviruses (CoV) have been identified as human pathogens since the 1960’s.', id: 1 },
        { fact: 'Coronaviruses are enveloped positive stranded RNA viruses in the order of Nidovirales', id: 2 },
        { fact: 'Human infections with common coronaviruses are mostly mild and asymptomatic, but severe and fatal infections have been observed', id: 3 }
    ]

    const [Facts, setFacts] = useState(initState);

    const addFacts = (fact) => {
        setFacts(...Facts, { fact: fact, id: Math.random() * 33434 })
    }
    const i = Math.floor(Math.random() * Facts.length)

    return (
        <div className='main-bg'>
            <div className='main-text'>
                <div className="typewriter center-align">
                    <p>{Facts[i].fact}</p>
                </div>
            </div>
        </div>
    )
}

export default Intropage;