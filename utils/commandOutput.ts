import { getCurrentTheme } from "./theme"

export const cmd_error = (s: string) => {
    const theme = getCurrentTheme()
    return `<span style="color: ${theme.red}"> ${s}</span> `
}

export const cmd_ok = (s: string) => {
    const theme = getCurrentTheme()
    return `<span style="color: ${theme.green}"> ${s}</span> `
}

export const cmd_info = (s: string) => {
    const theme = getCurrentTheme()
    return `<span style="color: ${theme.blue}"> ${s}</span> `
}