import { motion } from 'framer-motion';
import { Video, Users, Brain, Award } from 'lucide-react';

const features = [
  {
    icon: Video,
    title: 'HD Video Lessons',
    description: 'Crystal-clear tutorials with multiple camera angles',
  },
  {
    icon: Brain,
    title: 'AI Dance Coach',
    description: 'Real-time feedback powered by artificial intelligence',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Connect with dancers from around the world',
  },
  {
    icon: Award,
    title: 'Certification',
    description: 'Earn certificates as you progress',
  },
];

export function Features() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Why Choose DanceFlow</h2>
          <p className="text-xl text-gray-600">Everything you need to become a confident dancer</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF4B3E]/5 to-[#FFB20F]/5 rounded-xl transform group-hover:scale-105 transition-transform duration-300" />
              <div className="relative p-8 text-center">
                <feature.icon className="h-12 w-12 mx-auto mb-6 text-[#FF4B3E]" />
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}