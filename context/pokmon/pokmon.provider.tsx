'use client'

import { useMemo, useReducer } from "react"
import { PokmonInterface } from "./pokmon.interface"
import { pokmonReducer } from "./pokmon.reducer"
import { SET_POKMON, SET_POKMON_IDENTIFIER } from "../pokmon.type"
import { PokmonContext } from "./pokmon.context"

export interface PokmonState {
    pokmon: Partial<PokmonInterface>
    pokmonIdentifier: string
}

const initState: PokmonState = {
    pokmon: {},
    pokmonIdentifier: ''
}

interface Props {
    children: React.ReactNode
}

export function PokmonProvider ({children}: Props) {
    const [ state, dispatch ] = useReducer(pokmonReducer, initState);
    const setPokmon = (pkmn: PokmonInterface) => dispatch({type: SET_POKMON, payload: pkmn});
    const setPokmonIdentifier = (identifier: string) => dispatch({type: SET_POKMON_IDENTIFIER, payload: identifier});

    const value = useMemo(() => ({
        ...state,
        setPokmon,
        setPokmonIdentifier
    }), [state]);

    return (
        <PokmonContext.Provider value={value}>
            {children}
        </PokmonContext.Provider>
    )
}