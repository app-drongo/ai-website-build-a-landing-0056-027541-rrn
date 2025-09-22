'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Navigation, Leaf, TreePine, Flower, Sprout } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function ServiceAreaMap() {
  const router = useRouter();

  // ACTION_PLACEHOLDER_START
  const handlePrimaryAction = () => {
    router.push('/temp'); // View full service area details
  };
  const handleSecondaryAction = () => {
    router.push('/temp'); // Start project consultation
  };
  // ACTION_PLACEHOLDER_END

  const serviceAreas = [
    {
      id: 1,
      name: 'Riverside Gardens',
      projects: '45+ projects',
      type: 'Residential',
      lat: 34.0522,
      lng: -118.2437,
    },
    {
      id: 2,
      name: 'Downtown Commercial',
      projects: '28+ projects',
      type: 'Commercial',
      lat: 34.0622,
      lng: -118.2537,
    },
    {
      id: 3,
      name: 'Hillside Estates',
      projects: '62+ projects',
      type: 'Premium',
      lat: 34.0422,
      lng: -118.2337,
    },
  ];

  const services = [
    { icon: TreePine, name: 'Tree Care', count: '150+ trees' },
    { icon: Flower, name: 'Garden Design', count: '85+ gardens' },
    { icon: Leaf, name: 'Eco Landscaping', count: '120+ projects' },
    { icon: Sprout, name: 'Native Plants', count: '200+ species' },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Our Service Areas & Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover sustainable landscaping transformations across the region
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map Area */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden">
              <div className="relative aspect-[16/10] bg-muted">
                {/* Placeholder Map */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/10">
                  <img
                    src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=750&fit=crop"
                    alt="Service area map with green landscapes"
                    className="w-full h-full object-cover opacity-60"
                  />
                </div>

                {/* Map Overlay Elements */}
                <div className="absolute inset-0">
                  {/* Service Area Markers */}
                  <div className="absolute top-1/4 left-1/3 transform -translate-x-1/2">
                    <div className="relative group">
                      <div className="absolute -inset-2 bg-primary/30 rounded-full animate-pulse" />
                      <Button
                        size="icon"
                        className="rounded-full size-10 bg-primary hover:bg-primary/90"
                      >
                        <Leaf className="size-5" />
                      </Button>
                      <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Card className="p-2 whitespace-nowrap">
                          <p className="text-xs font-semibold">Riverside Gardens</p>
                          <p className="text-xs text-muted-foreground">45+ completed projects</p>
                        </Card>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-1/2 right-1/3">
                    <div className="relative group">
                      <div className="absolute -inset-2 bg-primary/30 rounded-full animate-pulse" />
                      <Button
                        size="icon"
                        className="rounded-full size-10 bg-primary hover:bg-primary/90"
                      >
                        <TreePine className="size-5" />
                      </Button>
                    </div>
                  </div>

                  <div className="absolute bottom-1/3 left-1/2">
                    <div className="relative group">
                      <div className="absolute -inset-2 bg-primary/30 rounded-full animate-pulse" />
                      <Button
                        size="icon"
                        className="rounded-full size-10 bg-primary hover:bg-primary/90"
                      >
                        <Flower className="size-5" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Map Controls */}
                <div className="absolute top-4 right-4 space-y-2">
                  <Button
                    size="icon"
                    variant="secondary"
                    className="shadow-lg"
                    onClick={handlePrimaryAction}
                  >
                    <Navigation className="size-4" />
                  </Button>
                </div>

                {/* Legend */}
                <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm rounded-lg p-3">
                  <div className="flex items-center gap-4 text-xs">
                    <div className="flex items-center gap-1">
                      <div className="size-3 bg-primary rounded-full" />
                      <span>Active Projects</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="size-3 bg-accent rounded-full" />
                      <span>Completed</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Service Areas List */}
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <MapPin className="size-5 text-primary" />
                  Service Areas
                </h3>
                <div className="space-y-3">
                  {serviceAreas.map(area => (
                    <div
                      key={area.id}
                      className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted/50 cursor-pointer transition-colors"
                    >
                      <div>
                        <p className="font-medium text-sm">{area.name}</p>
                        <p className="text-xs text-muted-foreground">{area.type}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-sm">{area.projects}</p>
                        <Badge variant="secondary" className="text-xs">
                          Active
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Services Overview */}
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-4">Our Expertise</h3>
                <div className="space-y-3">
                  {services.map((service, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <service.icon className="size-5 text-primary" />
                        </div>
                        <span className="text-sm font-medium">{service.name}</span>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {service.count}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <div className="space-y-3">
              <Button className="w-full" size="lg" onClick={handlePrimaryAction}>
                View Portfolio
              </Button>
              <Button
                variant="outline"
                className="w-full"
                size="lg"
                onClick={handleSecondaryAction}
              >
                Start Project
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
