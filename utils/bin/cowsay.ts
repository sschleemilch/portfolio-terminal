import * as cow from 'cowsay-browser';
import { getQuote } from '../../apis';

export const cowsay = async (args?: string[]): Promise<string> => {
  let output = '';

  if (args.length < 1 || args[0] === '') {
    const quote = (await getQuote()).quote;
    return cow.say({ text: quote });
  } else {
    output = args.join(' ');
    return cow.say({ text: output });
  }
};
