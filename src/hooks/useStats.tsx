"use client";

import { useEffect, useState } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const useStats = () => {
  const [stats, setStats] = useState<{
    commands: number;
    users: {
      controllers: number;
      clients: number;
    };
  }>({
    commands: 0,
    users: {
      controllers: 0,
      clients: 0,
    },
  });

  useEffect(() => {
    const fetchStats = async () => {
      console.log(API_URL);
      const res = await fetch(`${API_URL}/public/stats`, {
        method: "GET",
      });
      const data = await res.json();
      console.log(data);
      setStats(data);
    };
    fetchStats();
  }, []);

  return { stats };
};
