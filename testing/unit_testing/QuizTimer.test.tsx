// __tests__/QuizTimer.test.tsx

import { render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import QuizTimer from '../../src/components/quiz/QuizTimer';
import React from 'react';
import { act } from "react";

jest.useFakeTimers();

test("renders and counts down correctly", () => {
  const onTimeUp = jest.fn();
  render(<QuizTimer duration={5} onTimeUp={onTimeUp} />);

  // Verify initial render by selecting the specific span containing the timer
  expect(screen.getByText("00:05", { selector: "span" })).toBeInTheDocument();

  // Fast-forward 3 seconds
  act(() => {
    jest.advanceTimersByTime(3000);
  });
  expect(screen.getByText("00:02", { selector: "span" })).toBeInTheDocument();
  expect(onTimeUp).not.toHaveBeenCalled();

  // Fast-forward the remaining time
  act(() => {
    jest.advanceTimersByTime(2000);
  });
  expect(screen.getByText("00:00", { selector: "span" })).toBeInTheDocument();
  expect(onTimeUp).toHaveBeenCalledTimes(1);
});
