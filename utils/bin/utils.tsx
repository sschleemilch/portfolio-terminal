import packageJson from '../../package.json'
import { cmd_error, cmd_info } from '../commandOutput';
import * as bin from './index'

export const banner = (args?: string[]): string => {
    return `
███████╗ ██████╗██╗  ██╗██╗     ███████╗███████╗███╗   ███╗██╗██╗      ██████╗██╗  ██╗
██╔════╝██╔════╝██║  ██║██║     ██╔════╝██╔════╝████╗ ████║██║██║     ██╔════╝██║  ██║
███████╗██║     ███████║██║     █████╗  █████╗  ██╔████╔██║██║██║     ██║     ███████║
╚════██║██║     ██╔══██║██║     ██╔══╝  ██╔══╝  ██║╚██╔╝██║██║██║     ██║     ██╔══██║
███████║╚██████╗██║  ██║███████╗███████╗███████╗██║ ╚═╝ ██║██║███████╗╚██████╗██║  ██║
╚══════╝ ╚═════╝╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝╚═╝     ╚═╝╚═╝╚══════╝ ╚═════╝╚═╝  ╚═╝v${packageJson.version}

${cmd_info("Type 'help' to see list of available commands.")}
  `;
  };

export const help = async (args: string[]): Promise<string> => {
    const commands = Object.keys(bin).sort().join(', ');
    return `${cmd_info("Available commands")}\n${commands}\n\n${cmd_info("Keybindings")}\n[tab]\t trigger completion.\n[ctrl+l] clear terminal.\n[ctrl+c] cancel command.`;
};

export const whoami = async (args: string[]): Promise<string> => {
    return cmd_info('guest');
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