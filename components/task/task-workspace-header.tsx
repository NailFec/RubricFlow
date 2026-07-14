"use client"

import Link from "next/link"
import { HomeIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  taskStatusLabel,
  type GradingTask,
  type TaskStatus,
} from "@/lib/mock-data"
import { cn } from "@/lib/utils"

function StatusPill({
  status,
  graded,
  total,
}: {
  status: TaskStatus
  graded: number
  total: number
}) {
  const isCompleted = status === "completed"
  const isIdle = status === "idle"

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm tabular-nums text-muted-foreground">
        {graded}/{total}
      </span>
      <Badge
        variant={isCompleted ? "default" : isIdle ? "outline" : "secondary"}
        className={cn(
          !isCompleted &&
            !isIdle &&
            "bg-amber-500/15 text-amber-700 dark:text-amber-300"
        )}
      >
        <span
          className={cn(
            "size-1.5 rounded-full",
            isCompleted && "bg-primary-foreground",
            status === "grading" && "bg-amber-500",
            status === "pending" && "bg-destructive",
            isIdle && "bg-muted-foreground"
          )}
        />
        {isIdle && graded === 0 && total === 0
          ? "无任务"
          : status === "completed"
            ? "已结项"
            : taskStatusLabel[status]}
      </Badge>
    </div>
  )
}

export function TaskWorkspaceHeader({ task }: { task: GradingTask }) {
  return (
    <header className="flex flex-wrap items-center justify-between gap-3 border-b bg-background px-4 py-3">
      <div className="flex flex-wrap items-center gap-3">
        <Link
          href="/"
          aria-label="返回任务列表"
          className={cn(
            buttonVariants({ variant: "outline", size: "icon" }),
            "rounded-full"
          )}
        >
          <HomeIcon />
        </Link>
        <TabsList>
          <TabsTrigger value="requirements">批改要求</TabsTrigger>
          <TabsTrigger value="results">学生结果</TabsTrigger>
          <TabsTrigger value="summary">总结果</TabsTrigger>
        </TabsList>
      </div>
      <StatusPill
        status={task.status}
        graded={task.graded}
        total={task.total}
      />
    </header>
  )
}
