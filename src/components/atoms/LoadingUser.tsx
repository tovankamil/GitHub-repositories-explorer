import { ChevronDown } from "lucide-react";

const LoadingSearch = () => {
  return (
    <div className="w-full  items-center space-x-2 mt-4">
      <div className="bg-gray-300  w-full animate-pulse rounded-sm p-3 flex flex-row  items-center justify-between">
        <div className="bg-gray-400 h-8 w-8 rounded-full animate-pulse"></div>
        <div className="bg-gray-400 animate-pulse h-4 w-4/12 rounded-sm p-2"></div>
        <ChevronDown className="stroke-gray-400" />
      </div>
    </div>
  );
};

export default LoadingSearch;
