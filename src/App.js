import Misc from './components/templates/Misc';
import * as palettesModule from './styles/palettes.module.scss';

const { default: palettes } = palettesModule;

/* eslint-disable */
console.log(palettes);

function App() {
  return (
    <div className="App">
      <Misc />
    </div>
  );
}

export default App;
