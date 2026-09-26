import { BarChart3 } from "lucide-react"

function SidebarHeader() {
  return (
    <div className="flex gap-3 h-16 items-center px-5 border-b border-border">
        <div className="flex justify-center items-center  rounded-lg size-8 bg-[#e85d31] text-white shadow-sm">
            <BarChart3 className="size-4" strokeWidth={2.25} />
        </div>

        <div className='leading-tight'>
            <p className='text-sm font-semibold text-foreground'>StockFlow</p>
            <p className='text-[11px] text-muted-foreground'>Distribution System</p>
        </div>
    </div>
  )
}

export default SidebarHeader