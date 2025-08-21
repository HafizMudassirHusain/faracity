
// app/services/[slug]/page.jsx
import services from "@/data/services";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

// Sample testimonials and FAQ data
const testimonials = [
  {
    author: "John Smith",
    role: "CEO, Acme Corp",
    quote:
      "TechWave's AI & Machine Learning solutions transformed our data strategy and unlocked new growth opportunities. Highly recommended!",
  },
  {
    author: "Emily Davis",
    role: "CTO, FinTech Inc",
    quote:
      "The team delivered a secure blockchain platform on time and within budget. Their expertise is exceptional.",
  },
];

const faqs = [
  {
    question: "How long does it take to implement this service?",
    answer: "Implementation time varies by scope, but a typical project takes 4-8 weeks from discovery to launch.",
  },
  {
    question: "What technologies do you use?",
    answer: "We use industry-standard tools depending on the service: e.g., TensorFlow, PyTorch, Ethereum, AWS, Azure, and more.",
  },
  {
    question: "Do you provide post-launch support?",
    answer: "Yes—we offer ongoing maintenance, monitoring, and optimization packages to ensure long-term success.",
  },
];

export default function ServiceDetail({ params }) {
  const { slug } = params;
  const service = services.find((s) => s.id === slug);
  if (!service) return notFound();

  const related = services.filter((s) => s.id !== slug).slice(0, 3);

  return (
    <div className="bg-[#121212] text-white">
      {/* Hero Section */}
      <section className="relative h-64 md:h-96 w-full overflow-hidden">
        <Image
          src={service.image}
          alt={`${service.name} Banner`}
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center">
          <div className="text-6xl mb-4">{service.icon}</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">{service.name}</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl text-center">
            {service.description}
          </p>
        </div>
      </section>

      {/* Overview & Features */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4 text-blue-400">Overview</h2>
          <p className="text-gray-300 leading-relaxed mb-8">
            {service.longDescription}
          </p>

          <h3 className="text-xl font-semibold mb-4 text-blue-400">Key Features</h3>
          <ul className="list-disc pl-6 grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-300">
            {service.features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Technologies & Use Cases */}
      <section className="py-16 px-4 bg-[#1a1a1a]">
        <div className="max-w-5xl mx-auto grid gap-12 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-400">Technologies</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              {service.technologies.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-400">Use Cases</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              {service.useCases.map((use, i) => (
                <li key={i}>{use}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Case Studies & Pricing */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto grid gap-12 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-400">Case Studies</h3>
            {service.caseStudies.map((caseStudy, i) => (
              <Link
                key={i}
                href={caseStudy.url}
                className="block mb-4 p-4 bg-[#151515] rounded-lg border border-[#2a2a2a] hover:bg-[#2a2a2a] transition"
              >
                <h4 className="text-lg font-semibold text-gray-100">
                  {caseStudy.title}
                </h4>
                <p className="text-gray-300 mt-1">{caseStudy.summary}</p>
              </Link>
            ))}
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-400">Pricing</h3>
            <div className="bg-[#151515] p-6 rounded-lg border border-[#2a2a2a]">
              <p className="text-gray-300 mb-2">
                <strong>Starting At:</strong> {service.pricing.startingAt}
              </p>
              <p className="text-gray-300">
                <strong>Pricing Model:</strong> {service.pricing.model}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-[#1a1a1a]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-100">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-[#151515] p-6 rounded-lg border border-[#2a2a2a] shadow-lg"
              >
                <p className="italic text-gray-300 mb-4">“{t.quote}”</p>
                <div className="font-semibold text-gray-100">{t.author}</div>
                <div className="text-gray-400 text-sm">{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-100">FAQs</h2>
          <div className="space-y-6">
            {faqs.map((q, i) => (
              <div
                key={i}
                className="bg-[#151515] p-4 rounded-lg border border-[#2a2a2a]"
              >
                <div className="font-medium text-gray-100">{q.question}</div>
                <p className="text-gray-300 mt-2">{q.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 px-4 bg-[#1a1a1a]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-100">Related Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {related.map((r) => (
              <Link
                key={r.id}
                href={`/services/${r.id}`}
                className="bg-[#151515] p-6 rounded-lg border border-[#2a2a2a] shadow-lg hover:scale-105 transform transition"
              >
                <div className="text-5xl mb-2">{r.icon}</div>
                <h3 className="text-xl font-semibold text-gray-100 mb-2">{r.name}</h3>
                <p className="text-gray-300 text-sm">{r.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 border-t border-[#2a2a2a]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Build Something Together</h2>
          <p className="text-lg text-gray-300 mb-8">
            Ready to explore how <span className="text-blue-400">{service.name}</span> can drive your business forward?
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/contact">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium">
                Get In Touch
              </button>
            </Link>
            <Link href="/services">
              <button className="border border-gray-700 bg-[#1e1e1e] text-gray-300 hover:bg-[#2a2a2a] px-6 py-3 rounded-lg font-medium">
                Back to Services
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

