import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-r from-tertiary to-primary text-white">
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 text-center space-y-6 p-4 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold">Грация в движении</h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto">
          Где страсть встречается с точностью в каждом танцевальном шаге
        </p>
        <Button
          size="lg"
          className="bg-white text-primary hover:bg-secondary hover:text-white"
        >
           Присоединяйтесь
        </Button>
      </div>
    </div>
  );
};