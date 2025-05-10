import{ useState } from "react"
import './SearchBar.css'

const SearchBar= ({ onsubmit}) => {
    const [term, setTerm] = useState('')

     const handleFormSumit = (Event) => {
        Event.preventDefault()
        console.log('Necesit decirle al componente papa sobre los datos')
        onsubmit(term)
    }

    const handleChang = (event) => {
        setTerm(event.target.value)
    }
    console.log('term', term)

    return (
        <div className="search-bar">
            <from onsubmit={handleFormSumit}>
                <label> Termino de la busqueda: </label>
                <input onChange={handelChange} value={term}/>
            </from>
        </div>
    )
}

export default SearchBar
