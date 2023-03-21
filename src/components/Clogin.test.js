/**
 * skenario testing
 *
 * - LoginInput component
 *   - should handle Email typing correctly
 *   - should handle password typing correctly
 *   - should call login function when login button is clicked
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Clogin from './Clogin';
import '@testing-library/jest-dom';

describe('LoginInput component', () => {
  it('should handle Email typing correctly', async () => {
    // Arrange
    render(<Clogin oncForm={() => {}} />);
    const email = await screen.getByPlaceholderText('Email');
    // // Action
    // await userEvent.type(usernameInput, { target: { value: 'bgs@bgs.com' } });
    await userEvent.type(email, 'bgs@bgs.com');

    // Assert
    expect(email).toHaveValue('bgs@bgs.com');
  });
  it('should handle password typing correctly', async () => {
    // Arrange
    render(<Clogin oncForm={() => {}} />);
    const pass = await screen.getByPlaceholderText('password');
    // // Action
    await userEvent.type(pass, 'bgs@bgs.com');

    // Assert
    expect(pass).toHaveValue('bgs@bgs.com');
  });
  it('should call login function when login button is clicked', async () => {
    // membuat fungsi mockLogin;

    // me-render komponen dengan props login bernilai mockLogin;

    // mendapatkan elemen input Email;

    // menulis nilai pada input Email;

    // mendapatkan elemen input password;

    // menulis nilai pada input password; dan
    // mendapatkan elemen button.
    // Arrange
    const mockLogin = jest.fn();
    render(<Clogin oncForm={mockLogin} />);
    const email = await screen.getByPlaceholderText('Email');
    await userEvent.type(email, 'bgs@bgs.com');
    const pass = await screen.getByPlaceholderText('password');
    await userEvent.type(pass, 'bgs@bgs.com');
    const loginButton = await screen.getByRole('button', { name: 'Login' });
    // Action
    await userEvent.click(loginButton);
    // Assert
    expect(mockLogin).toBeCalledWith({
      email: 'bgs@bgs.com',
      pass: 'bgs@bgs.com',
    });
  });
});
