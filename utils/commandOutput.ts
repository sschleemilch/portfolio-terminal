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

export const pre_wrap = (s: string, line_height_normal: boolean=true, color: string = "") => {
    let line_height = line_height_normal ? "line-height: normal;" : "";
    let color_style = color ? `color: ${color};` : ""
    return `<p style="white-space: pre-wrap; ${line_height} ${color_style}">${s}</p>`
}