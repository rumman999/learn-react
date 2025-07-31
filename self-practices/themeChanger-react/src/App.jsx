import Card from "./components/Card";
import ThemeButton from "./components/ThemeButton";
import ThemeContextProvider from "./contexts/ThemeContext";

function App() {
  return (
    <ThemeContextProvider>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeButton></ThemeButton>
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card></Card>
          </div>
        </div>
      </div>
    </ThemeContextProvider>
  );
}

export default App;
