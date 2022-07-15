import React, { SyntheticEvent, useState } from 'react'

interface Props {
    id?: string,
}

export const CommentForm = (props: Props) => {
    const [loading, setLoading] = useState(false);
    const [id, setId] = useState('');
    const [form, setForm] = useState({
        name: '',
        comment: '',
        travelId: props.id,
    })

    const saveComment = async (e: SyntheticEvent) => {
        e.preventDefault();

        setLoading(false);
        try {

            const res = await fetch(`http://localhost:3001/comment`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...form,
                }),
            })

            const data = await res.json();

            setId(data.id);

            setTimeout(() => {
                setId('')
                setForm({
                    name: '',
                    comment: '',
                    travelId: props.id,
                })
                window.location.reload();
            }, 2000)
        } finally {
            setLoading(false);
        }
    }


    const updateForm = (key: string, value: any) => {
        setForm(form => ({
            ...form,
            [key]: value,
        }))
    }

    if (loading) {
        return <h2>Trwa dodawanie komentarza...</h2>
    }


    if (id) {
        return <>
            <h2>Twoj komentarz został poprawnie dodany do serwisu pod ID: {id}. Zaraz nastąpi przekierowanie!</h2>
        </>
    }

    return (
        <section className='comment-form'>
            <h3>Dodaj komentarz:</h3>
            <form onSubmit={saveComment}>
                <p>
                    <label>
                        <p>Podpisz się:</p>
                        <input type="text" name="name" required maxLength={30}
                            value={form.name}
                            onChange={e => updateForm('name', e.target.value)} />
                    </label>
                </p>
                <p>
                    <label>
                        <p>Treść komentarza:</p>
                        <textarea name="comment" maxLength={300}
                            value={form.comment}
                            onChange={e => updateForm('comment', e.target.value)}></textarea>
                    </label>
                </p>
                <input type="text" name="travelId" value={form.travelId} readOnly hidden />
                <button type="submit">Wyślij formularz</button>
            </form>
        </section>
    )
}