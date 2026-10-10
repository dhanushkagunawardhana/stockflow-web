import React from "react";

import { SidebarHeader, SidebarNav, SidebarProfile } from "./com";

function Sidebar({ nav, profile, header }) {
  return (
    <div className="sticky top-0 h-screen z-40 w-60 border-r border-border bg-background flex flex-col">
      <SidebarHeader header={header} />
      <SidebarNav items={nav} />
      <SidebarProfile profile={profile} />
    </div>
  );
}

export default Sidebar;
