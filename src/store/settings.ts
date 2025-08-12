import { atom } from "jotai";

interface Settings {
  name: string;
  language: string;
  interruptSensitivity: string;
  greeting: string;
  context: string;
  persona: string;
  replica: string;
}

const getInitialSettings = (): Settings => {
  const savedSettings = localStorage.getItem('tavus-settings');
  if (savedSettings) {
    return JSON.parse(savedSettings);
  }
  return {
    name: "",
    language: "en",
    interruptSensitivity: "medium",
    greeting: "Hey there, hacker! I'm your AI mentor here to help you crush this hackathon. What are you building?",
    context: "You are a hackathon mentor with deep technical expertise across all programming languages, frameworks, and technologies. You help participants brainstorm ideas, solve technical challenges, debug code, choose the right tech stack, and provide guidance on project architecture. You're encouraging, practical, and focused on helping teams build amazing projects within tight deadlines. Keep responses concise but helpful.",
    persona: "p2f64687375f",
    replica: "rf4703150052",
  };
};

export const settingsAtom = atom<Settings>(getInitialSettings());

export const settingsSavedAtom = atom<boolean>(false); 