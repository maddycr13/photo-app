import { render, screen } from '@testing-library/react';
import { useDebounce } from './useDebounce';
import { act } from '@testing-library/react';

jest.useFakeTimers();

function TestComponent({ value, delay }: { value: string; delay: number }) {
  const debouncedValue = useDebounce(value, delay);
  return <div data-testid="debounced">{debouncedValue}</div>;
}

describe('useDebounce', () => {
  it('should update the debounced value after the specified delay', () => {
    const { rerender } = render(<TestComponent value="initial" delay={500} />);

    // Initial value should be 'initial'
    expect(screen.getByTestId('debounced').textContent).toBe('initial');

    // Update value and advance timers
    rerender(<TestComponent value="updated" delay={500} />);
    act(() => {
      jest.advanceTimersByTime(500);
    });

    // The debounced value should now be 'updated'
    expect(screen.getByTestId('debounced').textContent).toBe('updated');
  });

  it('should not update immediately if delay has not passed', () => {
    const { rerender } = render(<TestComponent value="initial" delay={500} />);

    // Update value but don't advance the timer
    rerender(<TestComponent value="updated" delay={500} />);
    expect(screen.getByTestId('debounced').textContent).toBe('initial'); // Still 'initial' since delay hasn't passed

    // Advance timer and expect the value to update
    act(() => {
      jest.advanceTimersByTime(500);
    });
    expect(screen.getByTestId('debounced').textContent).toBe('updated');
  });
});
