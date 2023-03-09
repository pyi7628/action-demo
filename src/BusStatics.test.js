import { render, screen } from '@testing-library/react';
import BusStatics from './BusStatics';

test('전일보다 탑승 승객 수가 줄었을 때, 승객추이는 적절한 음수값이 나와야 한다.', () => {
  render(<BusStatics curPassengerCount={100} prevPassengerCount={120}/>);
  const calcElement = screen.getByLabelText(/전일대비 승객추이/);
  expect(calcElement.innerHTML).toBe('-20'); // 100 - 120
});
