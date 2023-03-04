import packageJson from '../../package.json'
import { cmd_error, cmd_info } from '../commandOutput';
import { getCurrentTheme } from '../theme';
import * as bin from './index'

export const repo = async (args?: string[]): Promise<string> => {
    setTimeout(function () {
      window.open('https://github.com/sschleemilch/portfolio-terminal', '_blank');
    }, 1000);
    return 'Opening repository...';
};

export const banner = (args?: string[]): string => {
    const theme = getCurrentTheme()
    return `
███████╗ ██████╗██╗  ██╗██╗     ███████╗███████╗███╗   ███╗██╗██╗      ██████╗██╗  ██╗
██╔════╝██╔════╝██║  ██║██║     ██╔════╝██╔════╝████╗ ████║██║██║     ██╔════╝██║  ██║
███████╗██║     ███████║██║     █████╗  █████╗  ██╔████╔██║██║██║     ██║     ███████║
╚════██║██║     ██╔══██║██║     ██╔══╝  ██╔══╝  ██║╚██╔╝██║██║██║     ██║     ██╔══██║
███████║╚██████╗██║  ██║███████╗███████╗███████╗██║ ╚═╝ ██║██║███████╗╚██████╗██║  ██║
╚══════╝ ╚═════╝╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝╚═╝     ╚═╝╚═╝╚══════╝ ╚═════╝╚═╝  ╚═╝<span style="color: ${theme.green}">v${packageJson.version}</span>

A portfolio website in terminal style, just because I <span style="color: ${theme.red}"></span>  using and writing clean CLIs!

---
${cmd_info("Type 'help' to see list of available commands.")}
---

A lot of credits to <a href="https://github.com/m4tt72/terminal">m4tt72</a> for providing the base!

`;
  };

export const help = async (args: string[]): Promise<string> => {
    const commands = Object.keys(bin).sort().join(', ');
    return `${cmd_info("Available commands")}\n${commands}\n\n${cmd_info("Keybindings")}\n[tab]\t trigger completion.\n[ctrl+l] clear terminal.\n[ctrl+c] cancel command.`;
};

export const whoami = async (args: string[]): Promise<string> => {
    return 'guest';
};

export const echo = async (args: string[]): Promise<string> => {
    return args.join(' ');
};

export const date = async (args: string[]): Promise<string> => {
    return cmd_info(new Date().toString());
};

export const sudo = async (args?: string[]): Promise<string> => {
    setTimeout(function () {
      window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
    }, 1000);
  
    return cmd_error(`Permission denied: unable to run the command '${args[0]}' as root.`);
  };