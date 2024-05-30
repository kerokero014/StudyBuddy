//function to post a form that will create a new deck and upload it to the database

"use client";
import { useState } from "react";

const PostDeck = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("/API/decks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });
      if (!response.ok) {
        throw new Error("Failed to create deck");
      }
      setTitle("");
      setDescription("");
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
      <label className="block mt-4">
        <span className="text-gray-700">Title</span>
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          className="mt-1 block w-full"
          required
        />
      </label>
      <label className="block mt-4">
        <span className="text-gray-700">Description</span>
        <textarea
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          className="mt-1 block w-full"
          required
        />
      </label>
      <button
        type="submit"
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        disabled={loading}
      >
        Create Deck
      </button>
      {error && <p className="text-red-800 text-2xl">{error}</p>}
    </form>
  );
};

export default PostDeck;
