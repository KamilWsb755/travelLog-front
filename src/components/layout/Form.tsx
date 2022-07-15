import React, { SyntheticEvent, useState } from 'react'
import './Form.css'

export const Form = () => {
    const [loading, setLoading] = useState(false);
    const [id, setId] = useState('');
    const [form, setForm] = useState({
        name: '',
        description: '',
        imgUrl: '',
    })

    const saveTravel = async (e: SyntheticEvent) => {
        e.preventDefault();

        setLoading(false);
        try {

            const res = await fetch(`http://localhost:3001/travels`, {
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
                    description: '',
                    imgUrl: '',
                })
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
        return <h2>Trwa dodawanie ogłoszenia...</h2>
    }


    if (id) {
        return <>
            <h2>Twoje ogłoszenie "{form.name}" zostało poprawnie dodane do serwisu pod ID: {id}. Zaraz nastąpi przekierowanie!</h2>
        </>
    }

    return (
        <main>
            <h2>Pochwal się swoją podróżą</h2>
            <form onSubmit={saveTravel}>
                <p>
                    <label>
                        Podaj miejsce w którym byłeś: <br />
                        <input type="text" name="name" required maxLength={50}
                            value={form.name}
                            onChange={e => updateForm('name', e.target.value)} />
                    </label>
                </p>
                <p>
                    <label>
                        Dodaj opis miejsca w którym byłeś: <br />
                        <textarea name="description" maxLength={999}
                            value={form.description}
                            onChange={e => updateForm('description', e.target.value)}></textarea>
                    </label>
                </p>
                <p>
                    <label>
                        Dodaj zdjęcie w postaci linku: <br />
                        <input type="text" name="imgUrl" required maxLength={99}
                            value={form.imgUrl}
                            onChange={e => updateForm('imgUrl', e.target.value)} />
                        <br />
                        <small>Wstaw zdjęcie z kraju w którym byłeś z pixabay</small>

                    </label>
                </p>
                {/* <p>
                    <label>
                        Oceń podróż:
                        <input type="number" min="1" max="5" name="country" />
                    </label>
                </p> */}
                <button type="submit">Wyślij formularz</button>
            </form>
        </main>
    )
}