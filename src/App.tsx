import { Route, Routes } from 'react-router-dom';

import Auth from './components/Auth';
import Root from './components/Root';
import Nav from './components/Nav';

function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/signin" element={<Auth />} />
        <Route path="/signup" element={<Auth />} />
      </Routes>
    </>
  );
}

export default App;
