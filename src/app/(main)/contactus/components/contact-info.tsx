import { MapPin, Phone, Mail, Twitter, Linkedin, Github, Instagram, Youtube } from 'lucide-react'
import Link from 'next/link'

export default function ContactInfo() {
  return (
    <div className="bg-muted p-6 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
      <div className="space-y-4">
        <div className="flex items-center">
          <MapPin className="w-5 h-5 mr-2 text-primary" />
          <span>Patna Bihar</span>
        </div>
        <div className="flex items-center">
          <Mail className="w-5 h-5 mr-2 text-primary" />
          <Link href="mailto:theanant404@gmail.com" className="hover:underline">
              theanant404@gmail.com
          </Link>
        </div>
        <div className="flex items-center">
          <Twitter className="w-5 h-5 mr-2 text-primary" />
          <Link href="https://x.com/theanant404" className="hover:underline">
          @theannat404
          </Link>
        </div>
        <div className="flex items-center">
          <Linkedin className="w-5 h-5 mr-2 text-primary" />
          <Link href="https://linkedin.com/in/theanant404" className="hover:underline">
          Anant Kumar
          </Link>
        </div>
        <div className="flex items-center">
          <Github className="w-5 h-5 mr-2 text-primary" />
          <Link href="https://www.githun.com/theanant404" className="hover:underline">
          Anant Kumar
          </Link>
        </div>
        <div className="flex items-center">
          <Instagram className="w-5 h-5 mr-2 text-primary" />
          <Link href="https://www.instagram.com/theanant404/" className="hover:underline">
          Anant Kumar
          </Link>
        </div>
        <div className="flex items-center">
          <Youtube className="w-5 h-5 mr-2 text-primary" />
          <Link href="https://www.youtube.com/@theanant404" className="hover:underline">
          Anant Kumar
          </Link>
        </div>
      </div>
    </div>
  )
}

