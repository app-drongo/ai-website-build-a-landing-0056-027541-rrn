'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Leaf,
  Droplets,
  TreePine,
  Sun,
  Scissors,
  Flower2,
  Sprout,
  Shield,
  Calendar,
} from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Leaf,
      title: 'Organic Lawn Care',
      description:
        'Chemical-free treatments using natural fertilizers and organic pest control methods that are safe for your family and pets.',
      badge: 'Eco-Friendly',
    },
    {
      icon: Droplets,
      title: 'Smart Irrigation Systems',
      description:
        'Water-efficient sprinkler systems with smart controllers that reduce water usage by up to 40% while keeping your landscape healthy.',
      badge: 'Water Conservation',
    },
    {
      icon: TreePine,
      title: 'Native Plant Design',
      description:
        'Custom garden designs featuring drought-resistant native plants that thrive in your local climate and support local wildlife.',
      badge: 'Sustainable Design',
    },
    {
      icon: Sun,
      title: 'Seasonal Maintenance',
      description:
        'Year-round care including spring cleanup, summer pruning, fall leaf removal, and winter protection for your landscape investment.',
      badge: 'Full Service',
    },
    {
      icon: Scissors,
      title: 'Expert Tree Care',
      description:
        'Certified arborists provide professional pruning, disease treatment, and removal services to keep your trees healthy and safe.',
      badge: 'Certified',
    },
    {
      icon: Flower2,
      title: 'Pollinator Gardens',
      description:
        'Bee and butterfly-friendly garden installations that support local ecosystems while adding natural beauty to your property.',
      badge: 'Wildlife Habitat',
    },
    {
      icon: Sprout,
      title: 'Soil Health Programs',
      description:
        'Comprehensive soil testing and amendment programs using compost and organic matter to build healthy, living soil.',
      badge: 'Soil Science',
    },
    {
      icon: Shield,
      title: 'Integrated Pest Management',
      description:
        'Environmentally responsible pest control using beneficial insects, companion planting, and targeted organic treatments.',
      badge: 'Natural Protection',
    },
    {
      icon: Calendar,
      title: 'Maintenance Scheduling',
      description:
        'Customized care calendars with automated reminders for optimal timing of all landscape maintenance activities.',
      badge: 'Planning',
    },
  ];

  const handleViewPortfolio = () => {
    window.location.href = '/portfolio';
  };

  const handleStartProject = () => {
    window.location.href = '/consultation';
  };

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 border-primary/30">
            Our Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Sustainable Landscaping
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              That Works With Nature
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Professional landscape services that prioritize environmental health while creating
            beautiful, thriving outdoor spaces for your property.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs bg-muted/50">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to transform your outdoor space sustainably?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleViewPortfolio}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              View Portfolio
            </button>
            <button
              onClick={handleStartProject}
              className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors"
            >
              Start Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
