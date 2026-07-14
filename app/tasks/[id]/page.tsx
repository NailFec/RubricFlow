"use client"

import { use, useState } from "react"
import { notFound } from "next/navigation"

import { RequirementsPanel } from "@/components/task/requirements-panel"
import { StudentResultsPanel } from "@/components/task/student-results-panel"
import { SummaryPanel } from "@/components/task/summary-panel"
import { TaskWorkspaceHeader } from "@/components/task/task-workspace-header"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { getTaskById } from "@/lib/mock-data"

type TabValue = "requirements" | "results" | "summary"

export default function TaskPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = use(params)
  const task = getTaskById(id)
  const [tab, setTab] = useState<TabValue>(
    task?.status === "completed"
      ? "summary"
      : task?.status === "grading" || task?.status === "pending"
        ? "results"
        : "requirements"
  )

  if (!task) {
    notFound()
  }

  return (
    <div className="flex h-svh flex-col overflow-hidden bg-muted/30">
      <Tabs
        value={tab}
        onValueChange={(value) => setTab(value as TabValue)}
        className="flex min-h-0 flex-1 flex-col gap-0"
      >
        <TaskWorkspaceHeader task={task} />
        <TabsContent
          value="requirements"
          className="mt-0 min-h-0 flex-1 overflow-hidden data-hidden:hidden"
        >
          <div className="flex h-full min-h-0 flex-col">
            <RequirementsPanel />
          </div>
        </TabsContent>
        <TabsContent
          value="results"
          className="mt-0 min-h-0 flex-1 overflow-hidden data-hidden:hidden"
        >
          <div className="flex h-full min-h-0 flex-col">
            <StudentResultsPanel onOpenSummary={() => setTab("summary")} />
          </div>
        </TabsContent>
        <TabsContent
          value="summary"
          className="mt-0 min-h-0 flex-1 overflow-hidden data-hidden:hidden"
        >
          <div className="flex h-full min-h-0 flex-col">
            <SummaryPanel />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
