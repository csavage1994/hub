export function toggleSidebar(current) {
    return {
        type: 'TOGGLE_SIDEBAR',
        payload: !current,
    };
}
