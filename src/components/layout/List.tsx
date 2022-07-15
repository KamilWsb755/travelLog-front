import React, { useEffect, useState } from 'react'
import { Element } from './Element'
import './List.css';
import { TravelEntity } from 'types';

export const List = () => {
    const [travels, setTravels] = useState<TravelEntity[]>([]);

    useEffect(() => {
        (async () => {
            const res = await fetch(`http://localhost:3001/travels`);
            const data = await res.json();

            setTravels(data);
        })()
    }, [])

    return (
        <div className="gallery">
            <h2>Lista postów</h2>
            {travels.map(travel => (
                <Element key={travel.id} isSingle={false} travelId={travel.id} url={travel.imgUrl} name={travel.name} description={travel.description} />
            ))}
        </div>

    )
}