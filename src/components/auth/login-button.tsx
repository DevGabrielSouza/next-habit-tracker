'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

interface LoginButtonProps {
    children: React.ReactNode
    mode?: 'modal' | 'redirect'
    asChild?: boolean
    className?: string
}

export function LoginButton({
    children,
    mode = 'redirect',
    asChild = false,
    className,
}: Readonly<LoginButtonProps>) {
    const router = useRouter()
    const onClick = () => {
        router.push('/login')
    }

    return (
        <span onClick={onClick} className="cursor-pointer">
            {children}
        </span>
    )
}
