import StackCard from "@/components/stack/stack_card";
import {
    faBootstrap, faCss3,
    faDocker,
    faGithub, faGitlab, faHtml5, faJs,
    faLinux, faNodeJs,
    faPhp, faReact, faSymfony,
    faTailwindCss,
} from "@fortawesome/free-brands-svg-icons";
import { faCode, faCube, faDatabase, faTerminal,} from "@fortawesome/free-solid-svg-icons";

export default function Stack() {
    return(
        <div className="flex flex-col justify-center w-full px-10 py-5 pt-12 pb-14 scroll-mt-16" id={"stack"}>
            <div className="divider pb-5">
                <p className="text-4xl font-bold">
                    Stack technique
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 py-6 gap-5 pt-16">
                <div className="card bg-base-100/70 shadow-2xl flex grow ps-5 rounded-md py-5 pb-10">
                    <h1 className="text-2xl font-bold pt-2">
                        Front-End
                    </h1>
                    <div className="flex flex-wrap gap-2 py-3">
                        <StackCard faIcon={faHtml5} delay={100}>Html</StackCard>
                        <StackCard faIcon={faCss3} delay={200}>Css</StackCard>
                        <StackCard faIcon={faJs} delay={300}>Javascript</StackCard>
                        <StackCard faIcon={faReact} delay={400}>React</StackCard>
                        <StackCard faIcon={faBootstrap} delay={500}>Bootstrap</StackCard>
                        <StackCard faIcon={faTailwindCss} delay={600}>Tailwind</StackCard>
                    </div>
                </div>
                <div className="card bg-base-100/70 shadow-2xl flex grow ps-5 rounded-md py-5 pb-10">
                    <h1 className="text-2xl font-bold pt-2">
                        Back-End
                    </h1>
                    <div className="flex flex-wrap gap-2 py-3">
                        <StackCard faIcon={faPhp} delay={200}>PHP</StackCard>
                        <StackCard faIcon={faSymfony} delay={400}>Symfony</StackCard>
                        <StackCard faIcon={faNodeJs} delay={600}>NodeJs</StackCard>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 py-6 gap-5">
                <div className="card bg-base-100/70 shadow-2xl flex grow ps-5 rounded-md py-5 pb-10">
                    <h1 className="text-2xl font-bold pt-2">
                        Outils
                    </h1>
                    <div className="flex flex-wrap gap-2 py-3">
                        <StackCard faIcon={faDocker} delay={100}>Docker</StackCard>
                        <StackCard faIcon={faGithub} delay={200}>Github</StackCard>
                        <StackCard faIcon={faGitlab} delay={300}>GitLab</StackCard>
                        <StackCard faIcon={faLinux} delay={400}>Linux</StackCard>
                        <StackCard faIcon={faCode} delay={500}>VsCode</StackCard>
                        <StackCard faIcon={faTerminal} delay={600}>PhpStorm</StackCard>
                    </div>
                </div>
                <div className="card bg-base-100/70 shadow-2xl flex grow ps-5 rounded-md py-5 pb-10">
                    <h1 className="text-2xl font-bold pt-2">
                        Base de données
                    </h1>
                    <div className="flex flex-wrap gap-2 py-3">
                        <StackCard faIcon={faDatabase} delay={200}>MySQL / PostgreSQL</StackCard>
                        <StackCard faIcon={faCube} delay={600}>Doctrine</StackCard>
                    </div>
                </div>
            </div>
        </div>
    )
}