import { CopyrightYear } from "@/components/ui/copyright-year";

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto py-8 px-4 max-w-4xl">
      <div className="space-y-8">
        <header>
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground">
            Last updated: <CopyrightYear />
          </p>
        </header>

        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              Welcome to AI Resume Builder. We respect your privacy and are committed to protecting your personal data. 
              This privacy policy will inform you about how we look after your personal data when you visit our website 
              and tell you about your privacy rights and how the law protects you.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Resume Data</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We process the resume information you provide to generate and enhance your resume. This includes 
                  personal information such as your name, contact details, work experience, education, and skills.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Usage Data</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We may collect information about how you use our website, including your IP address, browser type, 
                  and pages visited to improve our service.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>To provide and maintain our resume building service</li>
              <li>To enhance your resume content using AI technology</li>
              <li>To improve our website and services</li>
              <li>To respond to your inquiries and provide customer support</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement appropriate security measures to protect your personal information against unauthorized 
              access, alteration, disclosure, or destruction. However, no method of transmission over the internet 
              is 100% secure.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use AI services (OpenAI and Google Gemini) to enhance resume content. Your data may be processed 
              by these services in accordance with their respective privacy policies.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed">
              You have the right to access, update, or delete your personal information. Since we do not store 
              personal data permanently, your resume information is only processed during your session.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us through our website.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
