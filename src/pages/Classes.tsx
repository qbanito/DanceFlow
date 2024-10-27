import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import {
  Search,
  Filter,
  Clock,
  User,
  Play,
  Bookmark,
  Star,
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const danceClasses = [
  {
    id: 1,
    title: 'Salsa Fundamentals',
    level: 'Beginner',
    instructor: 'Maria Rodriguez',
    duration: '45 mins',
    rating: 4.8,
    students: 1234,
    image: 'https://images.unsplash.com/photo-1504609813442-a8924e83f76e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Salsa', 'Basics'],
  },
  {
    id: 2,
    title: 'Advanced Bachata',
    level: 'Advanced',
    instructor: 'Carlos Martinez',
    duration: '60 mins',
    rating: 4.9,
    students: 856,
    image: 'https://images.unsplash.com/photo-1545959570-a94084071b5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Bachata', 'Advanced'],
  },
  {
    id: 3,
    title: 'Salsa Partner Work',
    level: 'Intermediate',
    instructor: 'Sofia Garcia',
    duration: '60 mins',
    rating: 4.7,
    students: 945,
    image: 'https://images.unsplash.com/photo-1545247181-516773cae754?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Salsa', 'Partner Work'],
  },
  {
    id: 4,
    title: 'Cuban Salsa Basics',
    level: 'Beginner',
    instructor: 'Luis Morales',
    duration: '45 mins',
    rating: 4.6,
    students: 1567,
    image: 'https://images.unsplash.com/photo-1547153760-18fc86324498?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Cuban Salsa', 'Basics'],
  },
  {
    id: 5,
    title: 'Bachata Sensual',
    level: 'Intermediate',
    instructor: 'Ana Torres',
    duration: '60 mins',
    rating: 4.9,
    students: 2134,
    image: 'https://images.unsplash.com/photo-1566224425427-998503a013f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Bachata', 'Sensual'],
  },
  {
    id: 6,
    title: 'Merengue Rhythm',
    level: 'Beginner',
    instructor: 'Pedro Sanchez',
    duration: '45 mins',
    rating: 4.7,
    students: 678,
    image: 'https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Merengue', 'Rhythm'],
  },
  {
    id: 7,
    title: 'Advanced Salsa Spins',
    level: 'Advanced',
    instructor: 'Isabella Ruiz',
    duration: '75 mins',
    rating: 4.8,
    students: 456,
    image: 'https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Salsa', 'Spins'],
  },
  {
    id: 8,
    title: 'Cha Cha Foundations',
    level: 'Beginner',
    instructor: 'Ricardo Lopez',
    duration: '45 mins',
    rating: 4.6,
    students: 890,
    image: 'https://images.unsplash.com/photo-1546805022-9f8c92a15f64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Cha Cha', 'Basics'],
  },
  {
    id: 9,
    title: 'Salsa Shines',
    level: 'Intermediate',
    instructor: 'Carmen Diaz',
    duration: '60 mins',
    rating: 4.7,
    students: 745,
    image: 'https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Salsa', 'Shines'],
  },
  {
    id: 10,
    title: 'Bachata Moderna',
    level: 'Advanced',
    instructor: 'Miguel Angel',
    duration: '60 mins',
    rating: 4.9,
    students: 1234,
    image: 'https://images.unsplash.com/photo-1516298773066-c48f8e9bd92b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Bachata', 'Modern'],
  },
];

const styles = ['All', 'Salsa', 'Bachata', 'Merengue', 'Cha Cha'];

export function Classes() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [selectedStyle, setSelectedStyle] = useState('All');

  const filteredClasses = danceClasses.filter((class_) => {
    const matchesSearch = 
      class_.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      class_.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLevel = selectedLevel === 'all' || class_.level.toLowerCase() === selectedLevel;
    const matchesStyle = selectedStyle === 'All' || class_.tags.includes(selectedStyle);
    return matchesSearch && matchesLevel && matchesStyle;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Explore Dance Classes</h1>
          <p className="text-xl text-gray-600">
            Learn from world-class instructors at your own pace
          </p>
        </motion.div>

        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search classes or instructors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedLevel} onValueChange={setSelectedLevel}>
              <SelectTrigger className="w-full md:w-[200px]">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Filter by level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="beginner">Beginner</SelectItem>
                <SelectItem value="intermediate">Intermediate</SelectItem>
                <SelectItem value="advanced">Advanced</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
            {styles.map((style) => (
              <Button
                key={style}
                variant={selectedStyle === style ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedStyle(style)}
                className="whitespace-nowrap"
              >
                {style}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredClasses.map((class_) => (
            <motion.div
              key={class_.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
                <div className="relative">
                  <img
                    src={class_.image}
                    alt={class_.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute top-2 right-2 bg-white/90 hover:bg-white"
                  >
                    <Bookmark className="h-5 w-5" />
                  </Button>
                </div>
                
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    {class_.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2 line-clamp-1">
                    {class_.title}
                  </h3>
                  
                  <div className="flex items-center text-gray-600 mb-3">
                    <User className="h-4 w-4 mr-1" />
                    <span className="text-sm">{class_.instructor}</span>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1 text-gray-500" />
                      <span className="text-sm text-gray-600">{class_.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 mr-1" />
                      <span className="text-sm font-medium">{class_.rating}</span>
                      <span className="text-sm text-gray-500 ml-1">
                        ({class_.students.toLocaleString()})
                      </span>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-[#FF4B3E] hover:bg-[#FF4B3E]/90">
                    <Play className="h-4 w-4 mr-2" />
                    Start Learning
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}