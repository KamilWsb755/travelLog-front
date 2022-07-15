import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { TravelEntity } from 'types';
import { CommentForm } from '../Comments/CommentForm';
import { CommentList } from '../Comments/CommentList';
import { Element } from './Element'

export const SingleView = () => {
    const { id } = useParams();
    const [travel, setTravel] = useState<TravelEntity>()

    useEffect(() => {
        (async () => {
            const res = await fetch(`http://localhost:3001/travels/${id}`);
            const data = await res.json();

            setTravel(data);
        })()
    }, [])

    return (
        <div>
            <Element key={travel?.id} isSingle={true} travelId={travel?.id} url={travel?.imgUrl} name={travel?.name} description={travel?.description} />

            <CommentList id={id} />
            <CommentForm id={id} />
        </div>
    )
}