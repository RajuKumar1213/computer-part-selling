'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
    {
        name: 'Government Official',
        business: 'SECC Project',
        location: 'Jharkhand',
        rating: 5,
        text: 'Sagacious Global Services demonstrated exceptional capability in building and managing a team of 3,500+ members for our census project. Their professionalism and delivery on tight deadlines was remarkable.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
    },
    {
        name: 'Project Manager',
        business: 'UIDAI Project',
        location: 'Bihar',
        rating: 5,
        text: 'The team at Sagacious Global Services showed excellent coordination and technical expertise in implementing our biometric enrollment project across multiple states. Highly professional service.',
        image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
    },
    {
        name: 'IT Director',
        business: 'Corporate Client',
        location: 'Ranchi',
        rating: 5,
        text: 'Their database administration and software development services are top-notch. The team understands client requirements quickly and delivers quality results with complete integrity.',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
    },
    {
        name: 'Operations Head',
        business: 'NPR Project',
        location: 'Chhattisgarh',
        rating: 5,
        text: 'Outstanding data processing capabilities with multilingual support. Their 24/7 operations and skilled professionals make them a truly reliable partner for large-scale projects.',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
    }
];

export function TestimonialsSection() {
    return (<section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6 lg:px-8">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 font-medium mb-4">
                    <Quote className="w-4 h-4 mr-2" />
                    Client Testimonials
                </div>                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    What Our Clients Say
                </h2>
                <p className="text-sm lg:text-base text-gray-600 max-w-3xl mx-auto">
                    Feedback from government and corporate clients who have experienced our quality service delivery 
                    and professional project management capabilities.
                </p>
            </motion.div>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {testimonials.map((testimonial, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                        {/* Quote Icon */}
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                            <Quote className="w-6 h-6 text-blue-600" />
                        </div>

                        {/* Rating */}
                        <div className="flex items-center mb-4">
                            {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                            ))}
                        </div>

                        {/* Testimonial Text */}
                        <p className="text-gray-700 leading-relaxed mb-6">
                            &quot;{testimonial.text}&quot;
                        </p>

                        {/* Customer Info */}
                        <div className="flex items-center">
                            <Image
                                src={testimonial.image}
                                alt={testimonial.name}
                                width={48}
                                height={48}
                                className="w-12 h-12 rounded-full object-cover mr-4"
                            />
                            <div>
                                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                                <div className="text-sm text-gray-600">{testimonial.business}</div>
                                <div className="text-xs text-gray-500">{testimonial.location}</div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
    );
}
