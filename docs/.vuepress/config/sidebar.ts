import * as path from 'path'
import * as fs from 'fs'

const docsPath = path.join(__dirname, "../../")

function getFilesIn(base: string): string[] {
  const files = fs.readdirSync(docsPath + base, {
    withFileTypes: true
  })
  const result: string[] = [`${base}README.md`]

  files.forEach((filepath) => {
    if(filepath.isDirectory() || filepath.name === 'README.md')
      return

    result.push(base + filepath.name)
  })

  return result
}

export const sidebar = {
  '/introduction/': [
    ...getFilesIn('/introduction/')
  ],
  '/survive/': [
    ...getFilesIn('/survive/'),
    { text: '入学', children: getFilesIn('/survive/gamestart/') },
    { text: '学生活动', children: getFilesIn('/survive/activity/') },
    { text: '上课 / 选课', children: getFilesIn('/survive/class/') },
    { text: '考试', children: getFilesIn('/survive/exam/') },
    { text: '竞赛', children: getFilesIn('/survive/contest/') },
    { text: '实验室', children: getFilesIn('/survive/research/') },
    { text: '实习', children: getFilesIn('/survive/intern/') },
    { text: '活水', children: getFilesIn('/survive/transfer/') },
  ],
  '/run/': [
    ...getFilesIn('/run/'),
    { text: '深造', children: [
      ...getFilesIn('/run/study/'),
      { text: '国内', children: getFilesIn('/run/study/internal/') },
      { text: '国外', children: getFilesIn('/run/study/overseas/') }
    ] },
    { text: '就业', children: [
      ...getFilesIn('/run/work/'),
      { text: '铁饭碗', children: getFilesIn('/run/work/ironbowl/') },
      { text: '私企', children: getFilesIn('/run/work/company/') },
      { text: '灵活就业', children: getFilesIn('/run/work/other/') }
    ] }
  ]
}
