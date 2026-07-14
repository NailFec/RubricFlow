import { AppHeader } from "@/components/dashboard/app-header"
import { DashboardToolbar } from "@/components/dashboard/dashboard-toolbar"
import { TaskTable } from "@/components/dashboard/task-table"

export default function Page() {
  return (
    <div className="flex min-h-svh flex-col bg-muted/30">
      <AppHeader />
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-6 px-6 py-6">
        <DashboardToolbar />
        <TaskTable />
      </main>
    </div>
  )
}
