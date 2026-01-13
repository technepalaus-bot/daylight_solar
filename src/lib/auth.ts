// Simple auth helper - uses browser localStorage
export const AUTH_USERNAME = 'admin'; // Change this to a secure username
export const AUTH_PASSWORD = 'admin123'; // Change this to a secure password

export const checkAuth = (): boolean => {
  if (typeof window === 'undefined') return false;
  const token = localStorage.getItem('adminToken');
  return token === `${AUTH_USERNAME}:${AUTH_PASSWORD}`;
};

export const setAuth = (username: string, password: string): boolean => {
  if (username === AUTH_USERNAME && password === AUTH_PASSWORD) {
    localStorage.setItem('adminToken', `${username}:${password}`);
    return true;
  }
  return false;
};

export const logout = (): void => {
  localStorage.removeItem('adminToken');
};
