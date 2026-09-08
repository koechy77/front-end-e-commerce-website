export default function CategoryCard({ image, category }) {
  return (
    <>
      <div className="group relative rounded-xl overflow-hidden w-40 h-28 cursor-pointer">
        <img
          src={image}
          alt={category}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-150"
        />

        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h3 className="text-orange-500 font-bold font-supermercado text-lg">
            {category}
          </h3>
        </div>
      </div>
    </>
  );
}
