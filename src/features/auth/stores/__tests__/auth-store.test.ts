import { renderHook, act } from '@testing-library/react';
import { useAuthStore } from '../auth-store';

describe('Auth Store', () => {
  beforeEach(() => {
    // Reset store state before each test
    const { result } = renderHook(() => useAuthStore());
    act(() => {
      result.current.logout();
    });
  });

  it('should have initial state with no user', () => {
    const { result } = renderHook(() => useAuthStore());
    expect(result.current.user).toBeNull();
    expect(result.current.isAuthenticated).toBe(false);
  });

  it('should set user and update authenticated state', () => {
    const { result } = renderHook(() => useAuthStore());
    const testUser = {
      id: '1',
      email: 'test@example.com',
      roles: ['student'],
    };

    act(() => {
      result.current.setUser(testUser);
    });

    expect(result.current.user).toEqual(testUser);
    expect(result.current.isAuthenticated).toBe(true);
  });

  it('should logout and clear user', () => {
    const { result } = renderHook(() => useAuthStore());
    const testUser = {
      id: '1',
      email: 'test@example.com',
      roles: ['student'],
    };

    act(() => {
      result.current.setUser(testUser);
    });

    expect(result.current.isAuthenticated).toBe(true);

    act(() => {
      result.current.logout();
    });

    expect(result.current.user).toBeNull();
    expect(result.current.isAuthenticated).toBe(false);
  });

  it('should handle multiple role assignment', () => {
    const { result } = renderHook(() => useAuthStore());
    const testUser = {
      id: '1',
      email: 'test@example.com',
      roles: ['student', 'teacher'],
    };

    act(() => {
      result.current.setUser(testUser);
    });

    expect(result.current.user?.roles).toHaveLength(2);
    expect(result.current.user?.roles).toContain('student');
    expect(result.current.user?.roles).toContain('teacher');
  });
});

