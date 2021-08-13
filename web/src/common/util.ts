import lf from "localforage"
import pkgInfo from "../../package.json"

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
const ABOUT = `请务必详细阅读！
HAVE A NICE DAY！ ${pkgInfo.version}
点击二维码可重新显示本内容

更新内容：
* 修复BUG
* 增加图书馆进出
* 不用每次都设置重新头像了

使用说明书：
一句话，屏幕上到处点点，就能发现各种惊喜啦！这个软件细节满满哦！

禁止传播本软件，注意安全，祝你有美好的一天（Have a nice day!)
`
export function showAbout() {
  alert(ABOUT)
}
export function showAboutAfterUpdated() {
  const KEY = "version"
  setTimeout(async () => {
    if (await lf.getItem<string>(KEY) !== pkgInfo.version) {
      showAbout()
      showAbout()
      showAbout()
      lf.setItem(KEY, pkgInfo.version)
    }
  }, 1200)
}