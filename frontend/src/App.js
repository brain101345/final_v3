import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import StartPage from "./components/StartPage";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import Game from "./containers/Game";
import ResultPage from "./components/ResultPage";
import Lobby from "./containers/Lobby";
import RoundEnd from "./components/RoundEnd";
import Room from "./components/Room";
import Test from "./components/Test";
import New from "./components/New";
import Lucky from "./components/Lucky";
import GameConsole from "./containers/GameConsole";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

function App() {
  return (
    <Wrapper>
      <Routes>
        <Route path="/">
          <Route path="signup" element={<Signup />} />
          <Route path="/" element={<StartPage />} />
          <Route path="login" element={<Login />} />
          <Route path="game/:room/:name" element={<Game />} />
          {/* <Route path="result/:room" element={<ResultPage />} /> */}
          <Route path="room/:roomName" element={<Room />} />
          <Route path="roundend" element={<RoundEnd />} />
          <Route path="lobby" element={<Lobby />} />
          <Route path="*" element={<h1>Error, Page Not Found</h1>} />
          <Route path="new" element={<New />} />
          <Route path="lucky" element={<Lucky />} />
          {/* <Route path="test" element={<Test />} /> */}
          <Route path="console" element={<GameConsole />} />
        </Route>
      </Routes>
    </Wrapper>
  );
}

export default App;
