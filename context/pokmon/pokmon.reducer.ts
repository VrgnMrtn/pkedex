'use client'

import { SET_POKMON, SET_POKMON_IDENTIFIER } from "../pokmon.type"
import { PokmonInterface } from "./pokmon.interface"
import { PokmonState } from "./pokmon.provider"

type PokmonType = 
    | {type: typeof SET_POKMON, payload: PokmonInterface}
    | {type: typeof SET_POKMON_IDENTIFIER, payload: string}

export const pokmonReducer = (state: PokmonState, action: PokmonType) : PokmonState => {
    switch(action.type){
        case SET_POKMON:
            return {
                ...state,
                pokmon: action.payload
            }
        case SET_POKMON_IDENTIFIER:
            return {
                ...state,
                pokmonIdentifier: action.payload
            }
        default:
            return {
                ...state
            }
    }
}
