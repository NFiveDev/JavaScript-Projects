'use client'

import { convertLocalSidebarStateBoolean, getLocalStorageSidebarState } from '@/utility/layoutHelper';
import React, { ReactNode, useContext, createContext, useState, Dispatch, SetStateAction, useEffect } from 'react';

type ILayoutContext = {
  open: boolean,
  setOpen: Dispatch<SetStateAction<boolean>>
}

const LayoutContext = createContext<ILayoutContext>({
  open: true,
  setOpen: () => true
})

export function LayoutContextProvider(props: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);


  useEffect(() => {
    const sidebarBeenClosedOrOpened = getLocalStorageSidebarState();

    if(sidebarBeenClosedOrOpened != null) {
      const actualSidebarState = convertLocalSidebarStateBoolean(sidebarBeenClosedOrOpened);
      setSidebarOpen(actualSidebarState)
    }
  }, [])

  return <LayoutContext.Provider value={{
    open: sidebarOpen,
    setOpen: setSidebarOpen
  }}>
    {props.children}
  </LayoutContext.Provider>
}

export const useLayoutContext = () => useContext(LayoutContext);