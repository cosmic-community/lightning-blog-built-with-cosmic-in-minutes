export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Frontend Developer',
      company: 'TechCorp',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b6b7d78c?w=150&h=150&fit=crop&auto=format,compress',
      content: 'This blog showcases exactly what modern web development should look like. The Cosmic integration is seamless!',
      rating: 5
    },
    {
      name: 'Alex Rivera',
      role: 'Full Stack Engineer',
      company: 'StartupXYZ',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&auto=format,compress',
      content: 'Built in 5 minutes? I was skeptical until I tried Cosmic myself. Game-changer for content management.',
      rating: 5
    },
    {
      name: 'Maria Garcia',
      role: 'Product Manager',
      company: 'InnovateNow',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&auto=format,compress',
      content: 'The performance and developer experience are outstanding. This is the future of headless CMS.',
      rating: 5
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Loved by Developers
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          See what the community is saying about building with Cosmic
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mt-6"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group"
          >
            {/* Rating Stars */}
            <div className="flex items-center mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            
            {/* Quote */}
            <blockquote className="text-gray-700 mb-6 italic leading-relaxed">
              "{testimonial.content}"
            </blockquote>
            
            {/* Author */}
            <div className="flex items-center">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                width={48}
                height={48}
                className="w-12 h-12 rounded-full object-cover mr-4 group-hover:scale-110 transition-transform duration-300"
              />
              <div>
                <div className="font-semibold text-gray-900">
                  {testimonial.name}
                </div>
                <div className="text-sm text-gray-500">
                  {testimonial.role} at {testimonial.company}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Call to Action */}
      <div className="text-center mt-12">
        <a
          href="https://www.cosmicjs.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
        >
          <span>Start Building with Cosmic</span>
          <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </section>
  )
}