import pdf from '../../assets/images/CV Fran.pdf'
import cv from '../../assets/images/CV.png'

import './Curriculum.css'

function Curriculum() {
    return (
        <div className='cv d-flex'>
            <button>
                <a href={pdf}>Descarga CV</a>.
            </button>
        </div>
    )
}

export default Curriculum