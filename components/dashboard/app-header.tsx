import Link from "next/link"
import { PenLine } from "lucide-react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { buttonVariants } from "@/components/ui/button"
import { teacher } from "@/lib/mock-data"
import { cn } from "@/lib/utils"

export function AppHeader() {
  return (
    <header className="flex items-center justify-between border-b px-6 py-3">
      <div className="flex items-center gap-3">
        <Link
          href="/"
          aria-label="返回首页"
          className={cn(
            buttonVariants({ variant: "outline", size: "icon" }),
            "rounded-full"
          )}
        >
          <PenLine />
        </Link>
        <div className="flex items-baseline gap-2">
          <h1 className="text-lg font-semibold tracking-tight">
            英语主观题批改
          </h1>
          <span className="text-muted-foreground">×</span>
          <p className="text-sm text-muted-foreground">{teacher.school}</p>
        </div>
      </div>
      <div className="flex items-center gap-2 rounded-full border bg-card px-3 py-1.5">
        <Avatar size="sm">
          <AvatarFallback>{teacher.name.slice(0, 1)}</AvatarFallback>
        </Avatar>
        <span className="text-sm font-medium">{teacher.name}</span>
      </div>
    </header>
  )
}
