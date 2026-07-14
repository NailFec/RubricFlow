import { PlusIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@/components/ui/progress"
import { teacher } from "@/lib/mock-data"

export function DashboardToolbar() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <Button size="lg">
        <PlusIcon data-icon="inline-start" />
        新建批改
      </Button>

      <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-2 rounded-lg border bg-card px-3 py-2">
          <span className="text-xs text-muted-foreground">类型</span>
          <Badge>{teacher.plan}</Badge>
        </div>
        <div className="min-w-56 flex-1 rounded-lg border bg-card px-3 py-2 sm:min-w-72">
          <Progress value={teacher.usagePercent}>
            <ProgressLabel>用量（每月）</ProgressLabel>
            <ProgressValue />
          </Progress>
        </div>
      </div>
    </div>
  )
}
