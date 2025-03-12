import { TruckIcon, MapPinIcon, ClipboardListIcon } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-grater-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-space-grotesk mb-6">
              Streamline Your Food Truck Operations
            </h1>
            <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
              Manage menus, track locations, and process orders efficiently with Grater Choice - your all-in-one food truck management platform.
            </p>
            <button className="bg-grater-red text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-red-600">
              Start Free Trial
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-space-grotesk">
            Powerful Features for Your Food Truck
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<ClipboardListIcon className="w-8 h-8" />}
              title="Menu Management"
              description="Create and update your menu items, prices, and categories with ease."
            />
            <FeatureCard
              icon={<MapPinIcon className="w-8 h-8" />}
              title="Location Tracking"
              description="Keep your customers informed about your current location in real-time."
            />
            <FeatureCard
              icon={<TruckIcon className="w-8 h-8" />}
              title="Order Processing"
              description="Handle orders efficiently with our streamlined processing system."
            />
          </div>
        </div>
      </section>

      {/* Stats CTA Section (Placeholder) */}
      <StatsCTA />

      {/* Benefits Section */}
      <section id="benefits" className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-space-grotesk">
            Why Choose Grater Choice?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <BenefitItem
              title="Operational Efficiency"
              description="Automate tasks and reduce manual workload with our integrated tools."
            />
            <BenefitItem
              title="Enhanced Customer Experience"
              description="Provide a seamless ordering and tracking experience for your customers."
            />
            <BenefitItem
              title="Data-Driven Insights"
              description="Make informed decisions with detailed analytics and reporting."
            />
            <BenefitItem
              title="Secure & Reliable"
              description="Trust in our secure platform for all your business operations."
            />
          </div>
        </div>
      </section>

      {/* Backend Features Section (Placeholder) */}
      <BackendFeatures />

      {/* Testimonials Section (Placeholder) */}
      <Testimonials />


      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-space-grotesk">
            Ready to Grow Your Food Truck Business?
          </h2>
          <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
            Join thousands of food truck owners who trust Grater Choice to manage their operations.
          </p>
          <button className="bg-grater-red text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-red-600">
            Get Started Now
          </button>
        </div>
      </section>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="p-4 md:p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="text-grater-red mb-3 md:mb-4 text-xl md:text-2xl">{icon}</div>
      <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2 font-space-grotesk">{title}</h3>
      <p className="text-sm md:text-base text-gray-600">{description}</p>
    </div>
  )
}

function BenefitItem({ title, description }: { title: string, description: string }) {
  return (
    <div className="p-4 md:p-6">
      <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2 font-space-grotesk">{title}</h3>
      <p className="text-sm md:text-base text-gray-600">{description}</p>
    </div>
  )
}

// Placeholder components
function StatsCTA() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2>Stats CTA Placeholder</h2>
      </div>
    </section>
  );
}

function BackendFeatures() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2>Backend Features Placeholder</h2>
        <p>This section will showcase the backend features.</p>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2>Testimonials Placeholder</h2>
      </div>
    </section>
  );
}