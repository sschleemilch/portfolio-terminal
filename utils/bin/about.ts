import { getCurrentTheme } from "../theme";

export const about = async (args?: string[]): Promise<string> => {
  const  theme = getCurrentTheme()

  return `
    <h1 style="color: ${theme.blue}"> About</h1>
    I am a passionate Software Developer who loves new challenges and getting into new unknown software and hardware related domains.
    Currently I am working in research in the domain of software defined vehicles.

    <h1 style="color: ${theme.blue}"> Coding</h1>
    I love to code. Professionally and in private. Amazed to solve new challenges everyday and to solve everyday problems in private

    <h1 style="color: ${theme.blue}"> Research</h1>
    I like looking a bit in the future, being close to what's currently possible. Very intrested in most recent techs. Never stand still!

    <h1 style="color: ${theme.blue}">ﰌ Sports</h1>
    Besides spending a lot of time in front of the monitor I like doing sports like Tennis, Fitness and Climbing/Hiking`;
};
