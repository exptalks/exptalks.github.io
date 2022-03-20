# 如何贡献

## 文件命名规范

文件命名格式要求：使用文档标题前 n (建议 n >= 4) 个字的全拼，使用小写，不同单字拼音之间使用 '-' 分隔，忽略文档标题中的空格。

例如：标题为“我的经验分享 我的经验”的文档，应当命名为 `wo-de-jing-yan-fen-xiang-wo-de.md`。

:::tip
请遵守文件命名规范，这将有利于项目的长期维护。
:::

## 文件编写规范

- 请使用 **一级标题** (`#`) 写文档大标题；
- 请使用 **二级标题** (`##`) 写文章内的一级标题，以此类推。

## 提供经验

如果你在某些方向有一定的经验想要分享，欢迎投稿。

如果你对 Git 操作不熟悉，可以直接邮件联系 [syy11cn@outlook.com](mailto:syy11cn@outlook.com)，说明想要分享经验的方向。后续编写好文档后，将由我们代为添加至仓库。

如果你对 Git 操作熟悉，请按照以下步骤进行操作：

- 了解[目录结构](./structure.md)；
- 将[本仓库](https://github.com/exptalks/exptalks.github.io) fork 到你的 GitHub 账号下；
- 克隆你所 fork 的仓库；

```bash
git clone <path_to_your_forked_repo>
```

- 在本地仓库中设置 upstream 地址；

```bash
git remote add upstream git@github.com:exptalks/exptalks.github.io.git
```

- 撰写你的经验，并进行 commit；

```bash
git add .
git commit -m "feat: <your_passage_name>"
```

- 确认提交之前，先和上游仓库同步；

```bash
git pull upstream main --rebase
```

- 将你的 commit push 到远程仓库；

```bash
git push
```

- 提交 PR，等待 review 并合入。

## 寻求经验

如果你在某个方向需要寻求有经验者的帮助，且没有相关的人脉，我们乐于尽己所能，帮你搜集了解相关经验。

如果你拥有 GitHub 账号，可以前往 [issue 页面](https://github.com/exptalks/exptalks.github.io/issues) 提寻求经验的 issue。

如果你没有 GitHub 账号，或无法访问 GitHub，也可以将你的问题发送至邮箱 [syy11cn@outlook.com]。

:::tip 提示
为防止垃圾邮件骚扰，请设置邮件标题为“exptalks.ask xx 问题简述”，并在正文中描述你所需要的经验之谈。如果我们有能力帮忙，你将在文章发布后收到包含文章链接的邮件回复。
:::
