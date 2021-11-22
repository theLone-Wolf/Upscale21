import upscale from '../assets/upscale.svg'
import insta from '../assets/social/instagram.svg'
import instaw from '../assets/social/instagramw.svg'
import linkedin from '../assets/social/linkedin.svg'
import linkedinw from '../assets/social/linkedinw.svg'

const Footer = () => {
    return (
        <div className="container-fluid">
                <div className="footer">
                    <div className="align-baseline">
                        <img className="footer-logo" src={upscale} alt="Upscale-21" />
                        <h2 className="footer-text copyright">©2021 IEEE SB GEC Palakkad</h2>
                    </div>
                    <div>
                        <h2 className="footer-head">Connect with us</h2>

                        <h2 className="footer-text">IEEE SB GEC Palakkad</h2>
                        <a href="https://www.instagram.com/ieeesbgecpkd/" target="_blank"><img className="social" src={insta} alt="insta" /></a>
                        <a href="https://www.linkedin.com/company/ieeesbgecpkd" target="_blank"><img className="social" src={linkedin} alt="linkedin" /></a>

                        <h2 className="footer-text">IEDC GEC Palakkad</h2>
                        <a href="https://www.instagram.com/iedcgecpkd/" target="_blank"><img className="social" src={insta} alt="insta" /></a>
                        <a href="https://in.linkedin.com/company/iedc-gec-palakkad" target="_blank"><img className="social" src={linkedin} alt="linkedin" /></a>
                    </div>
                    <div>
                        <h2 className="footer-head">Our partners</h2>
                        <h2 className="footer-text">PIE Kerala Section</h2>
                        <a href="https://www.instagram.com/ieeepie.kerala/" target="_blank"><img className="social" src={insta} alt="insta" /></a>
                        <a href="https://in.linkedin.com/company/ieee-pie-kerala-section/" target="_blank"><img className="social" src={linkedin} alt="linkedin" /></a>
                    </div>
                    <div>
                        <h2 className="footer-head">Get in touch</h2>
                        <h2 className="footer-text">Questions or feedback?<br />We'd love to hear from you</h2>
                        <a href="https://www.instagram.com/ieeesbgecpkd/" target="_blank"><img className="socialw" src={instaw} alt="insta" /></a>
                        <a href="https://www.linkedin.com/company/ieeesbgecpkd" target="_blank"><img className="socialw" src={linkedinw} alt="linkedin" /></a>
                    </div>
                </div>
        </div>
    )
}

export default Footer
