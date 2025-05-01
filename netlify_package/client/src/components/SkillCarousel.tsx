import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

interface SkillPath {
  id: number;
  title: string;
  description: string;
  image: string;
  lessons: number;
  duration: number;
  badge: {
    text: string;
    type: "popular" | "new" | "beginner";
  };
}

const skillPaths: SkillPath[] = [
  {
    id: 1,
    title: "Remote Team Management",
    description: "Master the art of leading distributed teams effectively.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    lessons: 14,
    duration: 70,
    badge: {
      text: "Popular",
      type: "popular"
    }
  },
  {
    id: 2,
    title: "Digital Communication",
    description: "Communicate clearly and effectively in digital workspaces.",
    image: "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    lessons: 10,
    duration: 50,
    badge: {
      text: "New",
      type: "new"
    }
  },
  {
    id: 3,
    title: "Remote Productivity",
    description: "Stay focused and productive while working from anywhere.",
    image: "https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    lessons: 12,
    duration: 60,
    badge: {
      text: "Beginner",
      type: "beginner"
    }
  }
];

const SkillCard = ({ skillPath }: { skillPath: SkillPath }) => {
  const getBadgeStyle = (type: string) => {
    switch (type) {
      case "popular":
        return "bg-blue-100 text-primary";
      case "new":
        return "bg-amber-100 text-accent";
      case "beginner":
        return "bg-green-100 text-secondary";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card className="bg-gray-50 border border-gray-100 overflow-hidden">
      <img 
        src={skillPath.image} 
        alt={skillPath.title} 
        className="h-40 w-full object-cover"
      />
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2">{skillPath.title}</h3>
        <p className="text-gray-600 mb-4">{skillPath.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">
            {skillPath.lessons} lessons • {skillPath.duration} min total
          </span>
          <Badge variant="outline" className={getBadgeStyle(skillPath.badge.type)}>
            {skillPath.badge.text}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

const SkillCarousel = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Explore Skill Paths</h2>
          <p className="mt-4 text-lg text-gray-600">Curated learning paths designed for remote professionals.</p>
        </div>
        
        <Carousel className="w-full">
          <CarouselContent>
            {skillPaths.map((path) => (
              <CarouselItem key={path.id} className="md:basis-1/3 pl-4">
                <SkillCard skillPath={path} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute -left-4 top-1/2 transform -translate-y-1/2" />
          <CarouselNext className="absolute -right-4 top-1/2 transform -translate-y-1/2" />
        </Carousel>
      </div>
    </section>
  );
};

export default SkillCarousel;
