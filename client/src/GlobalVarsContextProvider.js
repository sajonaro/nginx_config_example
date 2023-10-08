import React, { createContext  } from 'react'
export const GlobalVarsContext = createContext()
const GlobalVarsContextProvider = (props) => {
    const APPLES_API_URL = "https:localhost:7212"
    const  ORANGES_API_URL= "https://localhost:7024"
    const  FORECAST_API_URL= "https://localhost:7263/weatherforecast"

    return (
         <GlobalVarsContext.Provider 
            value={{
                ORANGES_API_URL,
                APPLES_API_URL
             }}>
               {props.children}
         </GlobalVarsContext.Provider>
    )
}
export default GlobalVarsContextProvider;