import "@testing-library/jest-dom/vitest"; // Extend Vitest with jest-dom matchers
import { render, screen } from "@testing-library/react";
import { SearchUser } from "@/components/organisms/SearchUser";
import { vi } from "vitest";

// Mock the handlers and clearSearch functions
vi.mock("@/handlers/actions", () => ({
  handlers: vi.fn(),
  clearSearch: vi.fn(),
}));

describe("SearchUser", () => {
  const mockUserData = vi.fn();
  const mockSetLoading = vi.fn();
  const mockSetNotFound = vi.fn();
  const mockSetError = vi.fn();

  beforeEach(() => {
    render(
      <SearchUser
        userData={mockUserData}
        loading={false}
        setLoading={mockSetLoading}
        setNotFound={mockSetNotFound}
        setError={mockSetError}
      />
    );
  });

  it("renders the search input and button", () => {
    expect(screen.getByPlaceholderText("Search GitHub users...")).not.toBeNull;
    expect(screen.getByRole("button", { name: "Search" })).not.toBeNull;
  });
});
