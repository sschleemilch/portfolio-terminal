import { getProjects } from '../../apis';
import { getCurrentTheme } from '../theme';

export const projects = async (args: string[]): Promise<string> => {
  const projects = await getProjects();
  const theme = getCurrentTheme()

  return projects
    .filter((repo) => !repo.fork)
    .map(
      (repo) =>
        `<span style="color: ${theme.yellow}"></span> ${repo.name} - <a class="underline" href="${repo.html_url}" target="_blank">${repo.html_url}</a>`,
    )
    .join('<br>');
};
