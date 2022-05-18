import { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { getApplies } from '../../api-services/api-services'
import SearchBar from '../SearchBar/SearchBar'
import './AppliesList.css'

function AppliesList() {

    const [applies, setApplies] = useState(null)
    const {search} = useLocation()

    useEffect(() => {
        const url = new URLSearchParams(search)
        const category = url.get('category')
        getApplies(category)
            .then((applies) => {
                setApplies(applies)
            })
    }, [search])

    if (!applies) {
        return null
    }



    return (

        <>
            <h1>OFERTAS DE EMPLEO APLICADAS</h1>
            <div className='apply-list'>
                {applies.map(apply =>
                    <div key={apply._id}>
                        <div className='apply-list-apply'>
                            <h1 >{apply.offerTitle}</h1>
                            <div className='apply-list-img'>
                                <img src={apply.avatar} alt={apply.avatar} />
                            </div>
                        </div>
                        <h4>{apply.typeJob}</h4>
                    </div>
                )}
            </div>
            <SearchBar/>
        </>
    )
}

export default AppliesList