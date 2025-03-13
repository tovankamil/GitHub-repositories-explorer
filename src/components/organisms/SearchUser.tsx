import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { clearSearch, handlers } from "@/handlers/actions";
import { X } from "lucide-react";
import { useState } from "react";

export const SearchUser = ({
  userData,
  loading,
  setLoading,
  setNotFound,
  setError,
}: {
  loading: boolean;
  userData: (users: any[]) => void;
  setLoading: (users: boolean) => void;
  setNotFound: (data: boolean) => void;
  setError: (errors: string) => void;
}) => {
  const [query, setQuery] = useState("");

  const [, setUsers] = useState<any[]>([]);

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
                userData,
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
              userData,
              setNotFound,
            })
          }
          disabled={loading}
          className="hover:cursor-pointer bg-gray-900"
        >
          Search
        </Button>
      </div>
    </div>
  );
};
