// App.jsx - Raiz del componente de el aplicativo DistriLion
import Header from "./components/Header";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Header cartCount={0} />
      <HomePage />
    </>
  );
}

export default App;
