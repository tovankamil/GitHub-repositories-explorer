import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

import { FolderGit } from "lucide-react";

import Loading from "./Loading";

const Repositories = ({
  onSelectUser,

  users,
  repos,
  loadingContent,
}: {
  onSelectUser: (username: string) => void;

  users: any;
  repos: any;
  loadingContent: boolean;
}) => {
  return (
    <div className="hover:cursor-pointer">
      <Accordion type="single" collapsible>
        {users.map((user: any, i: number) => (
          <AccordionItem value={user.login} key={i}>
            <AccordionTrigger
              onClick={() => onSelectUser(user.login)}
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
