import { notFound } from "next/navigation";

const services = [
  { slug: "ai-engineering", title: "AI Engineering" },
  { slug: "blockchain-development", title: "Blockchain Development" },
  { slug: "mobile-app-development", title: "Mobile App Development" },
  { slug: "custom-web-development", title: "Custom Web Development" },
  { slug: "software-development", title: "Software Development" },
  { slug: "digital-transformation", title: "Digital Transformation" },
  { slug: "digital-marketing", title: "Digital Marketing" },
  { slug: "data-science-analytics", title: "Data Science & Analytics" },
  { slug: "ecommerce-development", title: "E-commerce Development" },
];

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) return notFound();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#060d1b] text-white">
      <h1 className="text-5xl font-bold">{service.title}</h1>
    </div>
  );
}