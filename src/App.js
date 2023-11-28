import './App.css';

function App() {
  return (
    <div className="App">
      <Job salary={100000} position="Senior SDE" company="Facebook" />
      <Job salary={90000} position="Junior SDE" company="Google" />
      <Job salary={80000} position="Project Manager" company="Amazon" />
    </div>
  );
}

export default App;
