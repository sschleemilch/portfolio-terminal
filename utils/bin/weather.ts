import { getWeather } from '../../apis';
import { cmd_info, pre_wrap } from '../commandOutput';

export const weather = async (args: string[]): Promise<string> => {
  const city = args.join('+');

  if (!city) {
    return cmd_info('Usage: weather [city]. Example: weather casablanca');
  }

  const weather = await getWeather(city);

  return pre_wrap(weather);
};
