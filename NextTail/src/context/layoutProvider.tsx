'use client'

import { createContext, useContext, Dispatch, useReducer, useEffect, useState } from 'react';

type initState = {
  sidebarOpen: boolean;
};

export const LayoutContext = createContext<initState | null>(null);
export const LayoutDispatchContext = createContext<Dispatch<LayoutActionType> | null>(
  null
);

export enum LayoutActionType {
  OPEN_SIDEBAR,
  CLOSE_SIDEBAR,
}

const layoutReducer = (state: initState, action: LayoutActionType) => {
  switch (action) {
    case LayoutActionType.OPEN_SIDEBAR:
      return {
        ...state,
        sidebarOpen: true,
      };
    case LayoutActionType.CLOSE_SIDEBAR:
      return {
        ...state,
        sidebarOpen: false,
      };
    default:
      throw new Error('Action not implemented');
  }
};

const initialState: initState = {
  sidebarOpen: true,
};

export function LayoutContextProvider(props: {children: JSX.Element}) {
  const [hasInit, setHasInit] = useState(false)
  const [state, dispatch] = useReducer(layoutReducer, initialState);

  // if(!hasInit && window.innerWidth < 1000) {
  //   dispatch(LayoutActionType.OPEN_SIDEBAR);
  //   setHasInit(false);
  // } 

  return (
    <LayoutContext.Provider value={state}>
      <LayoutDispatchContext.Provider
        value={dispatch}
      >
        {props.children}
      </LayoutDispatchContext.Provider>
    </LayoutContext.Provider>
  );
}

