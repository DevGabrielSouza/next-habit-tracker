import React from 'react'
import CardWrapper from '@/components/auth/card-wrapper'

export function LoginForm() {
    return (
        <CardWrapper
            headerLabel="Welcome back"
            backButtonLabel="Don't have an account? Register here."
            backButtonHref="/register"
            showSocials
        >
            <div className="text-center">LoginForm</div>
        </CardWrapper>
    )
}
