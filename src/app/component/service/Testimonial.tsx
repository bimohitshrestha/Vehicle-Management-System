import React, { useState } from "react";
import { FaStar } from "react-icons/fa6";
import { GrNext, GrPrevious } from "react-icons/gr";

const testimonialData = [
  {
    name: "Testing",
    position: "Tester",
    company: "Test",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio libero, repudiandae ipsum exercitationem, rem fugiat asperiores rerum labore modi, laborum molestias? Aspernatur, iste sit est voluptas necessitatibus quo iusto nostrum?",
    rating: 4,
    // avatar: "",
  },
  {
    name: "Tested",
    position: "Testing",
    company: "Test",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio libero, repudiandae ipsum exercitationem, rem fugiat asperiores rerum labore modi, laborum molestias? Aspernatur, iste sit est voluptas necessitatibus quo iusto nostrum?",
    rating: 5,
    // avatar: "",
  },

  {
    name: "Bimohit",
    position: "Tester",
    company: "Test",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio libero, repudiandae ipsum exercitationem, rem fugiat asperiores rerum labore modi, laborum molestias? Aspernatur, iste sit est voluptas necessitatibus quo iusto nostrum?",
    rating: 3,
    // avatar: "",
  },
  {
    name: "lorem",
    position: "Lorem",
    company: "Test",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio libero, repudiandae ipsum exercitationem, rem fugiat asperiores rerum labore modi, laborum molestias? Aspernatur, iste sit est voluptas necessitatibus quo iusto nostrum?",
    rating: 2,
    // avatar: "",
  },
  {
    name: "No Name",
    position: "Position",
    company: "Company",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ex dolores esse quaerat exercitationem eligendi possimus. Odit vero ducimus culpa et sunt? Voluptas quod fugiat, a illum obcaecati vero ipsam.",
    rating: 1,
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const getVisibleTestimonials = () => {
    const result = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonialData.length;
      result.push(testimonialData[index]);
    }
    return result;
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialData.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const RatingStars = ({ rating }: { rating: number }) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            className={`w-4 h-4 ${
              i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-100 mb-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            Customer Testimonials
          </h2>
          <div className="h-1 w-24 bg-indigo-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover why thousands of businesses trust our solutions to drive
            growth and innovation
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visibleTestimonials.map((testimonial, idx) => (
              <div
                key={`${currentIndex}-${idx}`}
                className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                <div className="h-2 bg-gradient-to-r from-indigo-500 to-purple-600"></div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    {/* <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="h-12 w-12 rounded-full object-cover border-2 border-indigo-100"
                    /> */}
                    <div className="ml-3">
                      <h3 className="font-bold text-gray-900">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>

                  <div className="mb-3">
                    <RatingStars rating={testimonial.rating} />
                  </div>

                  <p className="text-gray-700 text-sm mb-4 line-clamp-4">
                    `&quot;`{testimonial.description}`&quot;`
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-indigo-600 font-medium">
                      {testimonial.company}
                    </span>
                    <span className="text-xs text-gray-500">
                      Verified Customer
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-between">
            {/* <div className="flex items-center space-x-3"> */}
            {/* <div className="flex space-x-2"> */}
            <button
              onClick={prevSlide}
              className="bg-white p-2 rounded-full shadow text-gray-700 hover:bg-gray-100 border border-gray-200 cursor-pointer"
              aria-label="Previous testimonial set"
            >
              <GrPrevious />
            </button>
            <div className="flex items-center space-x-2 mb-4 sm:mb-0">
              {testimonialData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    index >= currentIndex && index < currentIndex + 1
                      ? "w-6 bg-indigo-600"
                      : "w-2 bg-gray-300"
                  }`}
                ></button>
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="bg-indigo-600 p-2 rounded-full shadow text-white hover:bg-indigo-700 cursor-pointer"
              aria-label="Next testimonial set"
            >
              <GrNext />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
