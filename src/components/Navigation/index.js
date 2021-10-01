import React from "react";
import './style.css'
import emailIcon from '../../assets/email.svg'
import phoneIcon from '../../assets/phone.svg'
import whatsappIcon from '../../assets/whatsapp.svg'

const Navigation = ({
    whatsapp,
    phone,
    email
}) => {
    return (
        <section className="navigation">
            <div className="float">
                <a className="link" href={`http://wa.me/${whatsapp}`}>
                    <img src={whatsappIcon} alt="whatsapp" className="icon" />
                    <span className="text">Whatsapp</span>
                </a>
                <a className="link" href={`http://wa.me/${phone}`}>
                    <img src={phoneIcon} alt="phone" className="icon" />
                    <span className="text">Phone</span>
                </a>
                <a className="link" href={`http://wa.me/${email}`}>
                    <img src={emailIcon} alt="email" className="icon" />
                    <span className="text">Email</span>
                </a>
            </div>
        </section>
    )
}

export default Navigation