
import React from 'react';

const testimonials = [
  {
    quote:
      'XCollaber has transformed how I monetize my content globally. The local payment options have increased my conversion rates by over 30%.',
    name: 'Sarah J.',
    title: 'Digital Course Creator',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80',
  },
  {
    quote:
      'Setting up international payments used to be my biggest headache. XCollaber handles everything beautifully, and I get paid faster than ever.',
    name: 'Michael T.',
    title: 'Software Developer',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80',
  },
  {
    quote:
      'The transparency in pricing and the ability to receive payments in my local currency makes XCollaber stand out among financial platforms.',
    name: 'Elena R.',
    title: 'Marketing Consultant',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&q=80',
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">What Our Early Users Say</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Here's what content creators and businesses are saying about their experience with XCollaber.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 reveal"
            >
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <img
                    className="h-12 w-12 rounded-full object-cover"
                    src={testimonial.avatar}
                    alt={testimonial.name}
                  />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium">{testimonial.name}</h4>
                  <p className="text-gray-500">{testimonial.title}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              <div className="mt-4 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="h-5 w-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
