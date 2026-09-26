import { UserRound } from "lucide-react";

function SidebarProfile() {
  return (
    <div className="px-4 py-4 mt-auto border-t border-border">
    <div className="flex gap-3 items-center">
         <div className="flex items-center justify-center shrink-0 size-8 rounded-full bg-[#fdf1ed] text-[#a63d1d]">
         <UserRound className="size-4" strokeWidth={1.8} />
     </div>

      <div className="leading-tight">
        <div className="truncate text-xs font-medium text-foreground">Dhanushka Gunawardhana</div>
        <div className="truncate mt-0.5 text-[11px] text-muted-foreground">Stock Manager</div>
        <div className="truncate mt-0.5 text-[10px] text-muted-foreground">Colombo Central Warehouse</div>
      </div>
    </div>
    </div>
  );
}

export default SidebarProfile;
