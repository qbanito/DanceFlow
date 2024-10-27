import { useState } from 'react';
import { useAI } from '@/lib/openai';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Loader2, Image } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function ImageGenerator() {
  const [prompt, setPrompt] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const { loading, generateImage } = useAI();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const url = await generateImage(prompt);
      setImageUrl(url);
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Failed to generate image. Please try again.',
      });
    }
  };

  return (
    <Card className="p-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          placeholder="Describe the image you want to generate..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        
        <Button
          type="submit"
          disabled={loading || !prompt}
          className="w-full"
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <Image className="mr-2 h-4 w-4" />
              Generate Image
            </>
          )}
        </Button>
      </form>

      {imageUrl && (
        <div className="mt-6">
          <h3 className="font-semibold mb-2">Generated Image:</h3>
          <img
            src={imageUrl}
            alt="Generated content"
            className="rounded-lg w-full"
          />
        </div>
      )}
    </Card>
  );
}