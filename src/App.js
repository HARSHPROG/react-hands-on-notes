import './App.css';
// import MyComponent from './hooks1/FetchData';
// import MyComponent from './dummyComponent';
// import AlternateColor from './exercises/alternate_color';
// import ComponentUseCallback from './hooks1/useCallback';
// import SetThemeDark from './exercises/setThemeDark';
// import UseMemoComponent from './hooks1/useMemo';
// import UseContext from './hooks1/UseContext';
// import CustomHooks from './hooks1/CustomHooks';
// import UseReducerCounter from './hooks1/UseReducer';
// import DummyComponent from './dummyComponent';
// import FunctionalTest from './exercises/functionalTest';
// import UseRefHook from './hooks1/UseRefHook';
// import MyComponentWithLogging from './React Concepts/HOC';
// import Tab from './React Concepts/CompondPattern';
import Game from './exercises/country capital Game/Game';

function App() {
  const countryCap = {
    India: 'Delhi',
    Russia: 'Moscow',
    USA: 'Washington DC'
}

  return (
    <div className="App">
      {/* <MyComponent /> */}
      {/* <AlternateColor /> */}
      {/* <ComponentUseCallback /> */}
      {/* <SetThemeDark /> */}
      {/* <UseMemoComponent /> */}
      {/* <UseContext /> */}
      {/* <CustomHooks /> */}
      {/* <UseReducerCounter /> */}
      {/* <DummyComponent /> */}

      {/* <header className="App-header"> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>*/}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>  */}
        {/* <FunctionalTest /> */}
        {/* <UseRefHook /> */}
        {/* <MyComponentWithLogging message="Hello, World!" /> */}
      {/* </header> */}

      {/* <Tab>
        <Tab.HeadsContainer>
          <Tab.Item label="Tab1" index={1} />
          <Tab.Item label="Tab2" index={2} />
          <Tab.Item label="Tab3" index={3} />
        </Tab.HeadsContainer>
      </Tab> */}
      <Game data = {countryCap}/>
    </div>
  );
}

export default App;
