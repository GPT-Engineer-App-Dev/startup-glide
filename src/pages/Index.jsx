import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const Index = () => {
  const [testimonials] = useState([
    { name: "John Doe", feedback: "This product is amazing!", photo: "/placeholder.svg" },
    { name: "Jane Smith", feedback: "I love using this service.", photo: "/placeholder.svg" },
    { name: "Sam Wilson", feedback: "Highly recommend to everyone.", photo: "/placeholder.svg" },
  ]);

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-5xl font-bold">Welcome to SaaS Startup</h1>
        <p className="text-xl text-muted-foreground">Revolutionizing the way you manage your business.</p>
        <Button size="lg">Get Started</Button>
        <img src="/placeholder.svg" alt="Product Illustration" className="mx-auto mt-8 w-1/2" />
      </section>

      {/* Features Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Feature One</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Brief description of feature one.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Feature Two</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Brief description of feature two.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Feature Three</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Brief description of feature three.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Testimonials</h2>
        <Carousel>
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="text-center space-y-4">
                  <img src={testimonial.photo} alt={testimonial.name} className="mx-auto rounded-full w-24 h-24" />
                  <p className="text-xl font-semibold">{testimonial.name}</p>
                  <p className="text-muted-foreground">{testimonial.feedback}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      {/* Pricing Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Basic Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <p>$10/month</p>
              <Button>Choose Plan</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Pro Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <p>$30/month</p>
              <Button>Choose Plan</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Enterprise Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <p>$50/month</p>
              <Button>Choose Plan</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center space-y-4">
        <div className="space-x-4">
          <a href="/about" className="text-muted-foreground">About</a>
          <a href="/contact" className="text-muted-foreground">Contact</a>
          <a href="/privacy" className="text-muted-foreground">Privacy Policy</a>
        </div>
        <div className="space-x-4">
          <a href="https://facebook.com" className="text-muted-foreground">Facebook</a>
          <a href="https://twitter.com" className="text-muted-foreground">Twitter</a>
          <a href="https://linkedin.com" className="text-muted-foreground">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
};

export default Index;