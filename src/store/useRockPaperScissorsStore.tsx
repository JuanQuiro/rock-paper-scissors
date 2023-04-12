import { create } from 'zustand';

// Tipos de datos
type BasicChoice = 'rock' | 'paper' | 'scissors';
type ExtendChoice = BasicChoice | 'lizard' | 'spock';
type Mode = 'basic' | 'extend';

interface Result {
  machineChoice: ExtendChoice;
  playerChoice: ExtendChoice;
  winner: 'machine' | 'player' | 'draw';
}

interface Round {
  id: number;
  result: Result;
}

interface State {
  isBasic: boolean;
  player: string;
  mode: Mode;
  machineChoice: ExtendChoice;
  playerChoice: ExtendChoice;
  clicks: number;
  rounds: Round[];
  currentRound: number;
  score: number;
  lastUpdated: 'clicks' | 'playerChoice' | 'rounds';
  winner: 'machine' | 'player' | 'draw';
}

interface Actions {
  setIsBasic: (isBasic: boolean) => void;
  setPlayer: (player: string) => void;
  setMode: (mode: Mode) => void;
  setMachineChoice: (choice: ExtendChoice, source: 'clicks' | 'playerChoice' | 'rounds') => void;
  setPlayerChoice: (choice: ExtendChoice) => void;
  setClicks: (clicks: number) => void;
  setRounds: (rounds: Round[]) => void;
  setCurrentRound: (currentRound: number) => void;
  getMachineChoice: (mode: Mode) => ExtendChoice;
  getResult: (machineChoice: ExtendChoice, playerChoice: ExtendChoice) => Result;
  updateScore: (rounds: Round[], playerChoice: ExtendChoice) => void;
}

type Store = State & Actions;

// Creación de la tienda con Zustand
const useRockPaperScissorsStore = create<Store>((set) => ({
  isBasic: true,
  player: 'Pepe',
  mode: 'basic',
  machineChoice: 'rock',
  playerChoice: 'rock',
  clicks: 0,
  rounds: [],
  currentRound: 0,
  score: 0,
  lastUpdated: 'clicks',
  winner: 'draw',

  setIsBasic: (isBasic: boolean) => set(() => ({ isBasic })),
  setPlayer: (player: string) => set(() => ({ player })),
  setMode: (mode: Mode) => set(() => ({ mode })),
  setMachineChoice: (choice: ExtendChoice, source: 'clicks' | 'playerChoice' | 'rounds') =>
    set((state) => ({
      ...state,
      machineChoice: choice,
      lastUpdated: source,
    })),
  setPlayerChoice: (choice: ExtendChoice) =>
    set((state) => {
      const machineChoice = state.getMachineChoice(state.mode);
      return {
        ...state,
        playerChoice: choice,
        machineChoice,
        lastUpdated: 'playerChoice',
      };
    }),
  setClicks: (clicks: number) => set(() => ({ clicks })),
  setRounds: (rounds: Round[]) => set(() => ({ rounds })),
  setCurrentRound: (currentRound: number) => set(() => ({ currentRound })),
  getMachineChoice: (mode: Mode) => {
    const choices: ExtendChoice[] = mode === 'basic' ? ['rock', 'paper', 'scissors'] : ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  },
  getResult: (machineChoice: ExtendChoice, playerChoice: ExtendChoice) => {
    if (machineChoice === playerChoice) {
      return { machineChoice, playerChoice, winner: 'draw' };
    }

    switch (machineChoice) {
      case 'rock':
        return playerChoice === 'paper'
          ? { machineChoice, playerChoice, winner: 'player' }
          : { machineChoice, playerChoice, winner: 'machine' };
      case 'paper':
        return playerChoice === 'scissors'
          ? { machineChoice, playerChoice, winner: 'player' }
          : { machineChoice, playerChoice, winner: 'machine' };
      case 'scissors':
        return playerChoice === 'rock'
          ? { machineChoice, playerChoice, winner: 'player' }
          : { machineChoice, playerChoice, winner: 'machine' };
      case 'lizard':
        return playerChoice === 'rock' || playerChoice === 'scissors'
? { machineChoice, playerChoice, winner: 'player' }
: { machineChoice, playerChoice, winner: 'machine' };
case 'spock':
return playerChoice === 'paper' || playerChoice === 'lizard'
? { machineChoice, playerChoice, winner: 'player' }
: { machineChoice, playerChoice, winner: 'machine' };
default:
throw new Error(`Invalid choice: ${machineChoice}`);
}
},
updateScore: (rounds: Round[], playerChoice: ExtendChoice) => {
let score = 0;
rounds.forEach((round) => {
const result = round.result;
if (result.winner === 'player' && result.playerChoice === playerChoice) {
score += 1;
}
});
set((state) => ({ ...state, score }));
},
}));

export default useRockPaperScissorsStore;