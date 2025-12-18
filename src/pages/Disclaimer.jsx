import React from "react";
import {
  AlertCircle,
  ExternalLink,
  MessageSquare,
  Users,
  FileText,
  Shield,
} from "lucide-react";

export default function DisclaimerPage() {
  const sections = [
    {
      icon: <AlertCircle className="w-6 h-6" />,
      title: "WEBSITE DISCLAIMER",
      content: [
        'The information provided by Saira International ("Company", "we", "our", "us") on sairainternational.com.np (the "Site") is for general informational purposes only. All information on the Site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.',
        "UNDER NO CIRCUMSTANCE SHALL WE HAVE ANY LIABILITY TO YOU FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF THE SITE OR RELIANCE ON ANY INFORMATION PROVIDED ON THE SITE. YOUR USE OF THE SITE AND YOUR RELIANCE ON ANY INFORMATION ON THE SITE IS SOLELY AT YOUR OWN RISK.",
      ],
    },
    {
      icon: <ExternalLink className="w-6 h-6" />,
      title: "EXTERNAL LINKS DISCLAIMER",
      content: [
        "The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties or links to websites and features. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability or completeness by us.",
        "WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR THE ACCURACY OR RELIABILITY OF ANY INFORMATION OFFERED BY THIRD-PARTY WEBSITES LINKED THROUGH THE SITE OR ANY WEBSITE OR FEATURE LINKED IN ANY BANNER OR OTHER ADVERTISING. WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES.",
      ],
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "TESTIMONIALS DISCLAIMER",
      content: [
        "The Site may contain testimonials by users of our products and/or services. These testimonials reflect the real-life experiences and opinions of such users. However, the experiences are personal to those particular users, and may not necessarily be representative of all users of our products and/or services. We do not claim, and you should not assume that all users will have the same experiences.",
        "YOUR INDIVIDUAL RESULTS MAY VARY.",
        "The testimonials on the Site are submitted in various forms such as text, audio and/or video, and are reviewed by us before being posted. They appear on the Site verbatim as given by the users, except for the correction of grammar or typing errors. Some testimonials may have been shortened for the sake of brevity, where the full testimonial contained extraneous information not relevant to the general public.",
        "The views and opinions contained in the testimonials belong solely to the individual user and do not reflect our views and opinions.",
      ],
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "ERRORS AND OMISSIONS DISCLAIMER",
      content: [
        'While we have made every attempt to ensure that the information contained in this site has been obtained from reliable sources, Saira International Education and Consultancy is not responsible for any errors or omissions or for the results obtained from the use of this information. All information in this site is provided "as is", with no guarantee of completeness, accuracy, timeliness or of the results obtained from the use of this information, and without warranty of any kind, express or implied, including, but not limited to warranties of performance, merchantability, and fitness for a particular purpose.',
        "In no event will Saira International Education and Consultancy, its related partnerships or corporations, or the partners, agents or employees thereof be liable to you or anyone else for any decision made or action taken in reliance on the information in this Site or for any consequential, special or similar damages, even if advised of the possibility of such damages.",
      ],
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "GUEST CONTRIBUTORS DISCLAIMER",
      content: [
        "This Site may include content from guest contributors and any views or opinions expressed in such posts are personal and do not represent those of Saira International Education and Consultancy or any of its staff or affiliates unless explicitly stated.",
      ],
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "LOGOS AND TRADEMARKS DISCLAIMER",
      content: [
        "All logos and trademarks of third parties referenced on sairainternational.com.np are the trademarks and logos of their respective owners. Any inclusion of such trademarks or logos does not imply or constitute any approval, endorsement or sponsorship of Saira International Education and Consultancy by such owners.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-2 sm:mb-3">
            Disclaimer
          </h1>
          <p className="text-slate-600 text-base sm:text-lg">
            Last updated: 19th Nov 2024
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-4 sm:space-y-6">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 sm:p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 text-blue-600 mt-1">
                  {section.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3 sm:mb-4 break-words">
                    {section.title}
                  </h2>
                  <div className="space-y-2 sm:space-y-3 text-slate-700 leading-relaxed">
                    {section.content.map((paragraph, pIndex) => (
                      <p
                        key={pIndex}
                        className="text-xs sm:text-sm break-words"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-6 sm:mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2 sm:mb-3">
            CONTACT US
          </h2>
          <p className="text-slate-700 text-xs sm:text-sm break-words">
            Should you have any feedback, comments, requests for technical
            support or other inquiries, please contact us by email:{" "}
            <a
              href="mailto:sairainternationaledu@gmail.com"
              className="text-blue-600 hover:text-blue-800 font-medium underline break-all"
            >
              sairainternationaledu@gmail.com
            </a>
          </p>
        </div>

        {/* Footer */}
        <div className="mt-8 sm:mt-12 text-center text-slate-500 text-xs sm:text-sm">
          <p>
            © 2024 Saira International Education and Consultancy. All rights
            reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
