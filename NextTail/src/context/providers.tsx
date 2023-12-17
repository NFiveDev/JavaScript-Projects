import { LayoutContextProvider } from "./layoutProvider";



export default function Provider(props: {children: JSX.Element}){
    return (
        <LayoutContextProvider>
            {props.children}
        </LayoutContextProvider>
    )
}