"use client"

import * as React from "react"
import Link from "next/link"
import { useSelectedLayoutSegment } from "next/navigation"

import { cn } from "@/lib/utils"

type NavItem = {
    href: string
    title: string
    disabled?: boolean
}

export function Nav({ items, children }: { items?: NavItem[], children?: React.ReactNode }) {
    const segment = useSelectedLayoutSegment()

    return (
        <div className="flex gap-6 md:gap-10">
            
            {items?.length ? (
                <nav className="hidden gap-6 md:flex">
                    {items?.map((item, index) => (
                        <Link
                            key={index}
                            href={item.disabled ? "#" : item.href}
                            className={cn(
                                "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
                                item.href.startsWith(`/${segment}`)
                                    ? "text-foreground"
                                    : "text-foreground/60",
                                item.disabled && "cursor-not-allowed opacity-80"
                            )}
                        >
                            {item.title}
                        </Link>
                    ))}
                </nav>
            ) : null}
        </div>
    )
}