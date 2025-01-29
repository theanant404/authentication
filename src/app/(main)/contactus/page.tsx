import ContactForm from './components/contact-form'
import ContactInfo from './components/contact-info'
import Map from './components/map'

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <ContactForm />
        </div>
        <div className="space-y-8">
          <ContactInfo />
          <Map />
        </div>
      </div>
    </div>
  )
}

