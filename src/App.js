import Column from './components/atoms/Column';
import Row from './components/atoms/Row';
import * as palettesModule from './index.module.scss';

const { default: palettes } = palettesModule;

/* eslint-disable */
console.log(palettes);

function App() {
  return (
    <div className="App">
      <Column>
        <Row>
          <Column>
            <h1>Title</h1>
            <p>Hello</p>
          </Column>
          <Column>
            <h1>Title 2</h1>
            <p>Hello 2</p>
          </Column>
        </Row>
        <Row>
          Hello Bro!
        </Row>
      </Column>
    </div>
  );
}

export default App;
