import { getCurrentTheme } from "../theme";

export const about = async (args?: string[]): Promise<string> => {
  const  theme = getCurrentTheme()

  return `<span style="color: ${theme.blue}"> About</span>
  I am a passionate Software Developer who loves new challenges and getting into new unknown software and hardware related domains.
  Currently I am in depth into large scaling DevOps solutions for Autonomous Driving Systems.

<span style="color: ${theme.blue}"> Coding</span>
  I love to code. Professionally and in private. Amazed to solve new challenges everyday and to solve everyday problems in private

<span style="color: ${theme.blue}"> Research</span>
  I like looking a bit in the future, being close to what's currently possible. Very intrested in most recent techs. Never stand still!

<span style="color: ${theme.blue}">ﰌ Sports</span>
  Besides spending a lot of time in front of the monitor I like doing sports like Tennis, Fitness and Climbing/Hiking`;
};