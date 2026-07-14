import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function NotFound() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-4 p-6">
      <h1 className="text-lg font-semibold">未找到该批改任务</h1>
      <p className="text-sm text-muted-foreground">请返回任务列表重新选择。</p>
      <Link href="/" className={cn(buttonVariants())}>
        返回首页
      </Link>
    </div>
  )
}
