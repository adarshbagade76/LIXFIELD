import React from "react";
import {
  FaClipboardList,
  FaChartBar,
  FaUserFriends,
  FaPlane,
  FaBuilding,
  FaFileAlt,
  FaUsers,
  FaHandshake,
  FaChartLine,
} from "react-icons/fa";
import type { ElementType, FC } from 'react';

type IconProps = { className?: string };
type Service = {
  title: string;
  icon: FC<IconProps>;
};

const services: Service[] = [
  { title: "Import Services", icon: (props) => React.createElement(FaClipboardList as any, props) },
  { title: "Export Services", icon: (props) => React.createElement(FaChartBar as any, props) },
  { title: "Customs Clearance", icon: (props) => React.createElement(FaPlane as any, props) },
  { title: "Freight Forwarding", icon: (props) => React.createElement(FaChartLine as any, props) },
  { title: "Warehousing & Distribution", icon: (props) => React.createElement(FaBuilding as any, props) },
  { title: "Documentation & Compliance", icon: (props) => React.createElement(FaFileAlt as any, props) },
  { title: "Packaging & Labeling", icon: (props) => React.createElement(FaUsers as any, props) },
  { title: "Supply Chain Management", icon: (props) => React.createElement(FaUserFriends as any, props) },
  { title: "Insurance & Risk Management", icon: (props) => React.createElement(FaHandshake as any, props) },
  { title: "International Trade Consulting", icon: (props) => React.createElement(FaClipboardList as any, props) },
];

export default function ServicesSection() {
  return (
    <section className="bg-[#f3f7fb] py-20 text-[#254f7a]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center text-3xl sm:text-4xl font-bold tracking-widest mb-10 text-[#254f7a]">
          OUR SERVICES
        </h2>

        <div className="mt-6">
          {/* Top row - 3 items */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-6 md:mb-8">
            {services.slice(0, 3).map((service, i) => {
              const Icon = service.icon;
              return (
                <div key={i} className="flex justify-center">
                  <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-44 lg:h-44 rounded-full bg-white flex flex-col items-center justify-center text-[#254f7a] text-center shadow-lg hover:scale-105 transition">
                    {React.createElement(Icon as any, { className: 'text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-1' })}
                    <span className="text-xs sm:text-sm md:text-sm lg:text-base font-semibold leading-tight px-2 break-words max-w-[9rem]">
                      {service.title}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Middle row - 4 items */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-6 md:mb-8">
            {services.slice(3, 7).map((service, i) => {
              const Icon = service.icon;
              return (
                <div key={i} className="flex justify-center">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full bg-white flex flex-col items-center justify-center text-[#254f7a] text-center shadow-md hover:scale-105 transition">
                    {React.createElement(Icon as any, { className: 'text-lg sm:text-xl md:text-2xl lg:text-3xl mb-1' })}
                    <span className="text-xs sm:text-xs md:text-sm font-semibold leading-tight px-2 break-words max-w-[8rem]">
                      {service.title}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom row - 3 items */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            {services.slice(7, 10).map((service, i) => {
              const Icon = service.icon;
              return (
                <div key={i} className="flex justify-center">
                  <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-44 lg:h-44 rounded-full bg-white flex flex-col items-center justify-center text-[#254f7a] text-center shadow-lg hover:scale-105 transition">
                    {React.createElement(Icon as any, { className: 'text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-1' })}
                    <span className="text-xs sm:text-sm md:text-sm lg:text-base font-semibold leading-tight px-2 break-words max-w-[9rem]">
                      {service.title}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
