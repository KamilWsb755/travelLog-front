import React, { useEffect, useState } from 'react'
import '../layout/List.css';
import { CommentListEntity } from 'types';
import { CommentElement } from './CommentElement';

interface Props {
    id?: string,
}

export const CommentList = (props: Props) => {
    const [comments, setComments] = useState<CommentListEntity[]>([]);

    useEffect(() => {
        (async () => {
            const res = await fetch(`http://localhost:3001/comment`);
            const data = await res.json();

            setComments(data);
        })()
    }, [])

    return (
        <div className="gallery">
            <h2>Lista komentarzy</h2>
            {comments.map((comment, index) => {
                console.log(props.id, comment);
                if (props.id === comment.travelId) {
                    return (
                        <CommentElement key={index} name={comment.name} comment={comment.comment} />
                    )
                }
            })}
        </div>

    )
}