'use client'

import { PokmonProvider } from "./pokmon/pokmon.provider"

interface Props {
    children: React.ReactNode
}

export function PokmonProviers ({children} : Props){
    return (
        <PokmonProvider>
            {children}
        </PokmonProvider>
    )
}