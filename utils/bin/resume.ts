import { cmd_info } from "../commandOutput";
import { getCurrentTheme } from "../theme";

export const resume = async (args?: string[]): Promise<string> => {
    const theme = getCurrentTheme()

    return `  <span style="color: ${theme.blue}">  Work</span>
    |
    <span style="color: ${theme.yellow}">  2022-?</span>
    |  <span style="color: ${theme.blue}">BMW AG</span>
    |  Software Build & CI Expert
    |  k8s, GitHub, Bazel, AWS, Artifactory, Zuul, Python, C++, Go, ...
    |
    <span style="color: ${theme.yellow}">  2018-2021</span>
    |  <span style="color: ${theme.blue}">Bosch GmbH</span>
    |  Automotive DevOps & CI Expert
    |  Azure, Conan, CMake, Devcontainers, Azure Pipelines, Terraform, C++, Python, ...
    |
    <span style="color: ${theme.yellow}">  2016-2018</span>
    |  <span style="color: ${theme.blue}">Bosch GmbH</span>
    |  Automotive Software Integration & CI
    |  Bitbucket, Jenkins, SCons, CMake, Python, C++, ...
    |
    <span style="color: ${theme.yellow}">  2014-2015</span>
    |  <span style="color: ${theme.blue}">BMW M GmbH</span>
    |  Working Student
    |  OBD, Excel VBA, Python
    |
    <span style="color: ${theme.yellow}">  2013</span>
    |  <span style="color: ${theme.blue}">Fraunhofer IISB</span>
    |  Bachelor Thesis - Inductive Vehicle Charging
    |  Power Electronics, uC-Programming (Atmel), Eagle Layout Design
    |
    <span style="color: ${theme.yellow}">  2012-2013</span>
    |  <span style="color: ${theme.blue}">Fraunhofer IIS</span>
    |  Working Student
    |  Wireless 868 MHz uC-Programming, Boxing Gloves
    |
    <span style="color: ${theme.yellow}">  2011-2012</span>
    |  <span style="color: ${theme.blue}">FAU Erlangen</span>
    |  Tutor
    |  Java Programming Excercises
    |
    |
  <span style="color: ${theme.blue}">  Education</span>
    |
    <span style="color: ${theme.yellow}">  2016 M.Sc</span>
    |  <span style="color: ${theme.blue}">TU Munich</span>
    |  Automotive Software Engineering
    |
    <span style="color: ${theme.yellow}">  2013 M.Bc</span>
    |  <span style="color: ${theme.blue}">FAU Erlangen</span>
    |  Mechatronics
    
`
};