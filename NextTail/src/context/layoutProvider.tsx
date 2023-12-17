'use client'

import { createContext, useContext, Dispatch, useReducer } from 'react';

type initState = {
  sidebarOpen: boolean;
};

const LayoutContext = createContext<initState | null>(null);
const LayoutDispatchContext = createContext<Dispatch<LayoutActionType> | null>(
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
        sideebarOpen: false,
      };
    default:
      throw new Error('Action not implemented');
  }
};

const initialState: initState = {
  sidebarOpen: true,
};

export function LayoutContextProvider(props: {children: JSX.Element}) {
  const [state, dispatch] = useReducer(layoutReducer, initialState);

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

export function useLayoutContext() {
    const dispatch = useContext(LayoutDispatchContext);
    const context = useContext(LayoutContext);

    if(!dispatch || !context) {
        throw new Error("Must be used inside LayoutContextProvider")
    }

    return {
        layoutHandler: dispatch,
        layoutState: context
    }
}
