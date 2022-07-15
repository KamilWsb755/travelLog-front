import React from 'react'
import './Element.css';

interface Props {
    travelId?: string;
    name?: string;
    description?: string;
    url?: string;
    isSingle: boolean;
}

export const Element = (props: Props) => (
    <div className='country'>
        <img src={props.url} alt={props.name} />
        <h2>{props.name}</h2>
        <p>{props.description}</p>

        {!props.isSingle ? <a href={"/travel/" + props.travelId}>Zobacz więcej...</a> : null}
    </div>
)