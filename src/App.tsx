import { SearchUser } from "./components/organisms/SearchUser";
import { Github } from "lucide-react";

function App() {
  return (
    <>
      <div className="flex flex-row items-center justify-center mb-4 bg-gray-900 py-4 space-x-2">
        <Github className="stroke-gray-300" />
        <h1 className="text-xl font-medium  flex flex-row text-gray-400">
          GitHub repositories explorer
        </h1>
      </div>
      <div className="container mx-auto p-4">
        <SearchUser />
      </div>
    </>
  );
}

export default App;
