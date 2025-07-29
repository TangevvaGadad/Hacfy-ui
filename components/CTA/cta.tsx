import React from 'react';

const CTA = () => {
  return (
    <section className="bg-gradient-to-r from-[#0f172a] via-red-700 to-[#0f172a] text-white py-16 px-4 md:px-12 rounded-3xl shadow-lg">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="mb-8 md:mb-0">
          <p className="uppercase tracking-widest text-sm mb-3 font-semibold text-white/70">
            Stay One Step Ahead
          </p>
          <h1 className="text-xl md:text-3xl font-bold leading-snug max-w-2xl">
            Let HacFy help you find gaps in your security and suggest fixes to protect your digital assets.
          </h1>
        </div>
        <div>
          <button className="bg-white text-black px-6 py-3 rounded-full font-semibold shadow-lg transition hover:bg-gray-100">
            Get A Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
