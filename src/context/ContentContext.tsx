// src/context/ContentContext.tsx
import { createContext, useContext, useState, useEffect } from "react";
import { ContentDto } from "../pages/api/get-contents";

interface ContentContextData {
  contents: ContentDto[];
  isLoading: boolean;
  error: string | null;
}

const ContentContext = createContext<ContentContextData>({
  contents: [],
  isLoading: false,
  error: null,
});

export function useContentContext() {
  return useContext(ContentContext);
}

export function ContentProvider({ children }: { children: React.ReactNode }) {
  const [contents, setContents] = useState<ContentDto[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchContents() {
      setIsLoading(true);
      try {
        const response = await fetch("/api/get-contents");
        const data = await response.json();
        setContents(data.data.contents);
        setError(null);
      } catch (err) {
        setError("Failed to fetch content data");
      } finally {
        setIsLoading(false);
      }
    }

    fetchContents();
  }, []);

  return (
    <ContentContext.Provider value={{ contents, isLoading, error }}>
      {children}
    </ContentContext.Provider>
  );
}
