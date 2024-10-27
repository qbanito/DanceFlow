import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Mail, Star } from 'lucide-react';

const instructors = [
  {
    id: 1,
    name: 'Maria Rodriguez',
    specialty: 'Salsa & Bachata',
    experience: '10+ years',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    bio: 'International dance champion with a passion for teaching Latin dance.',
  },
  {
    id: 2,
    name: 'Carlos Martinez',
    specialty: 'Bachata & Merengue',
    experience: '8 years',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    bio: 'Professional choreographer specializing in modern Latin dance fusion.',
  },
  {
    id: 3,
    name: 'Sofia Garcia',
    specialty: 'Salsa & Cha-cha',
    experience: '12 years',
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    bio: 'Former competitive dancer turned instructor with a focus on technique.',
  },
];

export function Instructors() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Our Instructors</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {instructors.map((instructor) => (
          <Card key={instructor.id} className="overflow-hidden">
            <div className="relative">
              <img
                src={instructor.image}
                alt={instructor.name}
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                <span className="font-medium">{instructor.rating}</span>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{instructor.name}</h3>
              <p className="text-[#FF4B3E] font-medium mb-2">{instructor.specialty}</p>
              <p className="text-gray-600 mb-4">{instructor.bio}</p>
              
              <div className="flex items-center text-sm text-gray-500 mb-6">
                <Calendar className="h-4 w-4 mr-2" />
                {instructor.experience} experience
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline">
                  <Mail className="h-4 w-4 mr-2" />
                  Contact
                </Button>
                <Button>Book Class</Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}