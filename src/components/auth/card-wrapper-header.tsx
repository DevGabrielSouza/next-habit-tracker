import React from 'react'

interface CardHeaderProps {
    label: string
}

export default function CardWrapperHeader({ label }: CardHeaderProps) {
    return (
        <div className="w-full flex flex-col gap-y-4 items-center justify-center">
            <h2 className="text-3x1 font-semibold">Next Habit Tracker</h2>
            <p className="text-sm text-gray-500">{label}</p>
        </div>
    )
}
