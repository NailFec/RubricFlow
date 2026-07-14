"use client"

import {
  FileArchiveIcon,
  FileSpreadsheetIcon,
  FileTextIcon,
  MessageSquareIcon,
  PencilIcon,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { summaryResults } from "@/lib/mock-data"

export function SummaryPanel() {
  return (
    <div className="grid min-h-0 flex-1 gap-4 p-4 lg:grid-cols-[1fr_220px]">
      <div className="overflow-hidden rounded-xl border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-16">ID</TableHead>
              <TableHead>姓名</TableHead>
              <TableHead>学号</TableHead>
              <TableHead className="w-20">成绩</TableHead>
              <TableHead className="w-24">内容分</TableHead>
              <TableHead className="w-24">语言分</TableHead>
              <TableHead className="text-right">操作</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {summaryResults.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="tabular-nums">{row.id}</TableCell>
                <TableCell className="font-medium">{row.name}</TableCell>
                <TableCell className="tabular-nums text-muted-foreground">
                  {row.studentNo}
                </TableCell>
                <TableCell className="tabular-nums font-medium">
                  {row.score}
                </TableCell>
                <TableCell className="tabular-nums">{row.contentScore}</TableCell>
                <TableCell className="tabular-nums">
                  {row.languageScore}
                </TableCell>
                <TableCell className="text-right">
                  <div className="inline-flex flex-wrap justify-end gap-1">
                    <Button variant="outline" size="sm">
                      <PencilIcon data-icon="inline-start" />
                      修改结果
                    </Button>
                    <Button variant="outline" size="sm">
                      <FileTextIcon data-icon="inline-start" />
                      导出 PDF
                    </Button>
                    <Button variant="outline" size="sm">
                      <MessageSquareIcon data-icon="inline-start" />
                      发送钉钉
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <aside className="flex flex-col gap-3">
        <Button variant="outline" className="w-full justify-start">
          <FileArchiveIcon data-icon="inline-start" />
          打包 PDF
        </Button>
        <Button variant="outline" className="w-full justify-start">
          <FileTextIcon data-icon="inline-start" />
          分别导出 PDF
        </Button>
        <Button variant="outline" className="w-full justify-start">
          <FileSpreadsheetIcon data-icon="inline-start" />
          导出成绩表
        </Button>
        <div className="mt-auto">
          <Button className="w-full">
            <MessageSquareIcon data-icon="inline-start" />
            发送所有人钉钉
          </Button>
        </div>
      </aside>
    </div>
  )
}
