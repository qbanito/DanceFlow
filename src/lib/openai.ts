import { useState } from 'react';

interface UseAIResponse {
  loading: boolean;
  error: string | null;
  generateContent: (prompt: string) => Promise<string>;
  generateImage: (prompt: string) => Promise<string>;
}

export function useAI(): UseAIResponse {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateContent = async (prompt: string): Promise<string> => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(`${import.meta.env.VITE_OPENAI_API_URL}/generate-content`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) throw new Error('Failed to generate content');
      
      const data = await response.json();
      return data.content;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to generate content');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const generateImage = async (prompt: string): Promise<string> => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(`${import.meta.env.VITE_OPENAI_API_URL}/generate-image`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) throw new Error('Failed to generate image');
      
      const data = await response.json();
      return data.imageUrl;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to generate image');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, generateContent, generateImage };
}