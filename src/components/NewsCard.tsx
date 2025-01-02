import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface NewsCardProps {
  title: string;
  date: string;
  content: string;
}

export const NewsCard = ({ title, date, content }: NewsCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-primary text-xl">{title}</CardTitle>
        <p className="text-secondary text-sm">{date}</p>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{content}</p>
      </CardContent>
    </Card>
  );
};