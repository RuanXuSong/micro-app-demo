import { reloadAuthorized } from './Authorized'; // use localStorage to store the authority info, which might be sent from server in actual project.

export function getAuthority(key: 'cloud' | 'children' = 'cloud', str?: string) {
  const authorityString =
    typeof str === 'undefined' && localStorage ? localStorage.getItem('cloud-authority') : str; // authorityString could be admin, "admin", ["admin"]

  let authority;

  try {
    if (authorityString) {
      authority = JSON.parse(authorityString);
    }
  } catch (e) {
    authority = authorityString;
  }

  if (!authority) {
    return [];
  }

  return Array.isArray(authority) ? authority : authority[key];
}
export function setAuthority(authority: string[], key: 'cloud' | 'children' = 'cloud') {
  const cloudAuthority = typeof authority === 'string' ? [authority] : authority;
  const originAuthority = JSON.parse(localStorage.getItem('cloud-authority') || '{}');
  originAuthority[key] = cloudAuthority;
  localStorage.setItem('cloud-authority', JSON.stringify(originAuthority)); // auto reload

  reloadAuthorized();
}
