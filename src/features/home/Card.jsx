import React, { useEffect, useState } from "react";
import { getPamphlets } from "../../services/api";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function Card() {
  const [pamphlets, setPamphlets] = useState([]);

  useEffect(() => {
    const fetchPamphlets = async () => {
      const data = await getPamphlets();
      if (data) setPamphlets(data);
    };
    fetchPamphlets();
  }, []);

  return (
    <section className="py-14 bg-linear-to-br from-slate-50 to-slate-100 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-(--color-primary-500) mb-10 text-center">
          Featured Collections
        </h2>

        <div className="relative w-full overflow-hidden">
          {/* SCROLLING WRAPPER */}
          <div className="flex gap-6 animate-scroll whitespace-nowrap">
            {/* MAIN SET */}
            {pamphlets.map((item) => (
              <PamphletCard key={item._id} image={item.imageURL} />
            ))}

            {/* DUPLICATE SET — REQUIRED FOR SEAMLESS LOOP */}
            {pamphlets.map((item) => (
              <PamphletCard key={`dup-${item._id}`} image={item.imageURL} />
            ))}
          </div>
        </div>
      </div>

      {/* Animation */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-scroll {
          animation: scroll 25s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

// 🎨 Reusable card component
function PamphletCard({ image }) {
  return (
    <div className="w-90 shrink-0  group">
      <div className="relative h-full overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
        <img
          src={image}
          alt="pamphlet"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </div>
  );
}
