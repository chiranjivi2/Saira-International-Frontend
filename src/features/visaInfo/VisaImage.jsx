function VisaImage() {
  return (
    <section className="py-14 bg-[var(--color-secondary-50)]">
      <div className="w-xs sm:w-xl lg:w-3xl mx-auto relative group rounded-2xl overflow-hidden">
        <img
          className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
          src="visainfo/visa.jpg"
          alt="visa"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
    </section>
  );
}

export default VisaImage;
