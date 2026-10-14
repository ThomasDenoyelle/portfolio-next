import Image from "next/image"
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faFileAlt, faLocationDot} from "@fortawesome/free-solid-svg-icons";

/**
 * Page de présentation de mon portfolio
 */
export default function Hero(){
    return (
        <div className="hero min-h-screen scroll-mt-24" id="presentation">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <Image
                    src="/profil/hero.png"
                    width={500}
                    height={500}
                    priority
                    alt="Picture of the author"
                    className="w-48 sm:w-64 lg:w-80 xl:max-w-sm h-auto rounded-lg"
                />
                <div className="px-2 sm:px-10">
                    <h1 className="text-5xl max-sm:text-4xl text-center font-poppins font-black">Thomas Denoyelle</h1>
                    <p className="pt-10 font-nunito text-xl">
                        J'ai 20 ans et je suis passioné par le développement web. Je poursuis actuellement ma 3ème année de BUT Informatique à l'IUT de Reims.
                    </p>
                    <p className="pt-6 font-nunito text-xl">
                        En dehors de l'informatique, je passe une partie de mon temps à faire du sport comme de la course à pied, du vélo et plein d'autres choses encore ...
                    </p>
                    <div className="pt-10 font-nunito">
                        <ul className="flex flex-wrap justify-around text-center">
                            <li className="p-2">
                                <Link href="https://github.com/ToMaTo1206" className="badge badge-lg badge-soft badge-info text-primary hover:scale-95 transition-transform duration-300">
                                    <FontAwesomeIcon icon={faGithub} />
                                    Github
                                </Link>
                            </li>
                            <li className="p-2">
                                <Link href="profil/cv_Thomas_Denoyelle.pdf" target="_blank" download className="badge badge-lg badge-soft badge-info text-primary hover:scale-95 transition-transform duration-300">
                                    <FontAwesomeIcon icon={faFileAlt} />
                                    Mon CV
                                </Link>
                            </li>
                            <li className="p-2">
                                <Link href="https://www.google.com/maps/place/02200+Soissons" className="badge badge-lg badge-soft badge-info text-primary hover:scale-95 transition-transform duration-300">
                                    <FontAwesomeIcon icon={faLocationDot} />
                                    Soissons
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}