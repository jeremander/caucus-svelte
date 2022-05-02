export function getCssVars(obj) {
    return Object.entries(obj)
        .filter(([key]) => !key.startsWith('$'))
        .reduce((css, [key, value]) => `${css}${key}: ${value};`, '');
}

