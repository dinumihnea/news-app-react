export const appLanguages = new Map([
  ['en', 'English'],
  ['ro', 'Română'],
  ['ru', 'Русский']]);

export const isAuthenticated = () => {
  return !!localStorage.getItem('x-auth-token');
};
