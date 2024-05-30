// components/DecksList.js

"use client";
import { useState, useEffect } from "react";

type Deck = {
  id: number;
  title: string;
  description: string;
};

const DecksList = () => {
  const [decks, setDecks] = useState<Deck[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  console.log("DecksList rendered");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch("/API/decks", {
          method: "GET",
        });
        if (!response.ok) {
          throw new Error("Failed to fetch decks");
        }
        const data = await response.json();
        if (
          Array.isArray(data) &&
          data.every(
            (item) =>
              typeof item.id === "number" &&
              typeof item.title === "string" &&
              typeof item.description === "string"
          )
        ) {
          setDecks(data);
        } else {
          throw new Error("Invalid data format");
        }
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-lg mx-auto rounded-xl">
      {loading ? (
        <p className="text-xl">Loading...</p>
      ) : error ? (
        <p className="text-red-800 text-2xl">{error}</p>
      ) : (
        <ul className="grid gap-4">
          {decks.map((deck) => (
            <li key={deck.id} className="bg-slate-100 p-4 rounded-xl">
              <h2 className="text-xl font-semibold">{deck.title}</h2>
              <p className="text-gray-600">{deck.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DecksList;
