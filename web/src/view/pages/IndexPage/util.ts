import lf from "localforage"
import pkgInfo from "../../../../package.json"

export function pad(num: number, n: number): string {
  //@ts-ignore
  return Array(n > num ? (n - ('' + num).length + 1) : 0).join(0) + num;
}
export function toReadable(_s: number): string {
  const h = Math.floor(_s / 60 / 60);
  const m = Math.floor(_s / 60 % 60);
  const s = Math.floor(_s % 60);
  return `${pad(h, 2)}:${pad(m, 2)}:${pad(s, 2)}`;
}

declare const CTIME: string
const ABOUT = `${pkgInfo.name} ${pkgInfo.version}
${pkgInfo.description}

编译时间        ${CTIME}
返回           刷新页面
叉号           彻底重载数据
点击导航栏七次   出现本提示

禁止传播本软件，注意安全，祝你有美好的一天（Have a nice day!)

更新内容：
修复了一系列问题
`
export function showAbout() {
  alert(ABOUT)
}
export function showAboutAfterUpdated() {
  const KEY = "version"
  setTimeout(async () => {
    if (await lf.getItem<string>(KEY) !== pkgInfo.version) {
      showAbout()
      lf.setItem(KEY, pkgInfo.version)
    }
  }, 1200)
}