import cookie from 'cookie';

export function getCookie(name) {
    const cookies = cookie.parse(document.cookie);
    return cookies[name];
}

export function setCookie(name, value, days) {
    let expires = '';
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = '; expires=' + date.toUTCString();
    }
    document.cookie = name + '=' + (value || '') + expires + '; path=/; SameSite=Lax; Secure';
}
export function deleteCookie(name) {
    document.cookie = name + '=; Max-Age=-99999999; path=/; SameSite=Lax; Secure';
}
