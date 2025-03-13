import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

import { FolderGit } from "lucide-react";

import Loading from "./Loading";
import { useEffect, useState } from "react";
import { getUserRepos } from "@/services/github";

const Repositories = ({
  onSelected,
  setOnSelected,
  users,
  setError,
}: {
  onSelected: string;
  setOnSelected: (username: string) => void;
  setError: (errors: string) => void;
  users: any;
}) => {
  const [repos, setRepos] = useState<any[]>([]);
  const [loadingContent, setLoadingContent] = useState(false);
  useEffect(() => {
    const fetchRepos = async () => {
      if (onSelected) {
        setRepos([]);
        setError("");
        setLoadingContent(true);
        try {
          const repos = await getUserRepos(onSelected);
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
  }, [onSelected]);
  return (
    <div className="hover:cursor-pointer mt-4">
      <Accordion type="single" collapsible>
        {users.map((user: any, i: number) => (
          <AccordionItem value={user.login} key={i}>
            <AccordionTrigger
              onClick={() => setOnSelected(user.login)}
              className="hover:cursor-pointer hover:bg-gray-100  p-4"
            >
              <Avatar>
                <AvatarImage src={user.avatar_url} />
                <AvatarFallback>{user.login}</AvatarFallback>
              </Avatar>{" "}
              {user.login}
            </AccordionTrigger>
            <AccordionContent>
              {loadingContent ? <Loading /> : ""}

              <ul className="space-y-2 mt-4">
                {repos.map((repo: any, i: number) => (
                  <li key={i} className="hover:bg-gray-100  p-4">
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-row space-x-4 border-accent-foreground"
                    >
                      <FolderGit size={24} />{" "}
                      <h5 className="font-semibold text-gray-700 hover:text-blue-700">
                        {repo.name}
                      </h5>
                    </a>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Repositories;
