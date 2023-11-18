import { socket } from '../../socket';

export function ConnectionManager() {
  function connect() {
    socket.connect();
    socket.emit("question")
  }

  function disconnect() {
    socket.disconnect();
  }

  return (
    <>
      <button onClick={ connect }>Connect</button>
      <button onClick={ disconnect }>Disconnect</button>
    </>
  );
}