'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Leaf,
  TreePine,
  Scissors,
  Calendar,
  Sprout,
  Flower,
  Sun,
  Droplets,
  ArrowRight,
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: 'lawn-care',
      title: 'Organic Lawn Care',
      description:
        'Comprehensive lawn maintenance using eco-friendly fertilizers and sustainable practices for a lush, healthy yard.',
      icon: Leaf,
      badge: 'Eco-Friendly',
      features: ['Organic Fertilization', 'Weed Control', 'Soil Health Testing'],
      link: '/services/lawn-care',
    },
    {
      id: 'garden-design',
      title: 'Sustainable Garden Design',
      description:
        'Custom garden designs featuring native plants and water-efficient landscaping solutions.',
      icon: Flower,
      features: ['Native Plant Selection', 'Water-Wise Design', 'Pollinator Gardens'],
      link: '/services/garden-design',
    },
    {
      id: 'tree-services',
      title: 'Professional Tree Care',
      description:
        'Expert tree trimming, pruning, and health assessments to maintain beautiful, safe trees.',
      icon: TreePine,
      badge: 'Certified',
      features: ['ISA Certified Arborists', 'Health Assessments', 'Storm Damage Prevention'],
      link: '/services/tree-care',
    },
    {
      id: 'seasonal-maintenance',
      title: 'Seasonal Property Care',
      description:
        "Year-round maintenance programs tailored to your landscape's changing needs throughout the seasons.",
      icon: Calendar,
      features: ['Spring Cleanup', 'Fall Preparation', 'Winter Protection'],
      link: '/services/seasonal-care',
    },
    {
      id: 'irrigation',
      title: 'Smart Irrigation Systems',
      description:
        'Water-efficient irrigation solutions that reduce consumption while keeping your landscape thriving.',
      icon: Droplets,
      features: ['Smart Controllers', 'Drip Systems', 'Water Conservation'],
      link: '/services/irrigation',
    },
    {
      id: 'landscape-installation',
      title: 'Eco Landscape Installation',
      description:
        'Complete landscape transformations using sustainable materials and environmentally conscious methods.',
      icon: Sprout,
      features: ['Sustainable Materials', 'Soil Restoration', 'Habitat Creation'],
      link: '/services/installation',
    },
  ];

  const handleViewPortfolio = () => {
    window.location.href = '/portfolio';
  };

  const handleStartProject = () => {
    window.location.href = '/consultation';
  };

  const handleScheduleConsultation = () => {
    window.location.href = '/consultation';
  };

  const handleViewAllServices = () => {
    window.location.href = '/services';
  };

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 border-primary/30">
            <Leaf className="size-3 mr-1" />
            Sustainable Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Nurturing Nature,
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Enhancing Beauty
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Professional landscaping services that prioritize environmental stewardship and create
            stunning outdoor spaces
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(service => {
            const Icon = service.icon;

            return (
              <Card
                key={service.id}
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <CardHeader className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    {service.badge && (
                      <Badge
                        variant="secondary"
                        className="text-xs bg-primary/10 text-primary border-primary/20"
                      >
                        {service.badge}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative space-y-4">
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>

                  {/* Features List */}
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="size-1.5 rounded-full bg-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* View Portfolio Link */}
                  <Button
                    variant="ghost"
                    className="w-full group/btn justify-between hover:bg-primary/10"
                    onClick={handleViewPortfolio}
                  >
                    <span>View Portfolio</span>
                    <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300 pointer-events-none" />
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
            <Button size="lg" onClick={handleScheduleConsultation}>
              <Calendar className="mr-2 size-4" />
              Free Eco-Assessment
            </Button>
            <Button size="lg" variant="outline" onClick={handleViewAllServices}>
              Explore All Services
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
