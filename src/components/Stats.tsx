"use client";

import { useStats } from "@/hooks/useStats";
import CountUp from "@/components/CountUp";

export const Stats: React.FC = () => {
  const { stats } = useStats();

  return (
    <div className="flex justify-center place-self-center flex-col text-center gap-y-10 md:flex-row gap-x-[15%] p-4 w-[100%]">
      <div className="flex flex-col gap-2 place-items-center md:w-[10ch]">
        <h2 className="text-7xl font-bold mb-2 w-fit flex items-center drop-shadow-lg">
          <CountUp from={0} to={stats.commands} separator="," duration={0.2} />
        </h2>
        <p className="text-gray-400 uppercase">Commands executed</p>
      </div>

      <div className="flex flex-col gap-2 place-items-center md:w-[10ch]">
        <h2 className="text-7xl font-bold mb-2 w-fit flex items-center drop-shadow-lg">
          <CountUp
            from={0}
            to={stats.users.clients + stats.users.controllers}
            separator=","
          />
        </h2>
        <p className="text-gray-400 uppercase">Users</p>
      </div>
    </div>
  );
};
