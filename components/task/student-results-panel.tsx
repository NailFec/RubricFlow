"use client"

import {
  CheckCircle2Icon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CircleXIcon,
  ClockIcon,
  LoaderCircleIcon,
} from "lucide-react"
import { useState } from "react"
import Markdown from "react-markdown"
import remarkGfm from "remark-gfm"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  studentResults,
  studentStatusLabel,
  type StudentResult,
  type StudentStatus,
} from "@/lib/mock-data"
import { cn } from "@/lib/utils"

function StatusIcon({ status }: { status: StudentStatus }) {
  if (status === "done") {
    return (
      <CheckCircle2Icon className="size-4 text-emerald-600 dark:text-emerald-400" />
    )
  }
  if (status === "grading") {
    return <LoaderCircleIcon className="size-4 animate-spin text-primary" />
  }
  if (status === "skipped") {
    return <CircleXIcon className="size-4 text-destructive" />
  }
  return <ClockIcon className="size-4 text-muted-foreground" />
}

function statusText(student: StudentResult) {
  if (student.status === "done" && student.score != null) {
    return `${student.score} 分`
  }
  return studentStatusLabel[student.status]
}

export function StudentResultsPanel({
  onOpenSummary,
}: {
  onOpenSummary?: () => void
}) {
  const [selectedId, setSelectedId] = useState(studentResults[0]?.id)
  const selected =
    studentResults.find((student) => student.id === selectedId) ??
    studentResults[0]

  return (
    <div className="grid min-h-0 flex-1 gap-4 p-4 lg:grid-cols-[240px_1fr_320px]">
      {/* Left: papers */}
      <aside className="flex min-h-0 flex-col gap-3 rounded-xl border bg-card p-3">
        <div className="min-h-0 flex-1 overflow-y-auto">
          <ul className="flex flex-col gap-1 pr-2">
            {studentResults.map((student) => (
              <li key={student.id}>
                <button
                  type="button"
                  onClick={() => setSelectedId(student.id)}
                  className={cn(
                    "flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-left text-sm transition-colors",
                    selectedId === student.id
                      ? "bg-muted font-medium"
                      : "hover:bg-muted/60"
                  )}
                >
                  <span className="w-7 shrink-0 tabular-nums text-muted-foreground">
                    {student.paperId}
                  </span>
                  <StatusIcon status={student.status} />
                  <span className="min-w-0 flex-1 truncate">{student.name}</span>
                  <span className="shrink-0 text-xs text-muted-foreground">
                    {statusText(student)}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
        <Separator />
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon-sm" aria-label="上一页">
            <ChevronLeftIcon />
          </Button>
          <Button variant="outline" size="icon-sm" aria-label="下一页">
            <ChevronRightIcon />
          </Button>
          <Button
            variant="secondary"
            size="sm"
            className="ml-auto"
            onClick={onOpenSummary}
          >
            总结果
          </Button>
        </div>
      </aside>

      {/* Center: AI report */}
      <section className="min-h-0 overflow-hidden rounded-xl border bg-card">
        <div className="h-full overflow-y-auto">
          <div className="p-6">
            {selected?.aiReport ? (
              <div className="typeset typeset-docs max-w-[37em]">
                <p className="not-typeset mb-4 text-xs tracking-wide text-muted-foreground uppercase">
                  AI 批改报告
                </p>
                <Markdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    table: ({ children }) => (
                      <div className="typeset-scroll">
                        <table>{children}</table>
                      </div>
                    ),
                  }}
                >
                  {selected.aiReport}
                </Markdown>
              </div>
            ) : (
              <div className="flex h-64 flex-col items-center justify-center gap-2 text-muted-foreground">
                <LoaderCircleIcon className="size-6 animate-spin" />
                <p className="text-sm">
                  {selected?.status === "grading"
                    ? "正在批改中…"
                    : "暂无 AI 输出"}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Right: paper + revision */}
      <aside className="flex min-h-0 flex-col gap-4">
        <div className="flex items-center justify-between rounded-xl border bg-card px-4 py-3">
          <div>
            <p className="font-medium">
              {selected?.name} · {selected?.studentNo}
            </p>
            <p className="text-xs text-muted-foreground">
              {selected ? statusText(selected) : ""}
            </p>
          </div>
          {selected?.status === "done" ? (
            <CheckCircle2Icon className="size-5 text-emerald-600 dark:text-emerald-400" />
          ) : (
            <StatusIcon status={selected?.status ?? "waiting"} />
          )}
        </div>

        <div className="flex min-h-48 flex-1 items-center justify-center rounded-xl border border-dashed bg-muted/30 text-sm text-muted-foreground">
          学生原卷
        </div>

        <div className="flex flex-col gap-3 rounded-xl border bg-card p-4">
          <h2 className="font-medium">修改要求</h2>
          {selected?.revisionNotes?.length ? (
            <ol className="flex flex-col gap-2 text-sm leading-relaxed">
              {selected.revisionNotes.map((note, index) => (
                <li key={note} className="flex gap-2">
                  <span className="shrink-0 text-muted-foreground">
                    {index + 1}.
                  </span>
                  <span>{note}</span>
                </li>
              ))}
            </ol>
          ) : (
            <p className="text-sm text-muted-foreground">暂无修改要求</p>
          )}
          <Button className="self-end" size="sm">
            修改
          </Button>
        </div>
      </aside>
    </div>
  )
}
