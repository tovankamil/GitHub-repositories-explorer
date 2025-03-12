import { searchUsers } from "@/services/github";

export const handlers = async ({
  query,
  setLoading,
  setError,
  setUsers,
  setNotFound,
}: {
  setLoading: (loading: boolean) => void;
  setError: (error: string) => void;
  setUsers: (users: any[]) => void;
  setNotFound: (data: boolean) => void;

  query?: string | null;
}) => {
  try {
    if (!query) {
      return;
    }
    setLoading(true);
    setError("");
    const users = await searchUsers(query);
    if (users?.length > 0) {
      setUsers(users);
      setLoading(false);
    }
    if (users?.length < 1) {
      setNotFound(true);
      setLoading(false);
    }
  } catch (err) {
    setError("Failed to fetch users");
    setLoading(false);
  } finally {
    setLoading(false);
  }
};

export const clearSearch = async ({
  setQuery,
  setUsers,
}: {
  setQuery: (query: string) => void;
  setUsers: (users: any[]) => void;
}) => {
  setQuery("");
  setTimeout(() => {
    setUsers([]);
  }, 100);
};
