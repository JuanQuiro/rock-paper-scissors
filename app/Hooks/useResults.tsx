import { useState, useEffect } from 'react';

type Choice = 'rock' | 'paper' | 'scissors' | 'lizard' | 'spock';

interface Options {
  type: 'basic' | 'extended';
  playerChoice: Choice;
  onChoiceClick: () => void;
  onWin?: () => void;
  onLose?: () => void;
  onDraw?: () => void;
}

interface Result {
  machineChoice: Choice;
  playerChoice: Choice;
  result: 'win' | 'lose' | 'draw';
}

function useRockPaperScissors({ type, playerChoice, onChoiceClick, onWin, onLose, onDraw }: Options): Result {
  const basicChoices: Choice[] = ['rock', 'paper', 'scissors'];
  const extendedChoices: Choice[] = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

  const [machineChoice, setMachineChoice] = useState<Choice>(() => {
    const choices = type === 'basic' ? basicChoices : extendedChoices;
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  });

  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    const choices = type === 'basic' ? basicChoices : extendedChoices;
    const randomIndex = Math.floor(Math.random() * choices.length);
    setMachineChoice(choices[randomIndex]);
  }, [clicks, type, basicChoices, extendedChoices]);

  const getWinner = (p: Choice, m: Choice): 'win' | 'lose' | 'draw' => {
    if (p === m) return 'draw';
    if (
      (p === 'rock' && (m === 'scissors' || m === 'lizard')) ||
      (p === 'paper' && (m === 'rock' || m === 'spock')) ||
      (p === 'scissors' && (m === 'paper' || m === 'lizard')) ||
      (p === 'lizard' && (m === 'paper' || m === 'spock')) ||
      (p === 'spock' && (m === 'rock' || m === 'scissors'))
    ) {
      return 'win';
    } else {
      return 'lose';
    }
  };

  const result: 'win' | 'lose' | 'draw' = getWinner(playerChoice, machineChoice);

  if (result === 'win' && onWin) onWin();
  if (result === 'lose' && onLose) onLose();
  if (result === 'draw' && onDraw) onDraw();

  const handleChoiceClick = () => {
    setClicks(clicks + 1);
    onChoiceClick();
  };

  return { machineChoice, playerChoice, result };
}

export default useRockPaperScissors;