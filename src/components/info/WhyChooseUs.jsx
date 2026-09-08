import { whyChooseUs } from "../../data/database";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  return (
    <section className="py-20 px-5 md:px-10">

      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold">
          Why Choose Us
        </h2>

        <p className="mt-4 text-gray-600 text-lg md:text-xl">
          We don't just sell accessories. We deliver quality,
          confidence, and style.
        </p>
      </div>


      {/* Content */}
      <div className="max-w-6xl mx-auto space-y-20">

        {whyChooseUs.map((item, index) => (

          <div
            key={item.id}
            className={`
              flex flex-col md:flex-row items-center gap-10
              ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}
            `}
          >

            {/* Text */}
            <motion.div
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -50 : 50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.6,
              }}
              viewport={{
                once: true,
              }}
              className="flex-1"
            >

              <h3 className="text-2xl font-semibold mb-4 font-poppins">
                {item.title}
              </h3>

              <p className="leading-relaxed font-supermercado text-orange-500 text-2xl">
                {item.description}
              </p>

            </motion.div>


            {/* Image */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.6,
              }}
              viewport={{
                once: true,
              }}
              className={`
                flex-1
                ${index % 2 === 0 ? "rotate-3" : "-rotate-3"}
              `}
            >

              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                decoding="async"
                className="
                  w-full
                  h-72
                  md:h-96
                  object-cover
                  rounded-3xl
                  shadow-xl
                "
              />

            </motion.div>

          </div>

        ))}

      </div>

    </section>
  );
}
