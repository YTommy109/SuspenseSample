// この部分を通信処理に置き換える
// その際、通信上のエラー処理をここで catch して例外を上位へ伝搬させないように
// resolve にステータスを入れるようにする
export const dummyLoad = ():Promise<number> => {
  return new Promise(resolve => setTimeout(() => {
    resolve(1)
  }, 1000))
}
