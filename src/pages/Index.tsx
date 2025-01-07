import { Button } from "@/components/ui/button";
import { Hero } from "@/components/Hero";
import { NewsCard } from "@/components/NewsCard";
import { Link } from "react-router-dom";

const Index = () => {
  const news = [
    {
      title: "Летняя Школа",
      date: "Июнь, 2025",
      content: "Приводите своих детей",
    },
    {
      title: "Новый набор",
      date: "Сентябрь 1, 2025",
      content: "Мы рады объявить новый набор",
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-primary">Последние новости</h2>
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
          <h2 className="text-3xl font-bold text-tertiary mb-8">
            Присоединяйтесь к нашей семье
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Наслаждайтесь танцами в нашей современной студии под руководством
            опытного инструктора.
          </p>
          <Link to="/contacts">
            <Button
              size="lg"
              className="bg-primary hover:bg-tertiary text-white"
            >
              Свяжитесь с нами
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
