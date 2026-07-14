"use client"

import Link from "next/link"
import {
  CheckCircle2Icon,
  CircleXIcon,
  EyeIcon,
  LoaderCircleIcon,
  MinusCircleIcon,
  Trash2Icon,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  gradingTasks,
  taskStatusLabel,
  type TaskStatus,
} from "@/lib/mock-data"
import { cn } from "@/lib/utils"

function StatusBadge({ status }: { status: TaskStatus }) {
  const label = taskStatusLabel[status]

  if (status === "completed") {
    return (
      <span className="inline-flex items-center gap-1.5 text-sm text-foreground">
        <CheckCircle2Icon className="size-4 text-emerald-600 dark:text-emerald-400" />
        {label}
      </span>
    )
  }

  if (status === "grading") {
    return (
      <span className="inline-flex items-center gap-1.5 text-sm text-foreground">
        <LoaderCircleIcon className="size-4 animate-spin text-primary" />
        {label}
      </span>
    )
  }

  if (status === "pending") {
    return (
      <span className="inline-flex items-center gap-1.5 text-sm text-foreground">
        <CircleXIcon className="size-4 text-destructive" />
        {label}
      </span>
    )
  }

  return (
    <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
      <MinusCircleIcon className="size-4" />
      {label}
    </span>
  )
}

export function TaskTable() {
  return (
    <div className="overflow-hidden rounded-xl border bg-card">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-20">ID</TableHead>
            <TableHead className="w-28">日期</TableHead>
            <TableHead>标题</TableHead>
            <TableHead className="w-28">类型</TableHead>
            <TableHead className="w-24">数量</TableHead>
            <TableHead className="w-28">班级</TableHead>
            <TableHead className="w-28">状态</TableHead>
            <TableHead className="w-36 text-right">操作</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {gradingTasks.map((task) => (
            <TableRow key={task.id}>
              <TableCell className="font-medium tabular-nums">
                {task.id}
              </TableCell>
              <TableCell className="tabular-nums text-muted-foreground">
                {task.date}
              </TableCell>
              <TableCell className="max-w-xs truncate font-medium">
                {task.title}
              </TableCell>
              <TableCell>
                <Badge variant="secondary">{task.type}</Badge>
              </TableCell>
              <TableCell className="tabular-nums">
                {task.graded}/{task.total}
              </TableCell>
              <TableCell>
                <div className="flex gap-1">
                  {task.classes.map((cls) => (
                    <Badge key={cls} variant="outline" className="rounded-full">
                      {cls}
                    </Badge>
                  ))}
                </div>
              </TableCell>
              <TableCell>
                <StatusBadge status={task.status} />
              </TableCell>
              <TableCell className="text-right">
                <div className="inline-flex gap-1">
                  <Link
                    href={`/tasks/${task.id}`}
                    className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
                  >
                    <EyeIcon data-icon="inline-start" />
                    查看
                  </Link>
                  <Button variant="ghost" size="icon-sm" aria-label="删除">
                    <Trash2Icon />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
