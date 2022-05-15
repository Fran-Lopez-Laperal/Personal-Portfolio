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
        </>
    )
}

export default AppliesList