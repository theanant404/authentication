'use client'

import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Database, Globe, Layout, Server, Zap } from 'lucide-react'
import Link from "next/link"

export default function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <motion.div
            className="container px-4 md:px-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="flex flex-col items-center space-y-4 text-center">
              <motion.div
                className="space-y-2"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Web Development Expert
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  With a passion for creating seamless, innovative web experiences, I bring ideas to life through code.
                </p>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="space-x-4"
              >
                <Button asChild>
                  <Link href="/contactus">
                    Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#projects">
                    View Projects
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>
        <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <motion.div
            className="container px-4 md:px-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2 variants={itemVariants} className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              My Skills
            </motion.h2>
            <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div variants={itemVariants} className="flex flex-col items-center text-center">
                <Layout className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Frontend Development</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Expert in React, Vue, and Angular. Creating responsive and intuitive user interfaces.
                </p>
              </motion.div>
              <motion.div variants={itemVariants} className="flex flex-col items-center text-center">
                <Server className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Backend Development</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Proficient in Node.js, Python, and Ruby. Building robust and scalable server-side applications.
                </p>
              </motion.div>
              <motion.div variants={itemVariants} className="flex flex-col items-center text-center">
                <Database className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Database Management</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Experienced with SQL and NoSQL databases. Optimizing data storage and retrieval.
                </p>
              </motion.div>
              <motion.div variants={itemVariants} className="flex flex-col items-center text-center">
                <Globe className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Web Performance</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Optimizing web applications for speed and efficiency. Implementing best practices for faster load times.
                </p>
              </motion.div>
              <motion.div variants={itemVariants} className="flex flex-col items-center text-center">
                <Zap className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Modern Web Technologies</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Utilizing cutting-edge tools and frameworks. Staying ahead with the latest web development trends.
                </p>
              </motion.div>
              <motion.div variants={itemVariants} className="flex flex-col items-center text-center">
                <Code className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Clean Code & Best Practices</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Writing maintainable and efficient code. Implementing design patterns and following coding standards.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
          <motion.div
            className="container px-4 md:px-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2 variants={itemVariants} className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Featured Projects
            </motion.h2>
            <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div variants={itemVariants} className="flex flex-col items-center text-center">
                <img src="/placeholder.svg" alt="Project 1" className="h-48 w-full object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-bold mb-2">E-commerce Platform</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  A full-stack e-commerce solution with real-time inventory management and secure payment integration.
                </p>
              </motion.div>
              <motion.div variants={itemVariants} className="flex flex-col items-center text-center">
                <img src="/placeholder.svg" alt="Project 2" className="h-48 w-full object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-bold mb-2">Social Media Dashboard</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  A comprehensive dashboard for managing multiple social media accounts with analytics and scheduling features.
                </p>
              </motion.div>
              <motion.div variants={itemVariants} className="flex flex-col items-center text-center">
                <img src="/placeholder.svg" alt="Project 3" className="h-48 w-full object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-bold mb-2">Real-time Collaboration Tool</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  A web-based collaboration platform with real-time document editing and video conferencing capabilities.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <motion.div
            className="container px-4 md:px-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="flex flex-col items-center space-y-4 text-center">
              <motion.div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Let's Work Together
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Have a project in mind? I'd love to hear about it. Let's create something amazing together.
                </p>
              </motion.div>
              <motion.div variants={itemVariants} className="w-full max-w-sm space-y-2">
                <Button className="w-full" asChild>
                  <Link href="mailto:your.email@example.com">
                    Get in Touch
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>
      </main>
    </div>
  )
}

