import { getBio } from '../../apis';

export const about = async (args: string[]): Promise<string> => {
  const bio = await getBio();

  return bio;
};
