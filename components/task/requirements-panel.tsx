"use client"

import { ImageIcon, SparklesIcon, UploadIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { studentRoster } from "@/lib/mock-data"

const classItems = [
  { label: "全部班级", value: "all" },
  { label: "7 班", value: "7" },
  { label: "8 班", value: "8" },
]

const typeItems = [
  { label: "作文", value: "essay" },
  { label: "续写写作", value: "continuation" },
  { label: "翻译", value: "translation" },
  { label: "概要写作", value: "summary" },
]

const templateItems = [
  { label: "模板：主旨 + 3 要求", value: "theme-3" },
  { label: "模板：上海高考作文", value: "sh-gaokao" },
  { label: "模板：内容 + 语言", value: "content-lang" },
]

const modelItems = [
  { label: "GPT-5.2", value: "gpt-5.2" },
  { label: "Claude Opus", value: "claude-opus" },
  { label: "DeepSeek V3", value: "deepseek" },
]

export function RequirementsPanel() {
  return (
    <div className="grid min-h-0 flex-1 gap-4 p-4 lg:grid-cols-[220px_1fr_280px]">
      {/* Left: student list */}
      <aside className="flex min-h-0 flex-col gap-3 rounded-xl border bg-card p-3">
        <Select items={classItems} defaultValue="all">
          <SelectTrigger className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {classItems.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <div className="min-h-0 flex-1 overflow-y-auto">
          <ul className="flex flex-col gap-1 pr-2">
            {studentRoster.map((student) => (
              <li key={student.id}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between rounded-lg px-2.5 py-2 text-left text-sm hover:bg-muted"
                >
                  <span className="font-medium">{student.name}</span>
                  <span className="tabular-nums text-muted-foreground">
                    {student.studentNo}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Center: content + criteria */}
      <section className="flex min-h-0 flex-col gap-4">
        <div className="flex flex-col gap-3 rounded-xl border bg-card p-4">
          <Select items={typeItems} defaultValue="essay">
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {typeItems.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>

          <div className="grid gap-3 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <Label>原文</Label>
                <Button variant="outline" size="sm">
                  <ImageIcon data-icon="inline-start" />
                  从图片导入
                </Button>
              </div>
              <Textarea
                className="min-h-36 resize-none"
                placeholder="粘贴或导入题目原文…"
                defaultValue="假设你是李华。你校正在开展“科技改变生活”主题征文活动，请你写一篇短文投稿。"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <Label>参考答案</Label>
                <Button variant="outline" size="sm">
                  <SparklesIcon data-icon="inline-start" />
                  自动生成
                </Button>
              </div>
              <Textarea
                className="min-h-36 resize-none"
                placeholder="参考答案将显示在这里…"
                defaultValue="Technology has transformed our daily lives in countless ways…"
              />
            </div>
          </div>
        </div>

        <div className="flex min-h-0 flex-1 flex-col gap-3 rounded-xl border bg-card p-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="font-medium">评分标准</h2>
            <div className="flex flex-wrap items-center gap-2">
              <Select items={templateItems} defaultValue="theme-3">
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {templateItems.map((item) => (
                      <SelectItem key={item.value} value={item.value}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Button variant="outline" size="sm">
                <SparklesIcon data-icon="inline-start" />
                自动生成
              </Button>
            </div>
          </div>
          <Textarea
            className="min-h-48 flex-1 resize-none"
            defaultValue={`1. 主旨明确，紧扣“科技与生活”主题（0–4 分）
2. 结构完整，段落衔接自然（0–3 分）
3. 语言准确，句式多样（0–3 分）`}
          />
        </div>
      </section>

      {/* Right: import + grade */}
      <aside className="flex min-h-0 flex-col gap-4">
        <div className="flex flex-col gap-3 rounded-xl border bg-card p-4">
          <div className="flex items-center gap-2">
            <Checkbox id="has-scores" />
            <Label htmlFor="has-scores">已有分数</Label>
          </div>
          <div className="flex flex-col gap-2">
            <Button variant="outline" className="w-full justify-start">
              从数据库导入
            </Button>
            <Button variant="outline" className="w-full justify-start">
              导入 xlsx
            </Button>
          </div>
        </div>

        <div className="flex min-h-0 flex-1 flex-col gap-3 rounded-xl border bg-card p-4">
          <h2 className="font-medium">学生试卷</h2>
          <div className="flex flex-col gap-2">
            <Button variant="outline" size="sm" className="justify-start">
              <UploadIcon data-icon="inline-start" />
              上传 PDF
            </Button>
            <Button variant="outline" size="sm" className="justify-start">
              <ImageIcon data-icon="inline-start" />
              上传图片
            </Button>
            <Button variant="outline" size="sm" className="justify-start">
              从数据库导入
            </Button>
          </div>
          <Separator />
          <div className="grid grid-cols-3 gap-2">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="flex aspect-[3/4] items-center justify-center rounded-md border border-dashed bg-muted/40 text-center text-[10px] text-muted-foreground"
              >
                图片展示
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 rounded-xl border bg-card p-4">
          <Select items={modelItems} defaultValue="gpt-5.2">
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {modelItems.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <div className="flex flex-col gap-2">
            <Button variant="secondary" className="w-full">
              批改前 5
            </Button>
            <Button className="w-full">批改所有</Button>
          </div>
        </div>
      </aside>
    </div>
  )
}
