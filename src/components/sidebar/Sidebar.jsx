import React from "react";

import { SidebarHeader, SidebarNav, SidebarProfile } from "./com";

import { sidebarNav } from "@/data/nav";

function Sidebar() {
  return (
    <div className="w-60 border-r border-border bg-background flex flex-col">
      <SidebarHeader />
      <SidebarNav items={sidebarNav} />
      <SidebarProfile />
    </div>
  );
}

export default Sidebar;
