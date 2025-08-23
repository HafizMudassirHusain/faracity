export const metadata = {
  title: 'Privacy Policy | Fahracity',
  description: 'Our commitment to protecting your privacy and data.'
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#121212] text-gray-200">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">Privacy Policy</h1>
        <p className="text-gray-300 mb-4">We respect your privacy. This page outlines how we collect, use, and protect your information.</p>
        <div className="space-y-4">
          <p>• We only collect data necessary to provide our services.</p>
          <p>• We do not sell your personal information.</p>
          <p>• You can request deletion of your data at any time.</p>
          <p>• For questions, contact us at info@fahracity.com.</p>
        </div>
      </div>
    </div>
  )
}


