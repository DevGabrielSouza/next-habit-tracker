'use client'
import React from 'react'
import { z } from 'zod'

const formSchema = z.object({
    username: z.string().min(4).max(25),
    email: z.string().email(),
})

export function RegiserForm() {
    return <div>RegiserForm</div>
}
