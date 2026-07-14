# Rubric Flow

## Introduction

> [!IMPORTANT]
> About **Rubric Flow**:
> 
> This web-based application enables teachers to use AI to grade students' English open-ended responses—such as translations, summaries, and essays—assigning scores and generating analytical reports for each student based on specific requirements. It is pre-configured to meet the standards of the Shanghai College Entrance Examination (Gaokao) while remaining compatible with curricula from other regions and grade levels.
> 
> Furthermore, teachers retain full control over the process, with features that allow them to adjust grading criteria, manually review and correct AI-generated grades, and issue specific revision requests to individual students (mirroring the interface used for computer-based grading in major exams). Teachers can also export comprehensive reports and grade spreadsheets, and even integrate the system with messaging platforms (such as DingTalk) to conveniently send personalized reports directly to each student.
> 
> 一个网页项目，可以让教师借助AI批改学生的英语主观题，包括翻译、概要写作、作文等。可以根据要求给出分数、为每位学生撰写分析报告。内置上海高考要求的适配，亦兼容其他地区和学龄。
> 
> 此外，教师也有修改评分标准、二次批改矫正、针对特定学生提出修改要求等功能，有完全的控制能力（即类似大型考试上机批改的页面）。教师也可以导出完整报告、成绩表格，甚至连接聊天软件（类似钉钉）方便地把学生报告一对一发给每个学生。

This repository contains the code for the frontend of the Rubric Flow website.

For the backend of the Rubric Flow website, see the [Rubric Flow Backend](https://github.com/nailfec/rubricflow-backend) repository (may not be public yet).

## Development

Built with Next.js, React, shadcn/ui with Base UI, and Tailwind CSS.

### Adding Components

To add new shadcn/ui components, run:

```bash
# npx shadcn@latest add button       # wrong
pnpm dlx shadcn@latest add button    # correct
```

This will place the ui components in the `components` directory.

> [!IMPORTANT]
> Always use `pnpm` (not npm, yarn, or bun) for this project.

To use a component:

```tsx
import { Button } from "@/components/ui/button";
```

### Development

Run the development server:

```bash
pnpm run dev
```

### Clearing Cache

It is fu*king crazy about Next.js when you change an image, but the website still renders the original image. Run this command to fix it:

```bash
rm -rf .next
```

### AI Usage Policy

AI tools are allowed to suggest or generate code in this repository. However, all code and designs must be reviewed by a human.

> [!IMPORTANT]
> Best practices when using AI:
> - Always let the AI read [`AGENTS.md`](AGENTS.md) first
> - Use the shadcn skill and shadcn MCP tools

_Cursor_ works especially well with our setup, including the shadcn skill and MCP tools.

### Contributing

This project does not accept pull requests currently. If you have any suggestions or feedback, please open an Issue, discuss it on the Discussions page, or contact me directly.
