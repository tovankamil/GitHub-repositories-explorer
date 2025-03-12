import { FC } from "react";
import LoadingSearch from "../atoms/LoadingUser";
import LoadingRepo from "../atoms/LoadingRepo";

interface LoadingProps {
  type?: string;
}
const Loading: FC<LoadingProps> = ({ type }) => {
  if (type === "search") {
    return (
      <div className="space-y-4">
        <LoadingSearch />
        <LoadingSearch />
        <LoadingSearch />
        <LoadingSearch />
        <LoadingSearch />
      </div>
    );
  }
  return (
    <>
      <LoadingRepo />
      <LoadingRepo />
      <LoadingRepo />
      <LoadingRepo />
      <LoadingRepo />
    </>
  );
};

export default Loading;
