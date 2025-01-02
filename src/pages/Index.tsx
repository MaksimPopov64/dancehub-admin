import { Button } from "@/components/ui/button";
import { Hero } from "@/components/Hero";
import { NewsCard } from "@/components/NewsCard";
import { Link } from "react-router-dom";

const Index = () => {
  const news = [
    {
      title: "Summer Dance Workshop",
      date: "June 15, 2024",
      content: "Join us for an intensive summer dance workshop with guest instructors from around the world.",
    },
    {
      title: "New Ballet Classes",
      date: "May 1, 2024",
      content: "We're excited to announce new beginner ballet classes starting next month.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero />
      
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-primary">Latest News</h2>
          <Link to="/admin">
            <Button variant="outline">Admin Panel</Button>
          </Link>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {news.map((item, index) => (
            <NewsCard key={index} {...item} />
          ))}
        </div>
      </section>

      <section className="bg-secondary/10 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-tertiary mb-8">Join Our Dance Family</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience the joy of dance in our state-of-the-art studio with expert instructors.
          </p>
          <Button size="lg" className="bg-primary hover:bg-tertiary text-white">
            Contact Us
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;