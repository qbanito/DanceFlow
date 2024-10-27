import { useState } from 'react';
import { useAI } from '@/lib/openai';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Loader2, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function ContentGenerator() {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('');
  const { loading, generateContent } = useAI();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const content = await generateContent(prompt);
      setResult(content);
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Failed to generate content. Please try again.',
      });
    }
  };

  return (
    <Card className="p-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <Textarea
          placeholder="Enter your prompt..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="min-h-[100px]"
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
              <Send className="mr-2 h-4 w-4" />
              Generate Content
            </>
          )}
        </Button>
      </form>

      {result && (
        <div className="mt-6">
          <h3 className="font-semibold mb-2">Generated Content:</h3>
          <div className="p-4 bg-muted rounded-lg whitespace-pre-wrap">
            {result}
          </div>
        </div>
      )}
    </Card>
  );
}