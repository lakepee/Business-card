import emailIcon from '../assets/Email-icon.png'
import linkInIcon from '../assets/LinkedIn.png'
import '../App.css'

function Details(){
    return(
        <div className="contact bg-theme align-center">
            <h1 className="contact-name">Peter Okerinola</h1>
                <h3 className="job-title text-align-center">FullStack Developer</h3>
                <h3 className="email-contact text-align-center">peterjokesme@gmail.com</h3>
                <div className="info-contact-link flex">
                    <a href="#" className=" flex">
                        <img src={emailIcon} alt=" Email Logo" />
                        <p>Email</p>
                    </a>
                    <a href="" className="flex">
                    <img className='linkedin' src={linkInIcon} alt=" LinkedIn Logo" />
                        <p>LinkedIn</p>
                    </a>
                </div>
        </div>
    )
}

export default Details;