import React from 'react'

import { FcGoogle } from 'react-icons/fc'
import { FaFacebook } from 'react-icons/fa'

import { Button } from '@/components/ui/button'

export default function Social() {
    return (
        <div className="flex items-center w-full gap-x-2">
            <Button
                type="button"
                className="w-full flex justify-evenly"
                variant="outline"
            >
                <FcGoogle className="w-6 h-6" />
                <span>Google</span>
            </Button>

            <Button
                type="button"
                className="w-full flex justify-evenly"
                variant="outline"
            >
                <FaFacebook className="w-6 h-6" />
                <span>Facebook</span>
            </Button>
        </div>
    )
}
