import { Routes, Route } from 'react-router-dom'

function App() {
  return (
  <>
    <Routes>
        <Route path="/" element={<h1>HomePage</h1>} />
        <Route path="/credentials" element={<h1>Credentials List Page</h1>} />
        <Route path="/" element={<h1>HomePage</h1>} />
    </Routes>
  </>
);
}

export default App;
