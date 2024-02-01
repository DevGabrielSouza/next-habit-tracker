import React from 'react'
import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card'
import CardWrapperHeader from '@/components/auth/card-wrapper-header'
import Social from '@/components/auth/social'

interface CardWrapperProps {
    children: React.ReactNode
    headerLabel: string
    backButtonLabel: string
    backButtonHref: string
    showSocials?: boolean
}

export default function CardWrapper({
    children,
    headerLabel,
    backButtonLabel,
    backButtonHref,
    showSocials,
}: CardWrapperProps) {
    return (
        <Card className="w-[400px] flex-col items-center justify-center shadow-sm py-4">
            <CardHeader>
                <CardWrapperHeader label={headerLabel} />
            </CardHeader>
            <CardContent>{children}</CardContent>
            {showSocials && (
                <CardFooter>
                    <Social />
                </CardFooter>
            )}
        </Card>
    )
}
