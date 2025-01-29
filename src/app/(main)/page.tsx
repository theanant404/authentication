'use client'
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Database, Lock, Zap, Twitter, Linkedin } from 'lucide-react'
import Link from "next/link"
import { useSession } from 'next-auth/react'
export default function LandingPage() {
  const session = useSession()
  console.log(session)

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Explore NextAuth.js with Next.js
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Dive deep into authentication and authorization with NextAuth.js in a Next.js application.
                  Discover the power of secure, flexible, and easy-to-implement authentication.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild>
                  <Link href="/account/sign-up">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="https://www.github.com/theanant404/authentication" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> View on GitHub
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <Lock className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Secure Authentication</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Implement various authentication strategies with ease using NextAuth.js.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Zap className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Fast Performance</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Leverage the power of Next.js for blazing-fast, server-side rendered pages.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Database className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">MongoDB Integration</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Seamlessly store and retrieve user data with MongoDB database integration.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="tech-stack" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Our Tech Stack
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex flex-col items-center text-center">
                <img src="/next-js.svg" alt="Next.js" className="h-16 w-16 mb-4" />
                <h3 className="text-xl font-bold mb-2">Next.js</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  React framework for production-grade applications
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <img src="/nextauth.png" alt="NextAuth.js" className="h-16 w-16 mb-4" />
                <h3 className="text-xl font-bold mb-2">NextAuth.js</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Complete authentication solution for Next.js applications
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <img src="/typescript.svg" alt="TypeScript" className="h-16 w-16 mb-4" />
                <h3 className="text-xl font-bold mb-2">TypeScript</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Typed superset of JavaScript for better developer experience
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <img src="/mongodb.svg" alt="MongoDB" className="h-16 w-16 mb-4" />
                <h3 className="text-xl font-bold mb-2">MongoDB</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  NoSQL database for flexible and scalable data storage
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Explore NextAuth.js?
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Join us in discovering the full potential of NextAuth.js with Next.js. 
                  Start building secure and scalable applications today.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild>
                  <Link href="/login">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

    </div>
  )
}

