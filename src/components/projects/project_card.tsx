"use client"

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type ProjectsProps = {
    title: string;
    img: string;
    link: string;
    children?: React.ReactNode;
    delay?: number; 
}

export default function ProjectCard({title, img, link, delay = 0, children}: ProjectsProps) {
    const ref = useRef<HTMLDivElement>(null)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true)
                    observer.disconnect()
                }
            },
            { threshold: 0.15 }
        )

        observer.observe(el)
        return () => observer.disconnect()
    }, [])

    return (
        <div ref={ref}
            style={{ transitionDelay: `${delay}ms` }}
            className={`card h-full shadow-lg rounded-lg bg-base-100/60 overflow-hidden transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-x-0 ${
                visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"
            }`}>
            <div className="card-body p-6">
                <h1 className="card-title font-poppins text-3xl">
                    {title}
                </h1>
            </div>
            <div className="group relative w-full aspect-video border-t border-primary/10">
                <Image
                    src={img}
                    alt={title}
                    width={1280}
                    height={720}
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                />
                <div
                    className="absolute inset-0 flex flex-col p-6 justify-end bg-black/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                >
                    <div
                        className="translate-y-4 space-y-2 transition-transform duration-300 group-hover:translate-y-0"
                    >
                        <p className="text-white">{children}</p>
                        <div className="text-xl font-bold text-white"><Link href={link}>
                            Voir sur Github
                        </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}