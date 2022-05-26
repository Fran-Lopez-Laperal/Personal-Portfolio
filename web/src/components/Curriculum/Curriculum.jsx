import pdf from '../../assets/images/CV Fran.pdf'
import cv from '../../assets/images/CV.png'

import './Curriculum.css'

function Curriculum() {
    return (
        <div className='cv d-flex'>
                <a href={pdf}> <img src={cv} alt={cv} /></a>.
                <button className='fa fa-download'>
                    <a href={pdf} target='_blank' rel='noopener noreferrer' download={pdf}>
                    </a>
                </button>
        </div>
    )
}

export default Curriculum