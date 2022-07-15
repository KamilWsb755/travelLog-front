import React from 'react'
import './CommentElement.css'

interface Props {
    name?: string;
    comment?: string;
}

export const CommentElement = (props: Props) => (
    <div className='comment'>
        <h3>{props.name}</h3>
        <p>{props.comment}</p>
    </div>
)