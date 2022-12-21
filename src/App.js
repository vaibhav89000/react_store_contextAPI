import logo from './logo.svg';
import './App.css';
import useAuth from './hooks/useAuth';

function App() {

  const authHook = useAuth();

  const handleLogin = () => {
    authHook.login("token is logged in")
  }

  const handleLogout = () => {
    authHook.logout()
  }

  return (
    <div className="App">
      Context Api

      {authHook.isLoggedIn && <div>logged in</div>}
      <br></br>
      <button onClick={handleLogin}>login</button>
      <button onClick={handleLogout}>logout</button>

    </div>
  );
}

export default App;
