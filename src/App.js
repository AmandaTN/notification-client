import socketIO from "socket.io-client";
// eslint-disable-next-line
const socket = socketIO.connect("http://localhost:4000");

function App() {
  return (
      <div>
          <p>Hello World!</p>
      </div>
  );
}
export default App;