import { useEffect, useState } from "react";
import { ClientData } from "../types";
import clientData from "../data/client-data.json";

type Status = "pending" | "success";

const useClients = (): [Status, ClientData[]] => {
  // Simulate loading state
  const [status, setStatus] = useState<Status>("pending");
  const [clients, setClients] = useState<ClientData[]>([]);

  useEffect(() => {
    /**
     * Simulate fetching from external API
     *
     * Fetching from pastebin directly not possible due to CORS restrictions
     * Alternatives are:
     * - Call pastebin API via back-end
     * - Use pastebin scraping API, requires PRO account
     */
    const timer = setTimeout(() => {
      setClients(clientData);
      setStatus("success");
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return [status, clients];
};

export default useClients;
