import { useLayoutContext } from "@/context/layoutContextProvider";
import { setLocalStorageSidebarState } from "@/utility/layoutHelper";



export default function useLayout() {
  const {open, setOpen} = useLayoutContext();

  function setSidebar(input: boolean){
    setOpen(input)
    setLocalStorageSidebarState(input);
  }

  return {
    sidebarOpen: open,
    setSidebarState: setSidebar
  }  
}