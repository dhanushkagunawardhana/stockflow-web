import {
  BarChart3,
  ClipboardList,
  PackageCheck,
  RotateCcw,
} from "lucide-react";

export const sidebarNav = [
  { label: "Stock Summary", icon: BarChart3 },
  { label: "Stock Requests", icon: ClipboardList, badge: 3 },
  { label: "Distribution Runs", icon: PackageCheck },
  { label: "Return Approvals", icon: RotateCcw, badge: 2 },
];
