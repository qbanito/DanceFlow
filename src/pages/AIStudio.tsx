import { ContentGenerator } from '@/components/ai/ContentGenerator';
import { ImageGenerator } from '@/components/ai/ImageGenerator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export function AIStudio() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">AI Creation Studio</h1>
      
      <Tabs defaultValue="content" className="max-w-3xl mx-auto">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="content">Generate Content</TabsTrigger>
          <TabsTrigger value="image">Generate Image</TabsTrigger>
        </TabsList>
        
        <TabsContent value="content">
          <ContentGenerator />
        </TabsContent>
        
        <TabsContent value="image">
          <ImageGenerator />
        </TabsContent>
      </Tabs>
    </div>
  );
}