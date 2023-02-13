import {dummyLoad} from './util'

// ここの throw は例外処理のものではなく Suspense 状態にするためのもの
// なので catch は置かない
let status:number|null
export const useDataView = (init:number|null=null) => {
  status = status ?? init
  if (status === null) {
    throw dummyLoad()
    .then(value => {
      status=value
      return value
    })
  }

  return status
}
