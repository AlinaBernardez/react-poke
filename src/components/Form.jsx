import { useEffect, useState } from "react";
import getPoke from "../api/getPoke";
import styles from '../components/Form.module.css'

function Form () {
const [search, setSearch] = useState('');
const [result, setResult] = useState();
const [error, setError] = useState('');
const [loading, setLoading] = useState(false);

useEffect(() => {
    const renderData = async() => {
        setLoading(true)
        let response = await getPoke(search)
        if(!response) {
            setError('No Pokemon found!')
            setResult()
        }
        else {
            setResult(response)
            setError('')
        }
        setLoading(false)
    }
    renderData()
}, [search])

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <> 
            <h2>Search Pokemon</h2>
            <form className={styles.form} onSubmit={handleSubmit}>
                <label htmlFor="search">Enter a name</label>
                <input id="search" name="search" value={search} onChange={(e) => setSearch(e.target.value)}/>
                {/* <button type='submit' onClick={renderData}>Search</button> */}
            </form>
            { error && (
                <div className={styles.card}>
                    <p>{error}</p>
                </div>)
            }
            { (result && !loading) ? (
                <div className={styles.card}>
                    <p><b>Pokemon:</b> {result.name}</p>
                    <img src={result.sprites.front_default} />
                    <p><b>Order:</b> {result.order}</p>
                </div>) : (
                    <p>Loading...</p>
                )
            }
        </>
    )
}

export default Form;