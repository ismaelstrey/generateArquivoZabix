import { createContext, FC, useEffect, useState } from "react";

import { xmlContext } from "../types/xml"
export const PlanosContext = createContext<xmlContext | null>(null)
const PlanosProvider: FC<any> = ({ children }) => {


    useEffect(() => {

    }, [])
    return (
        <PlanosContext.Provider value={{}}>
            {children}
        </PlanosContext.Provider>
    )
}
export default PlanosProvider