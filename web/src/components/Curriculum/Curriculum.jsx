import pdf from '../../assets/images/CV Fran.pdf'
import cv from '../../assets/images/CV.png'

import './Curriculum.css'

function Curriculum() {
    return (
        <div className='cv d-flex'>

            <div className='cv-logo'>
                <a href={pdf}> <img src={cv} alt={cv} /></a>.
            </div>
            <div className='cv-download'>
                <button className='fa fa-download'>
                    <a href={pdf} target='_blank' rel='noopener noreferrer' download={pdf}>
                    </a>
                </button>
            </div>
        </div>
    )
}

export default Curriculum