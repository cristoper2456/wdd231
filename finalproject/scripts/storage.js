export function saveLastFilter(filterName) {
    localStorage.setItem('lastFilter', filterName);
}

export function getLastFilter() {
    return localStorage.getItem('lastFilter') || 'all';
}