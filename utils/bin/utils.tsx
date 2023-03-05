import packageJson from '../../package.json'
import { cmd_error, cmd_info, pre_wrap } from '../commandOutput';
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
    
    const ascii_art = pre_wrap(`<b>   _____      __    __               __         ____
  / ___/_____/ /_  / /__  ___  _____/ /_  ___  / / /
  \\__ \\/ ___/ __ \\/ / _ \\/ _ \\/ ___/ __ \\/ _ \\/ / /
 ___/ / /__/ / / / /  __/  __(__  ) / / /  __/ / /
/____/\\___/_/ /_/_/\\___/\\___/____/_/ /_/\\___/_/_/
</b>
`);

    const description = `
      A portfolio website in terminal style, just because I <span style="color: ${theme.red}"></span>  using and writing clean CLIs!
      <br>
      ---
      <br>
      ${cmd_info("Type 'help' to see list of available commands.")}`;

    return ascii_art + description
};

export const help = async (args: string[]): Promise<string> => {
    const commands = Object.keys(bin).sort().join(', ');
    return `${cmd_info("Available commands")}<br>${commands}<br><br>${cmd_info("Keybindings")}<br>[tab]\t trigger completion.<br>[ctrl+l] clear terminal.<br>[ctrl+c] cancel command.`;
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