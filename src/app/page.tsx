import { LoginButton } from '@/components/auth/login-button'
import { Button } from '@/components/ui/button'

export default function Home() {
    return (
        <main className="text-center">
            <h1>Hello World</h1>
            <LoginButton>
                <Button variant="outline" size="lg">
                    Sign in
                </Button>
            </LoginButton>
        </main>
    )
}
