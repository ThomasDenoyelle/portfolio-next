"use client"

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";
import { useEffect, useRef, useState } from "react";

type StackProps = {
    faIcon: IconDefinition;
    children?: React.ReactNode;
    delay?: number;
}
export default function StackCard({ children, faIcon, delay = 0 }: StackProps) {
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

    return(
        <div ref={ref}
            style={{ transitionDelay: `${delay}ms` }}
            className={`badge badge-soft badge-info border-primary/80 text-primary transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-x-0 ${
                visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"
            }`}>
            <FontAwesomeIcon icon={faIcon} />
            {children}
        </div>
        )
}