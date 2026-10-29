import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <footer className="footer sm:footer-horizontal bg-base-300 text-neutral-content p-10">
            <aside>
                <p>
                    © 2026 Thomas Denoyelle
                    <br/>
                    Tous droits réservés.
                </p>
            </aside>
            <nav>
                <h6 className="footer-title">Social</h6>
                <div className="grid grid-flow-col gap-4">
                    <a href="mailto:thom84.1206@gmail.com">
                        <FontAwesomeIcon icon={faEnvelope} size="lg" />
                    </a>
                    <a href="https://www.linkedin.com/in/thomas-denoyelle-2198a42b9/">
                        <FontAwesomeIcon icon={faLinkedin} size="lg" />
                    </a>
                    <a href="https://github.com/ThomasDenoyelle">
                        <FontAwesomeIcon icon={faGithub} size="lg" />
                    </a>
                </div>
            </nav>
        </footer>
    )
}