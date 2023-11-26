import { ReactNode } from "react";
import { LayoutContextProvider } from "./layoutContextProvider";

export default function Providers(props: { children: ReactNode }) {
  return (
    <>
      <LayoutContextProvider>
        {props.children}
      </LayoutContextProvider>
    </>
  )
}