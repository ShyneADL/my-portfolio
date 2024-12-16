import React from "react";
import { Laptop, ShoppingCart, PaintBucket, Globe, Rocket } from "lucide-react";

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
}

const servicesData: Service[] = [
  {
    id: 1,
    title: "Custom Website Design & Development",
    description:
      "Create fully responsive, modern websites tailored to your clients' unique brand identity. Utilizing Next.js and Tailwind CSS, I develop high-performance, visually stunning websites that not only look exceptional but also provide an optimal user experience across all devices.",
    icon: Laptop,
  },
  {
    id: 2,
    title: "Figma to Web Development",
    description:
      "Transform your Figma designs into pixel-perfect, fully functional websites. I specialize in translating intricate design mockups directly into clean, efficient code using Next.js and Tailwind CSS. This service ensures your original design vision is maintained with precise implementation.",
    icon: PaintBucket,
  },
  {
    id: 3,
    title: "E-Commerce Website Solutions",
    description:
      "Build robust online stores using Shopify or WordPress with Elementor, customized to meet your business needs. From product page design to checkout optimization, I create e-commerce platforms that are visually appealing and conversion-focused.",
    icon: ShoppingCart,
  },
  {
    id: 4,
    title: "WordPress Website Redesign & Optimization",
    description:
      "Revamp existing WordPress websites to improve performance, user experience, and visual appeal. Services include modern design overhaul, performance optimization, mobile responsiveness, SEO enhancement, and plugin/theme customization.",
    icon: Globe,
  },
  {
    id: 5,
    title: "Landing Page Development",
    description:
      "Create high-converting landing pages designed to capture leads and drive conversions. Using Next.js and Tailwind CSS, I develop landing pages that are visually compelling, optimized for fast loading, A/B testing ready, and fully responsive.",
    icon: Rocket,
  },
];

const Services = () => {
  return (
    <div className="xl:px-[180px] md:px-[60px] px-[16px] py-[40px] md:py-[110px] w-full">
      <div className="relative flex flex-col md:items-start justify-center items-center">
        <h2 className="text-center text-white md:text-[44px] text-[32px] font-bold leading-none">
          My Services
        </h2>
        <div className="bg-secondary h-[8px] w-[60px] mt-2"></div>
      </div>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-6 lg:mt-10 mt-8">
        {servicesData.map((service) => (
          <div
            key={service.id}
            className="bg-[#2a3439] rounded-lg p-6 flex flex-col items-start space-y-4 hover:scale-105 transition-transform duration-300"
          >
            <service.icon className="text-white w-12 h-12 mb-4" />
            <h3 className="text-white text-xl font-semibold mb-2">
              {service.title}
            </h3>
            <p className="text-gray-300 text-base">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
