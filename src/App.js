import './App.css';
import {Board} from '../src/Components/Board'

function App() {
  return (
    <div className='flex justify-center items-center'>
      <div className='absolute top-0 w-screen h-20 flex items-center text-4xl font-semibold shadow-xl p-5 font-poppins'>
        Lets Playyy
      </div>
       <Board />
    </div>
  );
}

export default App;
