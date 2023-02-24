import packageJson from '../../package.json'
import * as bin from './index'

export const banner = (args?: string[]): string => {
    return `
    ███████╗ ██████╗██╗  ██╗██╗     ███████╗███████╗███╗   ███╗██╗██╗      ██████╗██╗  ██╗
    ██╔════╝██╔════╝██║  ██║██║     ██╔════╝██╔════╝████╗ ████║██║██║     ██╔════╝██║  ██║
    ███████╗██║     ███████║██║     █████╗  █████╗  ██╔████╔██║██║██║     ██║     ███████║
    ╚════██║██║     ██╔══██║██║     ██╔══╝  ██╔══╝  ██║╚██╔╝██║██║██║     ██║     ██╔══██║
    ███████║╚██████╗██║  ██║███████╗███████╗███████╗██║ ╚═╝ ██║██║███████╗╚██████╗██║  ██║
    ╚══════╝ ╚═════╝╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝╚═╝     ╚═╝╚═╝╚══════╝ ╚═════╝╚═╝  ╚═╝v${packageJson.version}

    Type 'help' to see list of available commands.
  `;
  };

export const help = async (args: string[]): Promise<string> => {
    const commands = Object.keys(bin).sort().join(', ');
    return `Available commands:\n${commands}\n\n[tab]\t trigger completion.\n[ctrl+l] clear terminal.\n[ctrl+c] cancel command.`;
};

export const whoami = async (args: string[]): Promise<string> => {
    return 'guest';
};

export const echo = async (args: string[]): Promise<string> => {
    return args.join(' ');
};

export const date = async (args: string[]): Promise<string> => {
    return new Date().toString();
};