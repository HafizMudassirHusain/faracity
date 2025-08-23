export const metadata = {
  title: 'Terms of Service | Fahracity',
  description: 'The terms and conditions that govern your use of our website and services.'
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#121212] text-gray-200">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">Terms of Service</h1>
        <div className="space-y-4">
          <p>By using this website, you agree to these terms and all applicable laws.</p>
          <p>All content is provided “as is.” We make no warranties and disclaim liability to the fullest extent permitted by law.</p>
          <p>You agree not to misuse the website or interfere with others’ use.</p>
          <p>Contact us for questions about these terms at info@fahracity.com.</p>
        </div>
      </div>
    </div>
  )
}


