import themes from '@/themes.json'

export const getCurrentTheme = () => {
    const themeName = localStorage.getItem('theme');
    const theme = themes.find((theme) => theme.name.toLowerCase() === themeName);
    return theme
};
