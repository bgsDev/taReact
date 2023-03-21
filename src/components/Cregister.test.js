/**
 * skenario testing
 *
 * - LoginInput component
 *  - should handle user typing correctly
 *   - should handle Email typing correctly
 *   - should handle password typing correctly
 *   - should call login function when login button is clicked
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Cregister from './Cregister';
import '@testing-library/jest-dom';

describe('LoginInput component', () => {
  it('should handle User typing correctly', async () => {
    // Arrange
    render(<Cregister oncForm={() => {}} />);
    const user = await screen.getByPlaceholderText('User');
    // // Action
    // await userEvent.type(usernameInput, { target: { value: 'bgs@bgs.com' } });
    await userEvent.type(user, 'bgs');

    // Assert
    expect(user).toHaveValue('bgs');
  });
  it('should handle Email typing correctly', async () => {
    // Arrange
    render(<Cregister oncForm={() => {}} />);
    const email = await screen.getByPlaceholderText('Email');
    // // Action
    // await userEvent.type(usernameInput, { target: { value: 'bgs@bgs.com' } });
    await userEvent.type(email, 'bgs@bgs.com');

    // Assert
    expect(email).toHaveValue('bgs@bgs.com');
  });
  it('should handle password typing correctly', async () => {
    // Arrange
    render(<Cregister oncForm={() => {}} />);
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
    render(<Cregister oncForm={mockLogin} />);
    const user = await screen.getByPlaceholderText('User');
    await userEvent.type(user, 'bgs');
    const email = await screen.getByPlaceholderText('Email');
    await userEvent.type(email, 'bgs@bgs.com');
    const pass = await screen.getByPlaceholderText('password');
    await userEvent.type(pass, 'bgs@bgs.com');
    const loginButton = await screen.getByRole('button', { name: 'Daftar' });
    // Action
    await userEvent.click(loginButton);
    // Assert
    expect(mockLogin).toBeCalledWith({
      email: 'bgs@bgs.com',
      pass: 'bgs@bgs.com',
      user: 'bgs',
    });
  });
});
