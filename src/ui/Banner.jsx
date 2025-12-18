function Banner({ page }) {
  return (
    <section className="bg-(--color-primary-500) text-(--color-primary-50)">
      <div className="py-12 sm:py-16">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-center font-bold">
          {page}
        </h1>
      </div>
    </section>
  );
}

export default Banner;
