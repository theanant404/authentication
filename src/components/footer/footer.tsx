'use client';
import { Github, Linkedin, Lock, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer(){
    return(
        <>
              <footer className="bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Link className="flex items-center" href="#">
                <Lock className="h-6 w-6 mr-2" />
                <span className="font-bold">Next-Auth</span>
              </Link>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Exploring the power of NextAuth.js with Next.js, TypeScript, and MongoDB.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link className="text-sm hover:underline" href="#features">Features</Link></li>
                <li><Link className="text-sm hover:underline" href="#tech-stack">Tech Stack</Link></li>
                <li><Link className="text-sm hover:underline" href="/login">Login</Link></li>
                <li><Link className="text-sm hover:underline" href="/register">Register</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link className="text-sm hover:underline" href="https://next-auth.js.org" target="_blank" rel="noopener noreferrer">NextAuth.js Docs</Link></li>
                <li><Link className="text-sm hover:underline" href="https://nextjs.org/docs" target="_blank" rel="noopener noreferrer">Next.js Docs</Link></li>
                <li><Link className="text-sm hover:underline" href="https://www.typescriptlang.org/docs/" target="_blank" rel="noopener noreferrer">TypeScript Docs</Link></li>
                <li><Link className="text-sm hover:underline" href="https://docs.mongodb.com/" target="_blank" rel="noopener noreferrer">MongoDB Docs</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <Link href="https://github.com/theannat404" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-6 w-6" />
                </Link>
                <Link href="https://x.com/theannat404" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Twitter className="h-6 w-6" />
                </Link>
                <Link href="https://linkedin.com/in/theannat404" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-center text-xs text-gray-500 dark:text-gray-400">
              © 2024 NextAuth Explorer. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
        </>
    )
}