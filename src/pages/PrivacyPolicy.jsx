import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Shield,
  Lock,
  Eye,
  FileText,
} from "lucide-react";

const PrivacyPolicy = () => {
  const [section1, setSection1] = useState(false);
  const [section2, setSection2] = useState(false);
  const [section3, setSection3] = useState(false);
  const [section4, setSection4] = useState(false);
  const [section5, setSection5] = useState(false);
  const [section6, setSection6] = useState(false);
  const [section7, setSection7] = useState(false);
  const [section8, setSection8] = useState(false);
  const [section9, setSection9] = useState(false);
  const [section10, setSection10] = useState(false);
  const [section11, setSection11] = useState(false);
  const [section12, setSection12] = useState(false);
  const [section13, setSection13] = useState(false);
  const [section14, setSection14] = useState(false);
  const [section15, setSection15] = useState(false);
  const [section16, setSection16] = useState(false);
  const [section17, setSection17] = useState(false);
  const [section18, setSection18] = useState(false);
  const [section19, setSection19] = useState(false);
  const [section20, setSection20] = useState(false);
  const [section21, setSection21] = useState(false);

  return (
    <>
  
    <title>Privacy policy Page</title>
      <meta
        name="description"
        content="This is the privacy policy page of Saira International Education and Consultancy website"
      />
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <Shield className="w-8 h-8 text-blue-600" />
            <div>
              <h1 className="text-3xl font-bold text-slate-900">
                Privacy Policy
              </h1>
              <p className="text-sm text-slate-600 mt-1">
                Saira International Education and Consultancy -
                sairainternational.com.np
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="space-y-4">
          {/* Section 1 - Introduction */}
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden transition-all hover:shadow-md">
            <button
              onClick={() => setSection1(!section1)}
              className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <h2 className="text-lg font-semibold text-slate-900">
                  1. Introduction
                </h2>
              </div>
              {section1 ? (
                <ChevronUp className="w-5 h-5 text-slate-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-slate-400" />
              )}
            </button>
            {section1 && (
              <div className="px-6 pb-6 pt-2 text-slate-700 space-y-4">
                <p className="leading-relaxed">Welcome to Sure Solution.</p>
                <p className="leading-relaxed">
                  Saira International Education and Consultancy ("us", "we", or
                  "our") operates sairainternational.com.np (hereinafter
                  referred to as "Service").
                </p>
                <p className="leading-relaxed">
                  Our Privacy Policy governs your visit to
                  sairainternational.com.np, and explains how we collect,
                  safeguard and disclose information that results from your use
                  of our Service.
                </p>
                <p className="leading-relaxed">
                  We use your data to provide and improve Service. By using
                  Service, you agree to the collection and use of information in
                  accordance with this policy. Unless otherwise defined in this
                  Privacy Policy, the terms used in this Privacy Policy have the
                  same meanings as in our Terms and Conditions.
                </p>
                <p className="leading-relaxed">
                  Our Terms and Conditions ("Terms") govern all use of our
                  Service and together with the Privacy Policy constitutes your
                  agreement with us ("agreement").
                </p>
              </div>
            )}
          </div>

          {/* Section 2 - Definitions */}
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden transition-all hover:shadow-md">
            <button
              onClick={() => setSection2(!section2)}
              className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <h2 className="text-lg font-semibold text-slate-900">
                  2. Definitions
                </h2>
              </div>
              {section2 ? (
                <ChevronUp className="w-5 h-5 text-slate-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-slate-400" />
              )}
            </button>
            {section2 && (
              <div className="px-6 pb-6 pt-2 text-slate-700 space-y-3">
                <div className="border-l-2 border-blue-200 pl-4">
                  <span className="font-semibold text-slate-900">SERVICE</span>
                  <span className="text-slate-700">
                    {" "}
                    means the sairainternational.com.np website operated by
                    Saira International.
                  </span>
                </div>
                <div className="border-l-2 border-blue-200 pl-4">
                  <span className="font-semibold text-slate-900">
                    PERSONAL DATA
                  </span>
                  <span className="text-slate-700">
                    {" "}
                    means data about a living individual who can be identified
                    from those data (or from those and other information either
                    in our possession or likely to come into our possession).
                  </span>
                </div>
                <div className="border-l-2 border-blue-200 pl-4">
                  <span className="font-semibold text-slate-900">
                    USAGE DATA
                  </span>
                  <span className="text-slate-700">
                    {" "}
                    is data collected automatically either generated by the use
                    of Service or from Service infrastructure itself (for
                    example, the duration of a page visit).
                  </span>
                </div>
                <div className="border-l-2 border-blue-200 pl-4">
                  <span className="font-semibold text-slate-900">COOKIES</span>
                  <span className="text-slate-700">
                    {" "}
                    are small files stored on your device (computer or mobile
                    device).
                  </span>
                </div>
                <div className="border-l-2 border-blue-200 pl-4">
                  <span className="font-semibold text-slate-900">
                    DATA CONTROLLER
                  </span>
                  <span className="text-slate-700">
                    {" "}
                    means a natural or legal person who (either alone or jointly
                    or in common with other persons) determines the purposes for
                    which and the manner in which any personal data are, or are
                    to be, processed. For the purpose of this Privacy Policy, we
                    are a Data Controller of your data.
                  </span>
                </div>
                <div className="border-l-2 border-blue-200 pl-4">
                  <span className="font-semibold text-slate-900">
                    DATA PROCESSORS (OR SERVICE PROVIDERS)
                  </span>
                  <span className="text-slate-700">
                    {" "}
                    means any natural or legal person who processes the data on
                    behalf of the Data Controller. We may use the services of
                    various Service Providers in order to process your data more
                    effectively.
                  </span>
                </div>
                <div className="border-l-2 border-blue-200 pl-4">
                  <span className="font-semibold text-slate-900">
                    DATA SUBJECT
                  </span>
                  <span className="text-slate-700">
                    {" "}
                    is any living individual who is the subject of Personal
                    Data.
                  </span>
                </div>
                <div className="border-l-2 border-blue-200 pl-4">
                  <span className="font-semibold text-slate-900">THE USER</span>
                  <span className="text-slate-700">
                    {" "}
                    is the individual using our Service. The User corresponds to
                    the Data Subject, who is the subject of Personal Data.
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Section 3 - Information Collection and Use */}
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden transition-all hover:shadow-md">
            <button
              onClick={() => setSection3(!section3)}
              className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Eye className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <h2 className="text-lg font-semibold text-slate-900">
                  3. Information Collection and Use
                </h2>
              </div>
              {section3 ? (
                <ChevronUp className="w-5 h-5 text-slate-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-slate-400" />
              )}
            </button>
            {section3 && (
              <div className="px-6 pb-6 pt-2 text-slate-700">
                <p className="leading-relaxed">
                  We collect several different types of information for various
                  purposes to provide and improve our Service to you.
                </p>
              </div>
            )}
          </div>

          {/* Section 4 - Types of Data Collected */}
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden transition-all hover:shadow-md">
            <button
              onClick={() => setSection4(!section4)}
              className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Lock className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <h2 className="text-lg font-semibold text-slate-900">
                  4. Types of Data Collected
                </h2>
              </div>
              {section4 ? (
                <ChevronUp className="w-5 h-5 text-slate-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-slate-400" />
              )}
            </button>
            {section4 && (
              <div className="px-6 pb-6 pt-2 text-slate-700 space-y-6">
                <div className="border-l-2 border-slate-200 pl-4">
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Personal Data
                  </h3>
                  <p className="leading-relaxed mb-2">
                    While using our Service, we may ask you to provide us with
                    certain personally identifiable information that can be used
                    to contact or identify you ("Personal Data"). Personally
                    identifiable information may include, but is not limited to:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Email address</li>
                    <li>First name and last name</li>
                    <li>Phone number</li>
                    <li>
                      Address, Country, State, Province, ZIP/Postal code, City
                    </li>
                    <li>Cookies and Usage Data</li>
                  </ul>
                  <p className="leading-relaxed text-slate-600 italic mt-3">
                    We may use your Personal Data to contact you with
                    newsletters, marketing or promotional materials and other
                    information that may be of interest to you. You may opt out
                    of receiving any, or all, of these communications from us by
                    following the unsubscribe link.
                  </p>
                </div>

                <div className="border-l-2 border-slate-200 pl-4">
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Usage Data
                  </h3>
                  <p className="leading-relaxed mb-2">
                    We may also collect information that your browser sends
                    whenever you visit our Service or when you access Service by
                    or through any device ("Usage Data").
                  </p>
                  <p className="leading-relaxed mb-2">
                    This Usage Data may include information such as your
                    computer's Internet Protocol address (e.g. IP address),
                    browser type, browser version, the pages of our Service that
                    you visit, the time and date of your visit, the time spent
                    on those pages, unique device identifiers and other
                    diagnostic data.
                  </p>
                  <p className="leading-relaxed">
                    When you access Service with a device, this Usage Data may
                    include information such as the type of device you use, your
                    device unique ID, the IP address of your device, your device
                    operating system, the type of Internet browser you use,
                    unique device identifiers and other diagnostic data.
                  </p>
                </div>

                <div className="border-l-2 border-slate-200 pl-4">
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Location Data
                  </h3>
                  <p className="leading-relaxed mb-2">
                    We may use and store information about your location if you
                    give us permission to do so ("Location Data"). We use this
                    data to provide features of our Service, to improve and
                    customize our Service.
                  </p>
                  <p className="leading-relaxed">
                    You can enable or disable location services when you use our
                    Service at any time by way of your device settings.
                  </p>
                </div>

                <div className="border-l-2 border-slate-200 pl-4">
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Tracking Cookies Data
                  </h3>
                  <p className="leading-relaxed mb-2">
                    We use cookies and similar tracking technologies to track
                    the activity on our Service and we hold certain information.
                  </p>
                  <p className="leading-relaxed mb-2">
                    Cookies are files with a small amount of data which may
                    include an anonymous unique identifier. Cookies are sent to
                    your browser from a website and stored on your device. Other
                    tracking technologies are also used such as beacons, tags
                    and scripts to collect and track information and to improve
                    and analyze our Service.
                  </p>
                  <p className="leading-relaxed mb-3">
                    You can instruct your browser to refuse all cookies or to
                    indicate when a cookie is being sent. However, if you do not
                    accept cookies, you may not be able to use some portions of
                    our Service.
                  </p>
                  <div className="mt-3">
                    <p className="font-medium text-slate-800 mb-2">
                      Examples of Cookies we use:
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>
                        Session Cookies: We use Session Cookies to operate our
                        Service.
                      </li>
                      <li>
                        Preference Cookies: We use Preference Cookies to
                        remember your preferences and various settings.
                      </li>
                      <li>
                        Security Cookies: We use Security Cookies for security
                        purposes.
                      </li>
                      <li>
                        Advertising Cookies: Advertising Cookies are used to
                        serve you with advertisements that may be relevant to
                        you and your interests.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="border-l-2 border-slate-200 pl-4">
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Other Data
                  </h3>
                  <p className="leading-relaxed">
                    While using our Service, we may also collect the following
                    information: sex, age, date of birth, place of birth,
                    passport details, citizenship, registration at place of
                    residence and actual address, telephone number (work,
                    mobile), details of documents on education, qualification,
                    professional training, employment agreements, NDA
                    agreements, information on bonuses and compensation,
                    information on marital status, family members, social
                    security (or other taxpayer identification) number, office
                    location and other data.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Section 5 - Use of Data */}
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden transition-all hover:shadow-md">
            <button
              onClick={() => setSection5(!section5)}
              className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <h2 className="text-lg font-semibold text-slate-900">
                  5. Use of Data
                </h2>
              </div>
              {section5 ? (
                <ChevronUp className="w-5 h-5 text-slate-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-slate-400" />
              )}
            </button>
            {section5 && (
              <div className="px-6 pb-6 pt-2 text-slate-700 space-y-4">
                <p className="leading-relaxed">
                  Saira International uses the collected data for various
                  purposes:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>to provide and maintain our Service;</li>
                  <li>to notify you about changes to our Service;</li>
                  <li>
                    to allow you to participate in interactive features of our
                    Service when you choose to do so;
                  </li>
                  <li>to provide customer support;</li>
                  <li>
                    to gather analysis or valuable information so that we can
                    improve our Service;
                  </li>
                  <li>to monitor the usage of our Service;</li>
                  <li>to detect, prevent and address technical issues;</li>
                  <li>to fulfil any other purpose for which you provide it;</li>
                  <li>
                    to carry out our obligations and enforce our rights arising
                    from any contracts entered into between you and us,
                    including for billing and collection;
                  </li>
                  <li>
                    to provide you with notices about your account and/or
                    subscription, including expiration and renewal notices,
                    email-instructions, etc.;
                  </li>
                  <li>
                    to provide you with news, special offers and general
                    information about other goods, services and events which we
                    offer that are similar to those that you have already
                    purchased or enquired about unless you have opted not to
                    receive such information;
                  </li>
                  <li>
                    in any other way we may describe when you provide the
                    information;
                  </li>
                  <li>for any other purpose with your consent.</li>
                </ul>
              </div>
            )}
          </div>

          {/* Section 6 - Retention of Data */}
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden transition-all hover:shadow-md">
            <button
              onClick={() => setSection6(!section6)}
              className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <h2 className="text-lg font-semibold text-slate-900">
                  6. Retention of Data
                </h2>
              </div>
              {section6 ? (
                <ChevronUp className="w-5 h-5 text-slate-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-slate-400" />
              )}
            </button>
            {section6 && (
              <div className="px-6 pb-6 pt-2 text-slate-700 space-y-4">
                <p className="leading-relaxed">
                  We will retain your Personal Data only for as long as is
                  necessary for the purposes set out in this Privacy Policy. We
                  will retain and use your Personal Data to the extent necessary
                  to comply with our legal obligations (for example, if we are
                  required to retain your data to comply with applicable laws),
                  resolve disputes, and enforce our legal agreements and
                  policies.
                </p>
                <p className="leading-relaxed">
                  We will also retain Usage Data for internal analysis purposes.
                  Usage Data is generally retained for a shorter period, except
                  when this data is used to strengthen the security or to
                  improve the functionality of our Service, or we are legally
                  obligated to retain this data for longer time periods.
                </p>
              </div>
            )}
          </div>

          {/* Section 7 - Transfer of Data */}
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden transition-all hover:shadow-md">
            <button
              onClick={() => setSection7(!section7)}
              className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <h2 className="text-lg font-semibold text-slate-900">
                  7. Transfer of Data
                </h2>
              </div>
              {section7 ? (
                <ChevronUp className="w-5 h-5 text-slate-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-slate-400" />
              )}
            </button>
            {section7 && (
              <div className="px-6 pb-6 pt-2 text-slate-700 space-y-4">
                <p className="leading-relaxed">
                  Your information, including Personal Data, may be transferred
                  to – and maintained on – computers located outside of your
                  state, province, country or other governmental jurisdiction
                  where the data protection laws may differ from those of your
                  jurisdiction.
                </p>
                <p className="leading-relaxed">
                  If you are located outside Valletta, Malta and choose to
                  provide information to us, please note that we transfer the
                  data, including Personal Data, to Valletta, Malta and process
                  it there.
                </p>
                <p className="leading-relaxed">
                  Your consent to this Privacy Policy followed by your
                  submission of such information represents your agreement to
                  that transfer.
                </p>
                <p className="leading-relaxed">
                  Saira International will take all the steps reasonably
                  necessary to ensure that your data is treated securely and in
                  accordance with this Privacy Policy and no transfer of your
                  Personal Data will take place to an organisation or a country
                  unless there are adequate controls in place including the
                  security of your data and other personal information.
                </p>
              </div>
            )}
          </div>

          {/* Section 8 - Disclosure of Data */}
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden transition-all hover:shadow-md">
            <button
              onClick={() => setSection8(!section8)}
              className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <h2 className="text-lg font-semibold text-slate-900">
                  8. Disclosure of Data
                </h2>
              </div>
              {section8 ? (
                <ChevronUp className="w-5 h-5 text-slate-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-slate-400" />
              )}
            </button>
            {section8 && (
              <div className="px-6 pb-6 pt-2 text-slate-700 space-y-4">
                <p className="leading-relaxed">
                  We may disclose personal information that we collect, or you
                  provide:
                </p>

                <div className="border-l-2 border-slate-200 pl-4">
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Disclosure for Law Enforcement
                  </h3>
                  <p className="leading-relaxed">
                    Under certain circumstances, we may be required to disclose
                    your Personal Data if required to do so by law or in
                    response to valid requests by public authorities.
                  </p>
                </div>

                <div className="border-l-2 border-slate-200 pl-4">
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Business Transaction
                  </h3>
                  <p className="leading-relaxed">
                    If we or our subsidiaries are involved in a merger,
                    acquisition or asset sale, your Personal Data may be
                    transferred.
                  </p>
                </div>

                <div className="border-l-2 border-slate-200 pl-4">
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Other cases
                  </h3>
                  <p className="leading-relaxed mb-2">
                    We may disclose your information also:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>to our subsidiaries and affiliates;</li>
                    <li>
                      to contractors, service providers, and other third parties
                      we use to support our business;
                    </li>
                    <li>to fulfill the purpose for which you provide it;</li>
                    <li>
                      for the purpose of including your company's logo on our
                      website;
                    </li>
                    <li>
                      for any other purpose disclosed by us when you provide the
                      information;
                    </li>
                    <li>with your consent in any other cases;</li>
                    <li>
                      if we believe disclosure is necessary or appropriate to
                      protect the rights, property, or safety of the Company,
                      our customers, or others.
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Section 9 - Security of Data */}
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden transition-all hover:shadow-md">
            <button
              onClick={() => setSection9(!section9)}
              className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <h2 className="text-lg font-semibold text-slate-900">
                  9. Security of Data
                </h2>
              </div>
              {section9 ? (
                <ChevronUp className="w-5 h-5 text-slate-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-slate-400" />
              )}
            </button>
            {section9 && (
              <div className="px-6 pb-6 pt-2 text-slate-700">
                <p className="leading-relaxed">
                  The security of your data is important to us but remember that
                  no method of transmission over the Internet or method of
                  electronic storage is 100% secure. While we strive to use
                  commercially acceptable means to protect your Personal Data,
                  we cannot guarantee its absolute security.
                </p>
              </div>
            )}
          </div>

          {/* Section 10 - GDPR */}
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden transition-all hover:shadow-md">
            <button
              onClick={() => setSection10(!section10)}
              className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <h2 className="text-lg font-semibold text-slate-900">
                  10. Your Data Protection Rights Under GDPR
                </h2>
              </div>
              {section10 ? (
                <ChevronUp className="w-5 h-5 text-slate-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-slate-400" />
              )}
            </button>
            {section10 && (
              <div className="px-6 pb-6 pt-2 text-slate-700 space-y-4">
                <p className="leading-relaxed">
                  If you are a resident of the European Union (EU) and European
                  Economic Area (EEA), you have certain data protection rights,
                  covered by GDPR.
                </p>
                <p className="leading-relaxed">
                  We aim to take reasonable steps to allow you to correct,
                  amend, delete, or limit the use of your Personal Data.
                </p>
                <p className="leading-relaxed">
                  If you wish to be informed what Personal Data we hold about
                  you and if you want it to be removed from our systems, please
                  email us at sairainternationaledu@gmail.com.
                </p>
                <p className="leading-relaxed">
                  In certain circumstances, you have the following data
                  protection rights:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    the right to access, update or to delete the information we
                    have on you;
                  </li>
                  <li>
                    the right of rectification. You have the right to have your
                    information rectified if that information is inaccurate or
                    incomplete;
                  </li>
                  <li>
                    the right to object. You have the right to object to our
                    processing of your Personal Data;
                  </li>
                  <li>
                    the right of restriction. You have the right to request that
                    we restrict the processing of your personal information;
                  </li>
                  <li>
                    the right to data portability. You have the right to be
                    provided with a copy of your Personal Data in a structured,
                    machine-readable and commonly used format;
                  </li>
                  <li>
                    the right to withdraw consent. You also have the right to
                    withdraw your consent at any time where we rely on your
                    consent to process your personal information;
                  </li>
                </ul>
                <p className="leading-relaxed">
                  Please note that we may ask you to verify your identity before
                  responding to such requests. Please note, we may not able to
                  provide Service without some necessary data.
                </p>
                <p className="leading-relaxed">
                  You have the right to complain to a Data Protection Authority
                  about our collection and use of your Personal Data. For more
                  information, please contact your local data protection
                  authority in the European Economic Area (EEA).
                </p>
              </div>
            )}
          </div>

          {/* Section 11 - CalOPPA */}
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden transition-all hover:shadow-md">
            <button
              onClick={() => setSection11(!section11)}
              className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <h2 className="text-lg font-semibold text-slate-900">
                  11. Your Data Protection Rights under CalOPPA
                </h2>
              </div>
              {section11 ? (
                <ChevronUp className="w-5 h-5 text-slate-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-slate-400" />
              )}
            </button>
            {section11 && (
              <div className="px-6 pb-6 pt-2 text-slate-700 space-y-4">
                <p className="leading-relaxed">
                  CalOPPA is the first state law in the nation to require
                  commercial websites and online services to post a privacy
                  policy. The law's reach stretches well beyond California to
                  require a person or company in the United States (and
                  conceivable the world) that operates websites collecting
                  personally identifiable information from California consumers
                  to post a conspicuous privacy policy on its website stating
                  exactly the information being collected and those individuals
                  with whom it is being shared, and to comply with this policy.
                </p>
                <p className="leading-relaxed">
                  According to CalOPPA we agree to the following:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>users can visit our site anonymously;</li>
                  <li>
                    our Privacy Policy link includes the word "Privacy", and can
                    easily be found on the home page of our website;
                  </li>
                  <li>
                    users will be notified of any privacy policy changes on our
                    Privacy Policy Page;
                  </li>
                  <li>
                    users are able to change their personal information by
                    emailing us at sairainternationaledu@gmail.com.
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Our Policy on "Do Not Track" Signals:
                  </h3>
                  <p className="leading-relaxed mb-2">
                    We honor Do Not Track signals and do not track, plant
                    cookies, or use advertising when a Do Not Track browser
                    mechanism is in place. Do Not Track is a preference you can
                    set in your web browser to inform websites that you do not
                    want to be tracked.
                  </p>
                  <p className="leading-relaxed">
                    You can enable or disable Do Not Track by visiting the
                    Preferences or Settings page of your web browser.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Section 12 - CCPA */}
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden transition-all hover:shadow-md">
            <button
              onClick={() => setSection12(!section12)}
              className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <h2 className="text-lg font-semibold text-slate-900">
                  12. Your Data Protection Rights under CCPA
                </h2>
              </div>
              {section12 ? (
                <ChevronUp className="w-5 h-5 text-slate-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-slate-400" />
              )}
            </button>
            {section12 && (
              <div className="px-6 pb-6 pt-2 text-slate-700 space-y-4">
                <p className="leading-relaxed">
                  If you are a California resident, you are entitled to learn
                  what data we collect about you, ask to delete your data and
                  not to sell (share) it. To exercise your data protection
                  rights, you can make certain requests and ask us:
                </p>

                <div className="ml-4 space-y-4">
                  <div>
                    <p className="font-semibold text-slate-900 mb-2">
                      What personal information we have about you. If you make
                      this request, we will return to you:
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-4 text-slate-700">
                      <li>
                        The categories of personal information we have collected
                        about you.
                      </li>
                      <li>
                        The categories of sources from which we collect your
                        personal information.
                      </li>
                      <li>
                        The business or commercial purpose for collecting or
                        selling your personal information.
                      </li>
                      <li>
                        The categories of third parties with whom we share
                        personal information.
                      </li>
                      <li>
                        The specific pieces of personal information we have
                        collected about you.
                      </li>
                      <li>
                        A list of categories of personal information that we
                        have sold, along with the category of any other company
                        we sold it to. If we have not sold your personal
                        information, we will inform you of that fact.
                      </li>
                      <li>
                        A list of categories of personal information that we
                        have disclosed for a business purpose, along with the
                        category of any other company we shared it with.
                      </li>
                    </ul>
                    <p className="mt-3 text-slate-700">
                      Please note, you are entitled to ask us to provide you
                      with this information up to two times in a rolling
                      twelve-month period. When you make this request, the
                      information provided may be limited to the personal
                      information we collected about you in the previous 12
                      months.
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-slate-900 mb-2">
                      To delete your personal information.
                    </p>
                    <p className="text-slate-700">
                      If you make this request, we will delete the personal
                      information we hold about you as of the date of your
                      request from our records and direct any service providers
                      to do the same. In some cases, deletion may be
                      accomplished through de-identification of the information.
                      If you choose to delete your personal information, you may
                      not be able to use certain functions that require your
                      personal information to operate.
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-slate-900 mb-2">
                      To stop selling your personal information.
                    </p>
                    <p className="text-slate-700 mb-2">
                      We don't sell or rent your personal information to any
                      third parties for any purpose. We do not sell your
                      personal information for monetary consideration. However,
                      under some circumstances, a transfer of personal
                      information to a third party, or within our family of
                      companies, without monetary consideration may be
                      considered a "sale" under California law. You are the only
                      owner of your Personal Data and can request disclosure or
                      deletion at any time.
                    </p>
                    <p className="text-slate-700">
                      If you submit a request to stop selling your personal
                      information, we will stop making such transfers.
                    </p>
                  </div>
                </div>

                <p className="text-slate-700">
                  Please note, if you ask us to delete or stop selling your
                  data, it may impact your experience with us, and you may not
                  be able to participate in certain programs or membership
                  services which require the usage of your personal information
                  to function. But in no circumstances, we will discriminate
                  against you for exercising your rights.
                </p>
                <p className="text-slate-700">
                  To exercise your California data protection rights described
                  above, please send your request(s) by email:{" "}
                  <a
                    href="mailto:sairainternationaledu@gmail.com"
                    className="text-blue-600 hover:underline"
                  >
                    sairainternationaledu@gmail.com
                  </a>
                  .
                </p>
                <p className="text-slate-700">
                  Your data protection rights, described above, are covered by
                  the CCPA, short for the California Consumer Privacy Act. To
                  find out more, visit the official California Legislative
                  Information website. The CCPA took effect on 01/01/2020.
                </p>
              </div>
            )}
          </div>

          {/* Section 13 - Service Providers */}
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden transition-all hover:shadow-md">
            <button
              onClick={() => setSection13(!section13)}
              className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <h2 className="text-lg font-semibold text-slate-900">
                  13. Service Providers
                </h2>
              </div>
              {section13 ? (
                <ChevronUp className="w-5 h-5 text-slate-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-slate-400" />
              )}
            </button>
            {section13 && (
              <div className="px-6 pb-6 pt-2 text-slate-700 space-y-4">
                <p className="leading-relaxed">
                  We may employ third party companies and individuals to
                  facilitate our Service ("Service Providers"), provide Service
                  on our behalf, perform Service-related services or assist us
                  in analysing how our Service is used.
                </p>
                <p className="leading-relaxed">
                  These third parties have access to your Personal Data only to
                  perform these tasks on our behalf and are obligated not to
                  disclose or use it for any other purpose.
                </p>
              </div>
            )}
          </div>

          {/* Section 14 - Analytics */}
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden transition-all hover:shadow-md">
            <button
              onClick={() => setSection14(!section14)}
              className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <h2 className="text-lg font-semibold text-slate-900">
                  14. Analytics
                </h2>
              </div>
              {section14 ? (
                <ChevronUp className="w-5 h-5 text-slate-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-slate-400" />
              )}
            </button>
            {section14 && (
              <div className="px-6 pb-6 pt-2 text-slate-700">
                <p className="leading-relaxed">
                  We may use third-party Service Providers to monitor and
                  analyze the use of our Service.
                </p>
              </div>
            )}
          </div>

          {/* Section 15 - CI/CD tools */}
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden transition-all hover:shadow-md">
            <button
              onClick={() => setSection15(!section15)}
              className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <h2 className="text-lg font-semibold text-slate-900">
                  15. CI/CD tools
                </h2>
              </div>
              {section15 ? (
                <ChevronUp className="w-5 h-5 text-slate-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-slate-400" />
              )}
            </button>
            {section15 && (
              <div className="px-6 pb-6 pt-2 text-slate-700">
                <p className="leading-relaxed">
                  We may use third-party Service Providers to automate the
                  development process of our Service.
                </p>
              </div>
            )}
          </div>

          {/* Section 16 - Behavioral Remarketing */}
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden transition-all hover:shadow-md">
            <button
              onClick={() => setSection16(!section16)}
              className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <h2 className="text-lg font-semibold text-slate-900">
                  16. Behavioral Remarketing
                </h2>
              </div>
              {section16 ? (
                <ChevronUp className="w-5 h-5 text-slate-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-slate-400" />
              )}
            </button>
            {section16 && (
              <div className="px-6 pb-6 pt-2 text-slate-700">
                <p className="leading-relaxed">
                  We may use remarketing services to advertise on third party
                  websites to you after you visited our Service. We and our
                  third-party vendors use cookies to inform, optimise and serve
                  ads based on your past visits to our Service.
                </p>
              </div>
            )}
          </div>

          {/* Section 17 - Payments */}
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden transition-all hover:shadow-md">
            <button
              onClick={() => setSection17(!section17)}
              className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Lock className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <h2 className="text-lg font-semibold text-slate-900">
                  17. Payments
                </h2>
              </div>
              {section17 ? (
                <ChevronUp className="w-5 h-5 text-slate-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-slate-400" />
              )}
            </button>
            {section17 && (
              <div className="px-6 pb-6 pt-2 text-slate-700 space-y-4">
                <p className="leading-relaxed">
                  We may provide paid products and/or services within Service.
                  In that case, we use third-party services for payment
                  processing (e.g. payment processors).
                </p>
                <p className="leading-relaxed">
                  We will not store or collect your payment card details. That
                  information is provided directly to our third-party payment
                  processors whose use of your personal information is governed
                  by their Privacy Policy. These payment processors adhere to
                  the standards set by PCI-DSS as managed by the PCI Security
                  Standards Council, which is a joint effort of brands like
                  Visa, Mastercard, American Express and Discover. PCI-DSS
                  requirements help ensure the secure handling of payment
                  information.
                </p>
              </div>
            )}
          </div>

          {/* Section 18 - Links to Other Sites */}
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden transition-all hover:shadow-md">
            <button
              onClick={() => setSection18(!section18)}
              className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <h2 className="text-lg font-semibold text-slate-900">
                  18. Links to Other Sites
                </h2>
              </div>
              {section18 ? (
                <ChevronUp className="w-5 h-5 text-slate-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-slate-400" />
              )}
            </button>
            {section18 && (
              <div className="px-6 pb-6 pt-2 text-slate-700 space-y-4">
                <p className="leading-relaxed">
                  Our Service may contain links to other sites that are not
                  operated by us. If you click a third party link, you will be
                  directed to that third party's site. We strongly advise you to
                  review the Privacy Policy of every site you visit.
                </p>
                <p className="leading-relaxed">
                  We have no control over and assume no responsibility for the
                  content, privacy policies or practices of any third party
                  sites or services.
                </p>
              </div>
            )}
          </div>

          {/* Section 19 - Children's Privacy */}
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden transition-all hover:shadow-md">
            <button
              onClick={() => setSection19(!section19)}
              className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <h2 className="text-lg font-semibold text-slate-900">
                  19. Children's Privacy
                </h2>
              </div>
              {section19 ? (
                <ChevronUp className="w-5 h-5 text-slate-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-slate-400" />
              )}
            </button>
            {section19 && (
              <div className="px-6 pb-6 pt-2 text-slate-700 space-y-4">
                <p className="leading-relaxed">
                  Our Services are not intended for use by children under the
                  age of 18 ("Child" or "Children").
                </p>
                <p className="leading-relaxed">
                  We do not knowingly collect personally identifiable
                  information from Children under 18. If you become aware that a
                  Child has provided us with Personal Data, please contact us.
                  If we become aware that we have collected Personal Data from
                  Children without verification of parental consent, we take
                  steps to remove that information from our servers.
                </p>
              </div>
            )}
          </div>

          {/* Section 20 - Changes to This Privacy Policy */}
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden transition-all hover:shadow-md">
            <button
              onClick={() => setSection20(!section20)}
              className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <h2 className="text-lg font-semibold text-slate-900">
                  20. Changes to This Privacy Policy
                </h2>
              </div>
              {section20 ? (
                <ChevronUp className="w-5 h-5 text-slate-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-slate-400" />
              )}
            </button>
            {section20 && (
              <div className="px-6 pb-6 pt-2 text-slate-700 space-y-4">
                <p className="leading-relaxed">
                  We may update our Privacy Policy from time to time. We will
                  notify you of any changes by posting the new Privacy Policy on
                  this page.
                </p>
                <p className="leading-relaxed">
                  We will let you know via email and/or a prominent notice on
                  our Service, prior to the change becoming effective and update
                  "effective date" at the top of this Privacy Policy.
                </p>
                <p className="leading-relaxed">
                  You are advised to review this Privacy Policy periodically for
                  any changes. Changes to this Privacy Policy are effective when
                  they are posted on this page.
                </p>
              </div>
            )}
          </div>

          {/* Section 21 - Contact Us */}
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden transition-all hover:shadow-md">
            <button
              onClick={() => setSection21(!section21)}
              className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <h2 className="text-lg font-semibold text-slate-900">
                  21. Contact Us
                </h2>
              </div>
              {section21 ? (
                <ChevronUp className="w-5 h-5 text-slate-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-slate-400" />
              )}
            </button>
            {section21 && (
              <div className="px-6 pb-6 pt-2 text-slate-700">
                <p className="leading-relaxed">
                  If you have any questions about this Privacy Policy, please
                  contact us by email:{" "}
                  <a
                    href="mailto:sairainternationaledu@gmail.com"
                    className="text-blue-600 hover:underline"
                  >
                    sairainternationaledu@gmail.com
                  </a>
                  .
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-slate-300">
          <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
            <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-600" />
              Questions or Concerns?
            </h3>
            <p className="text-slate-700">
              If you have any questions about this Privacy Policy, please
              contact us at:{" "}
              <a
                href="mailto:sairainternationaledu@gmail.com"
                className="text-blue-600 hover:underline font-medium"
              >
                sairainternationaledu@gmail.com
              </a>
            </p>
          </div>
          <p className="text-center text-sm text-slate-500 mt-6">
            © {new Date().getFullYear()} Saira International Education and
            Consultancy. All rights reserved.
          </p>
        </footer>
      </main>
    </div>
      </>
  );
};

export default PrivacyPolicy;
