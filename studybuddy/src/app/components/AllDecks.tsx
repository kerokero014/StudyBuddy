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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/app/API/decks");
        if (!response.ok) {
          throw new Error("Failed to fetch decks");
        }
        const data = await response.json();
        setDecks(data);
      } catch (error) {
        setError("Error fetching decks. Please try again later.");
      }
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-lg mx-auto">
      {error ? (
        <p className="text-red-800">{error}</p>
      ) : (
        <ul className="grid gap-4">
          {decks.map((deck) => (
            <li key={deck.id} className="bg-gray-100 p-4 rounded-md">
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
