---
name: 寻求经验
description: 寻求某个方向的经验分享。
title: "[Ask]: "
labels: ["ask"]
assignees:
  - syy11cn
body:
  - type: dropdown
    id: category
    attributes:
      label: 问题分类
      description: 请选择你所要寻求经验的类别
      options:
        - 入学
        - 学生活动
        - 上课 / 选课
        - 考试
        - 竞赛
        - 实习
        - 实验室
        - 活水
        - 毕业工作
        - 国内深造
        - 国外深造
    validations:
      required: true
  - type: markdown
    id: description
    attributes:
      label: 问题描述
      description: 请描述你所遇到的困惑，以及想要寻求的经验。
    validations:
      required: true
  - type: checkboxes
    id: term
    attrbutes:
      label: 说明
      description: 提交 issue 请勾选本说明。
      options:
        - label: 我已阅读相关经验分享，且并没有找到我想了解的内容。
          required: true
---

# 寻求经验