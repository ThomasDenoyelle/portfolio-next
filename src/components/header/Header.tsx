import Image from "next/image"
import {faContactCard, faCubes, faDiagramProject, faRoute} from "@fortawesome/free-solid-svg-icons"
import NavLinkIcon from "@/components/header/NavLinkIcon";
import NavLink from "@/components/header/NavLink";

/**
 * Header du portfolio
 */
export default function Header() {
    return (
        <header className="navbar bg-secondary/85 backdrop-blur-md z-50 shadow-xl md:px-12 sticky top-0">
            <div className="navbar-start">
                <a href="#presentation" className="hover:opacity-80 transition-opacity">
                    <Image
                        src="/profil/td_logo.svg"
                        width={50}
                        height={50}
                        alt="Logo du site"
                    />
                </a>
            </div>
            <div className="navbar-end">
                <ul className="menu menu-horizontal flex md:hidden">
                    <NavLinkIcon href={"#parcours"} tooltip={"Parcours"} faIcon={faRoute} />
                    <NavLinkIcon href={"#projets"} tooltip={"Projets"} faIcon={faDiagramProject} />
                    <NavLinkIcon href={"#stack"} tooltip={"Stack technique"} faIcon={faCubes} />
                    <NavLinkIcon href={"#contact"} tooltip={"Contact"} faIcon={faContactCard} />
                </ul>
                <ul className="menu menu-horizontal hidden md:flex">
                    <NavLink href={"#parcours"}>Parcours</NavLink>
                    <NavLink href={"#projets"}>Projets</NavLink>
                    <NavLink href={"#stack"}>Stack</NavLink>
                    <NavLink href={"#contact"}>Contact</NavLink>
                </ul>
            </div>
        </header>
    )
}