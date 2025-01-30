// __tests__/InputField.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import InputField from '../../src/components/auth/InputField';
import React from 'react';

test('renders InputField with placeholder', () => {
    render(
        <InputField
            placeholder="Enter your name"
            value=""
            onChange={() => {}}
            icon={<svg data-testid="icon" />}
            type="text"
            name="username"
        />
    );
    const input = screen.getByPlaceholderText('Enter your name');
    expect(input).toBeInTheDocument();
});

test('calls onChange when typing', () => {
    const handleChange = jest.fn();
    render(
        <InputField
            placeholder="Type here"
            value=""
            onChange={handleChange}
            icon={<svg data-testid="icon" />}
            type="text"
            name="inputField"
        />
    );
    const input = screen.getByPlaceholderText('Type here');
    fireEvent.change(input, { target: { value: 'hello' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
});
