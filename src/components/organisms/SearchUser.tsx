import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { clearSearch, handlers } from "@/handlers/actions";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { getUserRepos } from "../../services/github";
import NotFound from "../atoms/NotFound";
import Loading from "./Loading";
import Repositories from "./Repositories";

export const SearchUser = () => {
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingContent, setLoadingContent] = useState(false);
  const [notFound, setNotFound] = useState<boolean>(false);
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const [users, setUsers] = useState<any[]>([]);
  const [repos, setRepos] = useState<any[]>([]);

  useEffect(() => {
    const fetchRepos = async () => {
      if (selectedUser) {
        setRepos([]);
        setError("");
        setLoadingContent(true);
        try {
          const repos = await getUserRepos(selectedUser ?? "");
          setRepos(repos);
          setLoadingContent(false);
        } catch (err) {
          setLoadingContent(false);
          setError("Failed to fetch repositories");
        } finally {
          setLoadingContent(false);
        }
      }
    };
    fetchRepos();
  }, [selectedUser]);

  return (
    <div className="space-y-4">
      {/* Form  */}
      <div className="flex gap-2">
        <div className="flex flex-row flex-1 relative">
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search GitHub users..."
            onKeyDown={(e) =>
              e.key === "Enter" &&
              handlers({
                query,
                setLoading,
                setError,
                setUsers,
                setNotFound,
              })
            }
            className=""
          />
          {query && (
            <div
              className="absolute  top-2 right-2 cursor-pointer"
              onClick={() => clearSearch({ setQuery, setUsers })}
            >
              <X size={18} />
            </div>
          )}
        </div>
        <Button
          onClick={() =>
            handlers({
              query,
              setLoading,
              setError,
              setUsers,
              setNotFound,
            })
          }
          disabled={loading}
          className="hover:cursor-pointer bg-gray-900"
        >
          Search
        </Button>
      </div>

      {/* Repositories */}
      {error && <p className="text-red-500">{error}</p>}
      {loading ? (
        <Loading type="search" />
      ) : !notFound ? (
        <Repositories
          loadingContent={loadingContent}
          onSelectUser={setSelectedUser}
          repos={repos}
          users={users}
          key={1}
        />
      ) : (
        <NotFound />
      )}
    </div>
  );
};
