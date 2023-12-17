'use client'

import useLayout from "@/hooks/useLayout";


function Sidebar() {
    const {layoutState} = useLayout();

    return (
        <div className={`fixed md:static bg-slate-600 top-0 bottom-0 left-0 ease-in-out duration-500 w-56 transition-all ${layoutState.sidebarOpen ? 'ms-[-250px]' : 'ms-0'}`}>
            <h1>side</h1>
        </div>
    )
}

export default Sidebar;