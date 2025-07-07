import { CopyrightYear } from "@/components/ui/copyright-year";

export default function TermsOfService() {
  return (
    <div className="container mx-auto py-8 px-4 max-w-4xl">
      <div className="space-y-8">
        <header>
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-muted-foreground">
            Last updated: <CopyrightYear />
          </p>
        </header>

        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Agreement to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing and using AI Resume Builder, you accept and agree to be bound by the terms and provision 
              of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Use License</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Permission is granted to temporarily use AI Resume Builder for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>modify or copy the materials</li>
              <li>use the materials for any commercial purpose or for any public display</li>
              <li>attempt to reverse engineer any software contained on the website</li>
              <li>remove any copyright or other proprietary notations from the materials</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Service Description</h2>
            <p className="text-muted-foreground leading-relaxed">
              AI Resume Builder is a web application that helps users create professional resumes using AI-powered 
              content enhancement. We provide various templates and tools to help you build an effective resume.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">User Responsibilities</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>You are responsible for the accuracy of the information you provide</li>
              <li>You must not use the service for any illegal or unauthorized purpose</li>
              <li>You must not interfere with or disrupt the service or servers</li>
              <li>You are responsible for maintaining the confidentiality of any login information</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">AI Content Enhancement</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our AI enhancement feature uses third-party AI services to improve your resume content. While we strive 
              for accuracy, you should review all AI-generated content before using it in your resume.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Disclaimer</h2>
            <p className="text-muted-foreground leading-relaxed">
              The materials on AI Resume Builder are provided on an &apos;as is&apos; basis. AI Resume Builder makes no 
              warranties, expressed or implied, and hereby disclaims and negates all other warranties including, 
              without limitation, implied warranties or conditions of merchantability, fitness for a particular 
              purpose, or non-infringement of intellectual property or other rights.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Limitations</h2>
            <p className="text-muted-foreground leading-relaxed">
              In no event shall AI Resume Builder or its suppliers be liable for any damages (including, without 
              limitation, damages for loss of data or profit, or due to business interruption) arising out of the 
              use or inability to use the materials on AI Resume Builder, even if AI Resume Builder or an authorized 
              representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Revisions and Errata</h2>
            <p className="text-muted-foreground leading-relaxed">
              The materials appearing on AI Resume Builder could include technical, typographical, or photographic 
              errors. AI Resume Builder does not warrant that any of the materials on its website are accurate, 
              complete, or current.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              These terms and conditions are governed by and construed in accordance with the laws and you 
              irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about these Terms of Service, please contact us through our website.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
