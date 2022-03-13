# 如何贡献

## 提供经验

如果你在某些方向有一定的经验想要分享，欢迎投稿。

如果你对 Git 操作不熟悉，可以直接邮件联系 [syy11cn@outlook.com](mailto:syy11cn@outlook.com)，说明想要分享经验的方向。后续编写好文档后，将由我们代为添加至仓库。

如果你对 Git 操作熟悉，请按照以下步骤进行操作：

- 阅读[目录结构](./structure.md)；
- 将[本仓库](https://github.com/exptalks/exptalks.github.io) fork 到你的 GitHub 账号下；
- 克隆你所 fork 的仓库；

```bash
git clone <path_to_your_forked_repo>
```

- 在本地仓库中设置 upstream 地址；

```bash
git remote add upstream git@github.com:exptalks/exptalks.github.io.git
```

- 新建一个分支，撰写你的经验；

```bash
git checkout -b <your_new_branch_name>
```

- 确认提交之前，先和上游仓库同步；

```bash
git pull upstream main --rebase
```

- 合并你的 commit 记录，操作方法请参考[这篇博客](https://liuxin.net.cn/posts/138);
- 将你的 commit push 到远程仓库；

```bash
# 首次 push
git push -u origin <your_branch_name>
# 非首次 push
git push
```

- 提交 PR，等待 review 并合入。

## 寻求经验

如果你在某个方向需要寻求有经验者的帮助，且没有相关的人脉，我们乐于尽己所能，帮你搜集了解相关经验。

如果你拥有 GitHub 账号，可以前往 [issue 页面](https://github.com/exptalks/exptalks.github.io/issues) 提寻求经验的 issue。

如果你没有 GitHub 账号，或无法访问 GitHub，也可以将你的问题发送至邮箱 [syy11cn@outlook.com]。

:::tip
为防止垃圾邮件骚扰，请设置邮件标题为“exptalks.ask xx问题简述”，并在正文中描述你所需要的经验之谈。如果我们有能力帮忙，你将在文章发布后收到包含文章链接的邮件回复。
:::
