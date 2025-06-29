import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-emerald-600">iStarter</h1>
              <span className="ml-3 px-2 py-1 bg-emerald-100 text-emerald-800 text-xs rounded">#REALENTREPRENEURS</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-slate-600 hover:text-slate-900 transition-colors">
                About
              </a>
              <a href="#services" className="text-slate-600 hover:text-slate-900 transition-colors">
                Services
              </a>
              <a href="#track-record" className="text-slate-600 hover:text-slate-900 transition-colors">
                Track Record
              </a>
              <a href="#team" className="text-slate-600 hover:text-slate-900 transition-colors">
                Team
              </a>
              <a href="#contact" className="text-slate-600 hover:text-slate-900 transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Evolved Advisory Boutique
            <span className="block text-emerald-600">for Venture Capital</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Supporting startups, scale-ups and innovative SMEs through strategic advisory.
          </p>
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg text-lg">
            Get Started
          </button>
        </div>
      </section>

      {/* Simple Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">About iStarter</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Founded in 2013, evolved into a leading advisory boutique for venture capital.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Services</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We support business development from both strategic and operational perspectives, through specialized
              teams and complementary services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">01</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Analysis</h3>
              <p className="text-slate-600">
                We analyze market demand, industry sectors, and identify the ideal positioning for your company.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">02</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Strategy</h3>
              <p className="text-slate-600">
                We identify the best strategy for your project through commercial approach revision and organizational
                improvement.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">03</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Operations</h3>
              <p className="text-slate-600">
                We indicate the necessary steps to concretely realize your idea, identifying intervention areas and
                critical aspects.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">04</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Financials</h3>
              <p className="text-slate-600">
                We transform qualitative analyses into highly structured financial projections and investment scenarios.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Track Record Section */}
      <section id="track-record" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Track Record</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Since 2013, iStarter has selected and collaborated with the best "Made in Italy" scale-ups, with
              international presence and proven results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="text-center md:text-left">
                <div className="text-5xl md:text-6xl font-bold text-emerald-600 mb-2">100+</div>
                <div className="text-xl text-slate-600">Scale-ups Supported</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-5xl md:text-6xl font-bold text-emerald-600 mb-2">€2B+</div>
                <div className="text-xl text-slate-600">Total Valuation</div>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Success Stories</h3>
              <p className="text-slate-600 mb-6">
                Our portfolio includes some of the most successful Italian scale-ups, spanning various industries and
                markets. We've helped companies achieve significant growth and international expansion.
              </p>
              <Button variant="outline" className="w-full md:w-auto bg-transparent">
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Leadership Team</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Academic background combined with strong experience in venture capital and private assets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 mx-auto mb-6">
                  <Image
                    src="/martino-headshot.png"
                    alt="Martino Testa"
                    width={96}
                    height={96}
                    className="w-24 h-24 rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Martino Testa</h3>
                <p className="text-emerald-600 font-medium mb-4">Managing Director at iStarter</p>
                <div className="text-sm text-slate-600 space-y-1">
                  <p>Investment and Strategy Manager at ClubDeal SPA</p>
                  <p>Investment Associate ClubDeal Spa</p>
                  <p>P.E. & V.C. Bocconi</p>
                  <p>BSc Economics and Finance - Università Cattolica</p>
                  <p>Forbes Under 30 Venture Capital</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 mx-auto mb-6">
                  <Image
                    src="/antonio-headshot.jpg"
                    alt="Antonio Chiarello"
                    width={96}
                    height={96}
                    className="w-24 h-24 rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Antonio Chiarello</h3>
                <p className="text-emerald-600 font-medium mb-4">Senior Advisor</p>
                <div className="text-sm text-slate-600 space-y-1">
                  <p>Former Key Man at NEVA First Fund (ISP)</p>
                  <p>Former AD presso Marzotto SIM</p>
                  <p>Former Direttore Generale at UBS Alternative Investment Italia SGR</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Contact Us</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Ready to scale your business? Get in touch with our team to discuss your project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">London Office</h3>
                  <p className="text-slate-600">
                    10-15 Queen Street, Aldermary House
                    <br />
                    London, United Kingdom, EC4N 1TX
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Milan Office</h3>
                  <p className="text-slate-600">
                    Piazzale Cadorna 13
                    <br />
                    20123 Milano, Italy
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Email</h3>
                  <p className="text-slate-600">Info@istarter.co.uk</p>
                </div>
              </div>
            </div>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="Your company"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Image
                src="/istarter-logo.png"
                alt="iStarter"
                width={120}
                height={32}
                className="h-6 w-auto mb-2 brightness-0 invert"
              />
              <p className="text-slate-400">#REALENTREPRENEURS</p>
            </div>
            <div className="text-slate-400 text-sm">
              <p>Strictly private and confidential</p>
              <p className="mt-1">© 2024 iStarter. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
