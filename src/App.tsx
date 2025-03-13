import { useState } from "react";
import { SearchUser } from "./components/organisms/SearchUser";
import { Github } from "lucide-react";
import Loading from "./components/organisms/Loading";
import Repositories from "./components/organisms/Repositories";
import NotFound from "./components/atoms/NotFound";

function App() {
  const [error, setError] = useState("");
  const [onSelected, setOnSelected] = useState("");
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState<boolean>(false);
  const [users, setUsers] = useState<any[]>([]);
  return (
    <>
      <div className="flex flex-row items-center justify-center mb-4 bg-gray-900 py-4 space-x-2">
        <Github className="stroke-gray-300" />
        <h1 className="text-xl font-medium  flex flex-row text-gray-400">
          GitHub repositories explorer
        </h1>
      </div>
      {/* Repositories */}
      {error && <p className="text-red-500">{error}</p>}
      <div className="container mx-auto p-4">
        <SearchUser
          setNotFound={setNotFound}
          userData={setUsers}
          loading={loading}
          setLoading={setLoading}
          setError={setError}
        />

        {loading ? (
          <Loading type="search" />
        ) : !notFound ? (
          <Repositories
            onSelected={onSelected}
            setOnSelected={setOnSelected}
            users={users}
            key={1}
            setError={setError}
          />
        ) : (
          <NotFound />
        )}
      </div>
    </>
  );
}

export default App;
