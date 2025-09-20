'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Leaf,
  Users,
  Award,
  TreePine,
  ArrowRight,
  Quote,
  Star,
  Droplets,
  Heart,
  Recycle,
} from 'lucide-react';

export default function About() {
  const handleViewPortfolio = () => {
    window.location.href = '/portfolio';
  };

  const handleStartProject = () => {
    window.location.href = '/consultation';
  };

  const handleReadStory = () => {
    window.location.href = '/story';
  };

  const handleViewTeam = () => {
    window.location.href = '/team';
  };

  const values = [
    {
      icon: Leaf,
      title: 'Eco-Friendly First',
      description:
        "We're committed to sustainable landscaping practices that protect our environment while creating beautiful outdoor spaces for generations to enjoy.",
    },
    {
      icon: Recycle,
      title: 'Organic Innovation',
      description:
        'We constantly explore new organic methods and native plant solutions, bringing cutting-edge sustainable techniques to your landscape.',
    },
    {
      icon: Heart,
      title: 'Customer Obsessed',
      description:
        "Your outdoor vision is our passion. We design every landscape with your family's enjoyment and environmental stewardship at the center.",
    },
    {
      icon: TreePine,
      title: 'Local Impact',
      description:
        "From residential gardens to commercial properties, we're helping our community create healthier, more sustainable outdoor environments.",
    },
  ];

  const stats = [
    { value: '2015', label: 'Founded', icon: Award },
    { value: '2,500+', label: 'Happy Clients', icon: Users },
    { value: '40%', label: 'Water Savings', icon: Droplets },
    { value: '98%', label: 'Satisfaction Rate', icon: Star },
  ];

  const team = [
    {
      name: 'Maria Rodriguez',
      role: 'Founder & Master Landscaper',
      image: 'MR',
      bio: 'Certified organic horticulturist with 20+ years creating sustainable landscapes.',
    },
    {
      name: 'James Thompson',
      role: 'Sustainable Design Director',
      image: 'JT',
      bio: 'Award-winning landscape architect specializing in native plant ecosystems.',
    },
    {
      name: 'Sarah Chen',
      role: 'Organic Care Specialist',
      image: 'SC',
      bio: 'Expert in organic lawn care and natural pest management solutions.',
    },
    {
      name: 'David Martinez',
      role: 'Tree Care Arborist',
      image: 'DM',
      bio: 'Certified arborist passionate about tree health and sustainable pruning practices.',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge
            variant="outline"
            className="mb-4 px-4 py-2 bg-primary/10 text-primary border-primary/20"
          >
            About GreenThumb Landscapes
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Cultivating Sustainable
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Outdoor Environments
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We're a passionate team of landscapers, designers, and environmental stewards on a
            mission to create beautiful, sustainable outdoor spaces that benefit both families and
            our planet.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Our Story</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2015 by master landscaper Maria Rodriguez, GreenThumb Landscapes began
                with a simple mission: creating stunning outdoor spaces without compromising our
                environment's health.
              </p>
              <p>
                After years of seeing chemical-heavy landscaping damage local ecosystems, we
                pioneered organic lawn care and native plant design that actually improves soil
                health and conserves water.
              </p>
              <p>
                Today, we're proud to serve over 2,500 environmentally conscious homeowners and
                businesses, helping them achieve 40% water savings while maintaining the most
                beautiful landscapes in the region.
              </p>
            </div>
            <Button onClick={handleReadStory} className="group bg-primary hover:bg-primary/90">
              Read Our Full Story
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="relative">
            <Card className="border-primary/20 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-primary/20 via-background to-accent/20 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="size-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                      <Quote className="size-8 text-primary" />
                    </div>
                    <blockquote className="text-lg font-medium max-w-sm">
                      "Beautiful landscapes and environmental stewardship aren't mutually exclusive
                      - they're essential partners."
                    </blockquote>
                    <cite className="text-sm text-muted-foreground">
                      - Maria Rodriguez, Founder
                    </cite>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className="text-center border-primary/20 hover:border-primary/30 transition-colors bg-card/50"
              >
                <CardContent className="p-6">
                  <div className="size-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-2 text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Our Values</h3>
            <p className="text-muted-foreground">
              The environmental principles that guide every landscape design and maintenance
              decision we make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="border-primary/20 hover:border-primary/30 transition-all duration-300 group bg-card/50"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="size-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Team */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Meet Our Team</h3>
            <p className="text-muted-foreground">
              The certified landscaping professionals behind our sustainable success, working
              together to create eco-friendly outdoor spaces.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {team.map((member, index) => (
              <Card
                key={index}
                className="border-primary/20 hover:border-primary/30 transition-all duration-300 group bg-card/50"
              >
                <CardContent className="p-6 text-center">
                  <div className="size-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-xl">
                    {member.image}
                  </div>
                  <h4 className="font-semibold mb-1">{member.name}</h4>
                  <p className="text-sm text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <Button
              onClick={handleViewTeam}
              variant="outline"
              className="group border-primary/20 hover:border-primary/30"
            >
              View All Team Members
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-20">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8 lg:p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-5 text-primary fill-current" />
                ))}
              </div>
              <blockquote className="text-xl lg:text-2xl font-medium mb-6 max-w-3xl mx-auto">
                "GreenThumb Landscapes transformed our property into a stunning, eco-friendly oasis.
                Our water bill dropped 40% and we've never had a more beautiful, healthy lawn and
                garden."
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="size-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-secondary-foreground font-bold">
                  LW
                </div>
                <div className="text-left">
                  <div className="font-semibold">Lisa Williams</div>
                  <div className="text-sm text-muted-foreground">Homeowner, Riverside Estates</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleViewPortfolio}
              size="lg"
              className="bg-primary hover:bg-primary/90"
            >
              View Portfolio
              <ArrowRight className="ml-2 size-4" />
            </Button>
            <Button
              onClick={handleStartProject}
              variant="outline"
              size="lg"
              className="border-primary/20 hover:border-primary/30"
            >
              Start Project
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
