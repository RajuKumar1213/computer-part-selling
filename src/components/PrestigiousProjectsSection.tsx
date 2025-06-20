'use client';

import { motion } from 'framer-motion';
import { Calendar, Users, Target, Award } from 'lucide-react';

const prestigiousProjects = [
  {
    id: 'secc-2011',
    title: 'Socio Economic & Caste Census 2011 – Jharkhand',
    description: 'Built a team of 3,500+ in just 2 months, trained them to use tablet PCs, and collected 70+ lakh records in 40 days.',
    achievements: [
      '3,500+ team members recruited and trained',
      '70+ lakh records collected',
      '40 days project completion',
      'Tablet PC technology implementation'
    ],
    client: 'Government of India',
    year: '2011',
    icon: Users
  },
  {
    id: 'uid-project',
    title: 'Unique Identification Authority of India – Jharkhand, Bihar',
    description: 'Key project implementation by Government of India covering multiple states with biometric enrollment services.',
    achievements: [
      'Multi-state project implementation',
      'Biometric enrollment services',
      'Large-scale data collection',
      'Government compliance and security'
    ],
    client: 'UIDAI, Government of India',
    year: '2011',
    icon: Target
  },
  {
    id: 'npr-chhattisgarh',
    title: 'National Population Register – Chhattisgarh',
    description: 'Comprehensive biometric enrollment of residents implemented successfully in partnership with various organizations.',
    achievements: [
      'Biometric enrollment implementation',
      'Multi-partner coordination',
      'Large-scale resident registration',
      'State-wide coverage'
    ],
    client: 'Government of Chhattisgarh',
    year: '2012',
    icon: Award
  },
  {
    id: 'google-footprint',
    title: 'Google Foot-Print Project',
    description: 'Collaborated with Google/Cognizant to collect latitude & longitude of every commercial establishment in Ranchi using Tablet PCs.',
    achievements: [
      'Commercial establishment mapping',
      'GPS coordinate collection',
      'Tablet PC data collection',
      'Business information capture'
    ],
    client: 'Google/Cognizant',
    year: '2013',
    icon: Target
  }
];

export function PrestigiousProjectsSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-3 py-1 bg-blue-100 border border-blue-300 rounded-full text-blue-800 font-medium text-sm mb-4">
            <Award className="w-4 h-4 mr-2" />
            Our Credentials
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Prestigious Projects Executed
          </h2>
          <p className="text-sm lg:text-base text-gray-600 max-w-3xl mx-auto">
            We have successfully executed major government and corporate projects, 
            demonstrating our capability to handle large-scale operations with precision and reliability.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {prestigiousProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                    <project.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{project.year}</span>
                    </div>
                    <div className="text-xs text-blue-600 font-medium">{project.client}</div>
                  </div>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Achievements */}
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                {project.achievements.map((achievement, idx) => (
                  <div key={idx} className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-xs text-gray-600 leading-relaxed">{achievement}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
