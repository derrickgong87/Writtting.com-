import React from 'react';

export const TermsOfServiceText: React.FC = () => (
  <div className="prose prose-sm prose-slate max-w-none text-slate-600">
    <h3 className="text-xl font-bold text-slate-900 mb-4">Terms of Service</h3>
    <p>Last Updated: October 24, 2024</p>

    <h4 className="font-bold text-slate-900 mt-6 mb-2">1. Acceptance of Terms</h4>
    <p>Welcome to Humanizer.help ("Service", "we", "us", or "our"). By accessing or using our website, applications, or services, you ("User", "you") agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the Service.</p>

    <h4 className="font-bold text-slate-900 mt-6 mb-2">2. Description of Service</h4>
    <p>Humanizer.help provides AI-powered text processing tools designed to paraphrase, edit, and evaluate text content. We strive to provide high-quality outputs that improve readability and flow.</p>

    <h4 className="font-bold text-slate-900 mt-6 mb-2">3. User Eligibility</h4>
    <p>You must be at least 18 years old to use this Service. By using the Service, you represent and warrant that you have the legal capacity to form a binding contract.</p>

    <h4 className="font-bold text-slate-900 mt-6 mb-2">4. User Accounts</h4>
    <p>To access certain features, you may be required to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>

    <h4 className="font-bold text-slate-900 mt-6 mb-2">5. Privacy & Data Usage</h4>
    <p>Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your data. We do not sell your personal data to third parties.</p>

    <h4 className="font-bold text-slate-900 mt-6 mb-2">6. Intellectual Property</h4>
    <p>The Service, including its code, design, and algorithms, is the property of Humanizer.help. You retain all rights to the text content you submit to the Service ("User Content").</p>

    <h4 className="font-bold text-slate-900 mt-6 mb-2">7. Acceptable Use</h4>
    <p>You agree not to use the Service for any unlawful purpose, including but not limited to academic dishonesty, copyright infringement, or generating harmful content.</p>

    <hr className="my-8 border-slate-200" />

    <h4 className="font-bold text-slate-900 mt-6 mb-2 text-red-600">8. Disclaimer of Warranties (AI Detection)</h4>
    <p className="font-medium">Please read this section carefully.</p>
    <ul className="list-disc pl-5 mt-2 space-y-2">
        <li><strong>No Guarantee of Undetectability:</strong> While our technology is designed to reduce the likelihood of AI detection, we explicitly do NOT guarantee that processed text will be 100% undetectable by third-party tools (e.g., Turnitin, GPTZero). Detection algorithms evolve constantly, and results may vary.</li>
        <li><strong>Academic Integrity:</strong> We provide this tool for editing and improvement purposes. We are not responsible for any academic consequences, disciplinary actions, or expulsions resulting from your use of this tool. You bear full responsibility for submitting work that complies with your institution's policies.</li>
    </ul>

    <h4 className="font-bold text-slate-900 mt-6 mb-2">9. Limitation of Liability</h4>
    <p>To the maximum extent permitted by law, Humanizer.help shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits or data, arising out of your use of the Service.</p>

    <h4 className="font-bold text-slate-900 mt-6 mb-2">10. Refunds and Cancellations</h4>
    <p>Subscriptions are billed in advance. Refunds are generally not provided once you have utilized more than 200 words of your plan quota. Cancellations must be made before the renewal date to avoid future charges.</p>

    <h4 className="font-bold text-slate-900 mt-6 mb-2">11. Indemnification</h4>
    <p>You agree to indemnify and hold Humanizer.help harmless from any claims, damages, or expenses arising from your violation of these Terms or your use of the Service.</p>
  </div>
);

export const PrivacyPolicyText: React.FC = () => (
  <div className="prose prose-sm prose-slate max-w-none text-slate-600">
    <h3 className="text-xl font-bold text-slate-900 mb-4">Privacy Policy</h3>
    <p>Last Updated: October 24, 2024</p>
    <p>This Privacy Policy describes how Humanizer.help collects and uses your information.</p>
    
    <h4 className="font-bold text-slate-900 mt-6 mb-2">1. Information We Collect</h4>
    <p>We collect information you provide directly to us, such as when you create an account, submit text for processing, or contact support.</p>
    
    <h4 className="font-bold text-slate-900 mt-6 mb-2">2. Data Security</h4>
    <p>We implement robust security measures to protect your data. All text submissions are encrypted. We do not retain your original text submissions after the processing session is complete.</p>
    
    <h4 className="font-bold text-slate-900 mt-6 mb-2">3. Third-Party Sharing</h4>
    <p>We do not sell your personal data. We may share anonymized usage data with service providers who assist us in operating our website.</p>
  </div>
);

export const LegalPage: React.FC<{ type: 'terms' | 'privacy' }> = ({ type }) => {
    return (
        <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
            <div className="container mx-auto px-6 max-w-3xl">
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100">
                    {type === 'terms' ? <TermsOfServiceText /> : <PrivacyPolicyText />}
                </div>
            </div>
        </div>
    )
}