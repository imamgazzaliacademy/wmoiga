import React from "react";

const Achievments = ({ isVisible = true }: { isVisible: boolean }) => {
  return (
    <div
      className={`mt-16 text-center transition-all duration-1000 delay-1400 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div className="bg-linear-to-r from-(--primary-color) to-(--primary-color)/90 rounded-lg p-8 md:p-12 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-5 bg-center bg-repeat bg-size-[400px_400px]"
          style={{ backgroundImage: "url('/vector.png')" }}
        />

        <div className="relative z-10">
          <div className="flex flex-col gap-2 mb-4 text-center">
            <h2
              className={`text-xl md:text-2xl uppercase font-semibold text-(--secondary-bg) transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              Our Achievments
            </h2>
            <div className="flex justify-center">
              <span
                className={`h-1 bg-(--accent-gold) transition-all duration-700 delay-200 ${
                  isVisible ? "w-20" : "w-0"
                }`}
              />
            </div>
          </div>
          <p className="text-[15px] md:text-[16px] opacity-90 max-w-5xl mx-auto">
            The institution has gained many achievements over its 20 vears of
            service. It could contribute to the society's highly talented and
            qualified pool of orators, trainers and propagators with
            international acceptance. Gazzali graduates outperform in various
            universities in and outside India. After the successful completion
            of the course many students undertake research and higher studies in
            reputed universities in India and in many other countries. A great
            number of Gazzalies work in government sector, reputed Islamic
            universities and colleges. undertake Mahallu administration. lead
            different voluntary organizations, serve as trainers, orators and
            propagators and serve in key posts of different MN's across the
            globe.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Achievments;
