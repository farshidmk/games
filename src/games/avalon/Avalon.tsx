import AvalonProvider, { useAvalonGame } from './AvalonProvider';
import SelectPlayers from './components/SelectPlayers';

const AvalonGame = () => {
  return (
    <AvalonProvider>
      <Avalon />
    </AvalonProvider>
  );
};

export default AvalonGame;

const Avalon = () => {
  const { gameStep } = useAvalonGame();
  return (
    <div>
      <h1 className="fansy-font text-6xl text-center font-bold">Avalon</h1>
      {gameStep === 'choose-players' ? <SelectPlayers /> : <h1>not completed</h1>}
    </div>
  );
};
