import {useDataView} from './useDataView'

const DataView = () => {
  const status = useDataView()
  return (<div>{status===1 ? 'Done' : 'Error'}</div>)
}

export default DataView
