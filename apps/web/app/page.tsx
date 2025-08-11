import Image from "next/image"
import { Button } from "@workspace/ui/components/button"
import { Badge } from "@workspace/ui/components/badge"
import { Star, Clock, MapPin, Phone } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@workspace/ui/components/card"


const featuredPizzas = [
  {
    name: "Margherita Classic",
    description: "Fresh mozzarella, San Marzano tomatoes, fresh basil, extra virgin olive oil",
    price: "$18.99",
    image: "/margherita-pizza.png",
    rating: 4.9,
  },
  {
    name: "Pepperoni Supreme",
    description: "Premium pepperoni, mozzarella cheese, our signature tomato sauce",
    price: "$21.99",
    image: "/pepperoni-pizza.png",
    rating: 4.8,
  },
  {
    name: "Veggie Garden",
    description: "Bell peppers, mushrooms, red onions, olives, fresh tomatoes",
    price: "$19.99",
    image: "/vegetable-pizza.png",
    rating: 4.7,
  },
]

const testimonials = [
  {
    name: "Sarah Johnson",
    rating: 5,
    comment: "Best pizza in town! The crust is perfectly crispy and the ingredients are always fresh.",
  },
  {
    name: "Mike Chen",
    rating: 5,
    comment: "Homegrown Pizza never disappoints. Their delivery is fast and the pizza arrives hot every time.",
  },
  {
    name: "Emily Rodriguez",
    rating: 5,
    comment: "Love the authentic Italian flavors. You can taste the quality in every bite!",
  },
]

export default function Page() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20" />
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  🍕 Authentic Italian Since 1985
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                  Homegrown
                  <span className="text-orange-600"> Pizza</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-[600px]">
                  Experience the authentic taste of Italy with our handcrafted pizzas made from the finest ingredients.
                  Every pizza is made to order with love and tradition.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8">
                  Order Online
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
                  View Menu
                </Button>
              </div>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>30 min delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span>4.9/5 rating</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/delicious-pizza-hero.png"
                alt="Delicious homemade pizza"
                width={600}
                height={600}
                className="rounded-2xl shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Pizzas */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Our Signature Pizzas</h2>
            <p className="text-xl text-muted-foreground max-w-[600px] mx-auto">
              Handcrafted with premium ingredients and baked to perfection in our wood-fired oven
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPizzas.map((pizza) => (
              <Card key={pizza.name} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <Image
                    src={pizza.image || "/placeholder.svg"}
                    alt={pizza.name}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-4 right-4 bg-white text-black">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
                    {pizza.rating}
                  </Badge>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{pizza.name}</CardTitle>
                    <span className="text-2xl font-bold text-orange-600">{pizza.price}</span>
                  </div>
                  <CardDescription className="text-base">{pizza.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">Add to Cart</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Our Story</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Founded in 1985 by the Rossi family, Homegrown Pizza has been serving authentic Italian pizzas to our
                  community for over three decades. What started as a small family business has grown into a beloved
                  local institution.
                </p>
                <p>
                  We use only the finest ingredients: San Marzano tomatoes, fresh mozzarella made daily, and our
                  signature dough that's aged for 48 hours. Every pizza is hand-stretched and baked in our traditional
                  wood-fired oven.
                </p>
              </div>
              <Button variant="outline" size="lg">
                Learn More About Us
              </Button>
            </div>
            <div className="relative">
              <Image
                src="/pizza-chef-making-pizza.png"
                alt="Pizza chef at work"
                width={600}
                height={500}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">What Our Customers Say</h2>
            <p className="text-xl text-muted-foreground">
              Don't just take our word for it - hear from our happy customers
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex gap-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-muted-foreground">"{testimonial.comment}"</p>
                    <p className="font-semibold">- {testimonial.name}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact/Location */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">Visit Us Today</h2>
                <p className="text-xl text-muted-foreground">
                  Come experience the authentic taste of Italy at our welcoming restaurant
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-orange-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Address</h3>
                    <p className="text-muted-foreground">
                      123 Main Street
                      <br />
                      Downtown District
                      <br />
                      City, State 12345
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-orange-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Phone</h3>
                    <p className="text-muted-foreground">(555) 123-PIZZA</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-orange-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Hours</h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>Mon-Thu: 11am - 10pm</p>
                      <p>Fri-Sat: 11am - 11pm</p>
                      <p>Sunday: 12pm - 9pm</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-full min-h-[300px]">
              <Image
                src="/pizza-restaurant-interior.png"
                alt="Restaurant interior"
                fill
                className="rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600 text-white">
        <div className="container text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Order?</h2>
          <p className="text-xl opacity-90 max-w-[600px] mx-auto">
            Get your favorite pizza delivered hot and fresh to your door in just 30 minutes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Order Online Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 border-white text-white hover:bg-white hover:text-orange-600 bg-transparent"
            >
              Call (555) 123-PIZZA
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
