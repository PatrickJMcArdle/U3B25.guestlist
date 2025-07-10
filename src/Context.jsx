import { useContext } from "react";
import { createContext } from "react";
import { useState } from "react";

const Context = createContext()

export function ListProvider({children}) {
  const [expand, setExpand] = useState(false)

  const toggleExpand = () => {
    setExpand(!expand)
  }




  const value = {expand, toggleExpand};
  return <Context.Provider value={value}>{children}</Context.Provider>
}

export function useList() {
    const context = useContext(Context)

    if(!context)
        throw Error("useList must be used within a Context Provider")
    return context
}