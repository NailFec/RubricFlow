export type TaskStatus = "grading" | "completed" | "pending" | "idle"

export type TaskType = "作文" | "续写写作" | "翻译" | "概要写作"

export type GradingTask = {
  id: string
  date: string
  title: string
  type: TaskType
  graded: number
  total: number
  classes: string[]
  status: TaskStatus
}

export type StudentStatus =
  | "done"
  | "grading"
  | "waiting"
  | "skipped"

export type StudentResult = {
  id: string
  paperId: string
  name: string
  studentNo: string
  status: StudentStatus
  score?: number
  contentScore?: number
  languageScore?: number
  classId: string
  revisionNotes?: string[]
  aiReport?: string
}

export type TeacherProfile = {
  name: string
  school: string
  plan: string
  usagePercent: number
}

export const teacher: TeacherProfile = {
  name: "王老师",
  school: "上海市 XX 中学",
  plan: "PRO",
  usagePercent: 72,
}

export const gradingTasks: GradingTask[] = [
  {
    id: "923",
    date: "2026/10/31",
    title: "高三英语作文：科技与生活",
    type: "作文",
    graded: 3,
    total: 30,
    classes: ["7", "8"],
    status: "grading",
  },
  {
    id: "956",
    date: "2026/10/28",
    title: "读后续写：森林冒险",
    type: "续写写作",
    graded: 30,
    total: 30,
    classes: ["7", "8"],
    status: "completed",
  },
  {
    id: "962",
    date: "2026/10/25",
    title: "中译英：传统文化",
    type: "翻译",
    graded: 15,
    total: 15,
    classes: ["7"],
    status: "pending",
  },
  {
    id: "967",
    date: "2026/10/20",
    title: "概要写作：环境保护",
    type: "概要写作",
    graded: 15,
    total: 15,
    classes: ["7"],
    status: "completed",
  },
  {
    id: "971",
    date: "2026/10/15",
    title: "应用文写作：邀请信",
    type: "作文",
    graded: 0,
    total: 28,
    classes: ["8"],
    status: "idle",
  },
]

export const studentRoster = [
  { id: "s1", name: "张三", studentNo: "20230701", classId: "7" },
  { id: "s2", name: "李四", studentNo: "20230702", classId: "7" },
  { id: "s3", name: "王五", studentNo: "20230703", classId: "7" },
  { id: "s4", name: "赵六", studentNo: "20230801", classId: "8" },
  { id: "s5", name: "钱七", studentNo: "20230802", classId: "8" },
  { id: "s6", name: "孙八", studentNo: "20230803", classId: "8" },
]

export const studentResults: StudentResult[] = [
  {
    id: "s1",
    paperId: "P1",
    name: "张三",
    studentNo: "20230701",
    status: "done",
    score: 5,
    contentScore: 2,
    languageScore: 3,
    classId: "7",
    revisionNotes: [
      "内容评分少 1 分，因为“没有回答”",
      "还有语法错误",
    ],
    aiReport: `## 评分总览

| 维度 | 得分 | 满分 |
|------|------|------|
| 内容 | 2 | 5 |
| 语言 | 3 | 5 |
| **合计** | **5** | **10** |

## 内容分析

学生基本理解了题目要求，但对核心论点展开不足。第二段缺少具体例证，导致内容分扣分。

## 语言分析

句式相对简单，偶有主谓一致错误。词汇多样性一般，建议加强高级词汇与复合句训练。

## 改进建议

1. 补充与主题直接相关的例证
2. 检查第三人称单数与时态一致性
3. 尝试使用连接词增强段落连贯性`,
  },
  {
    id: "s2",
    paperId: "P2",
    name: "李四",
    studentNo: "20230702",
    status: "done",
    score: 9,
    contentScore: 4,
    languageScore: 5,
    classId: "7",
    revisionNotes: ["整体完成度高，可微调结尾升华"],
    aiReport: `## 评分总览

| 维度 | 得分 | 满分 |
|------|------|------|
| 内容 | 4 | 5 |
| 语言 | 5 | 5 |
| **合计** | **9** | **10** |

## 内容分析

论点清晰，结构完整，例证贴切。结尾略显仓促，可再加强升华。

## 语言分析

语言流畅，句式多样，用词准确，几乎无明显语法错误。`,
  },
  {
    id: "s3",
    paperId: "P3",
    name: "王五",
    studentNo: "20230703",
    status: "grading",
    classId: "7",
  },
  {
    id: "s4",
    paperId: "P4",
    name: "赵六",
    studentNo: "20230801",
    status: "waiting",
    classId: "8",
  },
  {
    id: "s5",
    paperId: "P5",
    name: "钱七",
    studentNo: "20230802",
    status: "waiting",
    classId: "8",
  },
  {
    id: "s6",
    paperId: "P6",
    name: "孙八",
    studentNo: "20230803",
    status: "skipped",
    classId: "8",
  },
]

export const summaryResults: StudentResult[] = [
  {
    id: "1",
    paperId: "P1",
    name: "张三",
    studentNo: "20210701",
    status: "done",
    score: 9,
    contentScore: 3,
    languageScore: 6,
    classId: "7",
  },
  {
    id: "2",
    paperId: "P2",
    name: "李四",
    studentNo: "20210702",
    status: "done",
    score: 8,
    contentScore: 4,
    languageScore: 4,
    classId: "7",
  },
  {
    id: "3",
    paperId: "P3",
    name: "王五",
    studentNo: "20210703",
    status: "done",
    score: 7,
    contentScore: 3,
    languageScore: 4,
    classId: "7",
  },
  {
    id: "4",
    paperId: "P4",
    name: "赵六",
    studentNo: "20210801",
    status: "done",
    score: 10,
    contentScore: 5,
    languageScore: 5,
    classId: "8",
  },
  {
    id: "5",
    paperId: "P5",
    name: "钱七",
    studentNo: "20210802",
    status: "done",
    score: 6,
    contentScore: 2,
    languageScore: 4,
    classId: "8",
  },
]

export function getTaskById(id: string) {
  return gradingTasks.find((task) => task.id === id)
}

export const taskStatusLabel: Record<TaskStatus, string> = {
  grading: "批改中",
  completed: "已完成",
  pending: "待补",
  idle: "未开始",
}

export const studentStatusLabel: Record<StudentStatus, string> = {
  done: "已完成",
  grading: "批改中",
  waiting: "等待中",
  skipped: "不批改",
}
