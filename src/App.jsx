
import './App.css'
import Header from './components/Layout/Header';
import ClockArea from './components/Clock/ClockArea';
function App() {
  return (
    <div className="max-w-3xl mx-auto">
    <Header />
    <div>
      <h1>Main Section</h1>
    </div>
    <ClockArea />
    </div>
  );
}

export default App
