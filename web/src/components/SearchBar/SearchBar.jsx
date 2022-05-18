import { useNavigate } from 'react-router'

import './SearchBar.css'

function SearchBar () {

    const navigate = useNavigate()

    function handleSearch (e) {
        const {search} = e.target.elements
        e.preventDefault()
        navigate(`/applies-list?category=${search.value}`)
    }

    return(
        <div>
            <h1>Search Bar</h1>
            <form onSubmit={handleSearch}>
                <input name='search' type="search" />
                <button type='submit'>Buscar</button>
            </form>
        </div>
    )
}

export default SearchBar