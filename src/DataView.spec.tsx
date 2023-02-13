import { render, screen } from '@testing-library/react';
import DataView from './DataView';
import * as UDV from './useDataView';

const mockUseDataView = jest.spyOn(UDV, 'useDataView')

describe('ステータスによる表示の切り替えについて', () => {
  it('ステータス 1 なら完了になる', () => {
    mockUseDataView.mockReturnValue(1)
    render(<DataView />);

    const linkElement = screen.getByText('Done');
    expect(linkElement).toBeInTheDocument();
  });
  
  it('ステータス 2 ならエラーになる', () => {
    mockUseDataView.mockReturnValue(2)
    render(<DataView />);

    const linkElement = screen.getByText('Error');
    expect(linkElement).toBeInTheDocument();
  });
})
