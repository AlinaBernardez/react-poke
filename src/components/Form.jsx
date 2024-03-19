import { useEffect, useState } from "react";
import getPoke from "../api/getPoke";

function Form () {
const [search, setSearch] = useState('');
const [result, setResult] = useState();

useEffect(() => {
    console.log(result)
}, [result])

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(search)
    }

    const renderData = async() => {
        let response = await getPoke(search)
        setResult(response)
    }

    return (
        <> 
            <h2>Search Pokemon</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="search">Enter a name</label>
                <input id="search" name="search" value={search} onChange={(e) => setSearch(e.target.value)}/>
                <button type='submit' onClick={renderData}>Search</button>
            </form>
            {/* {result && (<p>{result}</p>)} */}
        </>
    )
}

export default Form;