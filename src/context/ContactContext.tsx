// src/context/ContactContext.tsx
import { createContext, useContext, useState, useEffect } from "react";
import { ContactDto } from "@src/pages/api/get-contact";

interface ContactContextData {
  contact: ContactDto;
  isLoading: boolean;
  error: string | null;
}

const ContactContext = createContext<ContactContextData>({
  contact: {},
  isLoading: false,
  error: null,
});

export function useContactContext() {
  return useContext(ContactContext);
}

export function ContactProvider({ children }: { children: React.ReactNode }) {
  const [contact, setContact] = useState<ContactDto>({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchContact() {
      setIsLoading(true);
      try {
        const response = await fetch("/api/get-contact");
        const data = await response.json();
        setContact(data.data.contact);
        setError(null);
      } catch (err) {
        setError("Failed to fetch contact data");
      } finally {
        setIsLoading(false);
      }
    }

    fetchContact();
  }, []);

  return (
    <ContactContext.Provider value={{ contact, isLoading, error }}>
      {children}
    </ContactContext.Provider>
  );
}
