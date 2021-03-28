// import RandomName from "chinese-random-name"
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
