import { useEffect, useState } from 'react'
import { getApplies } from '../../api-services/api-services'
import './AppliesList.css'

function AppliesList() {

    const [applies, setApplies] = useState(null)

    useEffect(() => {
        getApplies()
            .then((applies) => {
                setApplies(applies)
            })
    }, [])

    if (!applies) {
        return null
    }



    return (

        <>
        <h1>OFERTAS DE EMPLEO APLICADAS</h1>
            <div>
                {applies.map(apply =>
                    <h1>{apply.description}</h1>
                )}
            </div>
        </>
    )
}

export default AppliesList