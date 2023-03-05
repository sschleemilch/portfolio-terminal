import * as cow from 'cowsay-browser';
import { getQuote } from '../../apis';
import { pre_wrap } from '../commandOutput';

export const cowsay = async (args?: string[]): Promise<string> => {
  let output = '';

  if (args.length < 1 || args[0] === '') {
    const quote = (await getQuote()).quote;
    return pre_wrap(cow.say({ text: quote }));
  } else {
    output = args.join(' ');
    return pre_wrap(cow.say({ text: output }));
  }
};
