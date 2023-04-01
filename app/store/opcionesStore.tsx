import { create } from 'zustand'

interface opcionesGame {
    posibilidades: string
    numero: number
        updateOpcion: (value: Opcion) => void

}

type Opcion = "piedra" | "papel" | "tijera" |"";

export const useOpcionesStore = create<opcionesGame>((set) => ({
    posibilidades: "",
    numero: 0,
    updateOpcion: (value: Opcion ) => set({ posibilidades:value  }),
 
}))
