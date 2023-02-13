import {useDataView} from './useDataView'

describe('useDataView について', () => {
  it('初期は Promise がスローされる', () => {
    expect(() => useDataView()).toThrow(Promise)
  })
  it('スローされた Promise を解決する', async () => {
    try {
      useDataView()
    } catch (o) {
      await expect(o).resolves.toBe(1)
    }
  })
  it('既定値があれば、既定値が戻る', () => {
    expect(useDataView(1)).toBe(1)
  })
})