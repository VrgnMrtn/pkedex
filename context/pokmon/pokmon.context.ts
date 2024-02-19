'use client'

import { createContext } from "react"
import { PokmonInterface } from "./pokmon.interface"

interface PokmonContextInterface {
    pokmon: Partial<PokmonInterface>
    pokmonIdentifier: string

    setPokmon: (pkmon: PokmonInterface) => void
    setPokmonIdentifier: (identifier: string) => void
}
export const PokmonContext = createContext( {} as PokmonContextInterface)