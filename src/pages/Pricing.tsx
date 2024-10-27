import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const plans = [
  {
    name: 'Basic',
    price: 'Free',
    description: 'Perfect for beginners',
    features: [
      'Access to basic tutorials',
      'Community forum access',
      'Basic progress tracking',
      'Limited class recordings',
    ],
    button: 'Get Started',
    popular: false,
  },
  {
    name: 'Pro',
    price: '$29',
    description: 'Best for dedicated dancers',
    features: [
      'All Basic features',
      'Live virtual classes',
      'AI-powered feedback',
      'Unlimited class recordings',
      'Priority support',
    ],
    button: 'Start Pro',
    popular: true,
  },
  {
    name: 'Elite',
    price: '$49',
    description: 'For serious performers',
    features: [
      'All Pro features',
      '1-on-1 coaching sessions',
      'Custom training plans',
      'Performance opportunities',
      'Workshop access',
      'VIP events',
    ],
    button: 'Go Elite',
    popular: false,
  },
];

export function Pricing() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
        <p className="text-xl text-gray-600">
          Choose the perfect plan for your dance journey
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={`relative ${
              plan.popular
                ? 'border-[#FF4B3E] shadow-lg scale-105'
                : 'border-gray-200'
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-[#FF4B3E] text-white px-3 py-1 rounded-full text-sm">
                  Most Popular
                </span>
              </div>
            )}

            <CardHeader>
              <CardTitle className="text-2xl">{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.price !== 'Free' && (
                  <span className="text-gray-600">/month</span>
                )}
              </div>

              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="h-5 w-5 text-[#2EC4B6] mr-2" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>

            <CardFooter>
              <Button
                className={`w-full ${
                  plan.popular
                    ? 'bg-[#FF4B3E] hover:bg-[#FF4B3E]/90'
                    : ''
                }`}
              >
                {plan.button}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}