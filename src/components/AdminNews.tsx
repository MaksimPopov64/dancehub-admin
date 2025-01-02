import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";

interface NewsItem {
  id: number;
  title: string;
  content: string;
  date: string;
}

export const AdminNews = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newItem = {
      id: Date.now(),
      title,
      content,
      date: new Date().toLocaleDateString(),
    };
    setNews([newItem, ...news]);
    setTitle("");
    setContent("");
    toast({
      title: "Success",
      description: "News item has been added.",
    });
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-primary mb-6">Управление новостями</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4 mb-8">
        <div>
          <label className="block text-sm font-medium mb-1">Заголовок</label>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Текст</label>
          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            className="w-full"
            rows={4}
          />
        </div>
        <Button type="submit" className="w-full">Добавить новости</Button>
      </form>

      <div className="space-y-4">
        {news.map((item) => (
          <div
            key={item.id}
            className="p-4 border rounded-lg hover:shadow-md transition-shadow"
          >
            <h3 className="font-bold text-lg text-primary">{item.title}</h3>
            <p className="text-sm text-secondary mb-2">{item.date}</p>
            <p className="text-gray-600">{item.content}</p>
            <Button
              variant="destructive"
              size="sm"
              className="mt-2"
              onClick={() => {
                setNews(news.filter((n) => n.id !== item.id));
                toast({
                  title: "Deleted",
                  description: "News item has been removed.",
                });
              }}
            >
              Удалить
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};