import React from "react";

const OurSecurity = () => {
  const securityFeatures = [
    {
      id: 1,
      title: "Bank-Level Encryption",
      description:
        "All your data is encrypted with AES-256, the same standard used by banks.",
      icon: "🔒",
    },
    {
      id: 2,
      title: "Two-Factor Authentication",
      description: "Add an extra layer of security to your account with 2FA.",
      icon: "📱",
    },
    {
      id: 3,
      title: "Regular Security Audits",
      description:
        "We conduct frequent security audits to ensure your data is always protected.",
      icon: "🛡️",
    },
    {
      id: 4,
      title: "Data Privacy",
      description:
        "We never sell or share your personal information with third parties.",
      icon: "🤝",
    },
    {
      id: 5,
      title: "Secure Cloud Storage",
      description:
        "Your data is stored on secure, redundant servers with 99.9% uptime.",
      icon: "☁️",
    },
    {
      id: 6,
      title: "Automatic Logout",
      description: "Sessions automatically expire after periods of inactivity.",
      icon: "⏱️",
    },
  ];

  return (
    <div className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Your Security is Our Priority
          </h2>
          <p className="mt-4 text-xl text-blue-200">
            We implement the highest security standards to protect your
            financial data.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {securityFeatures.map((feature) => (
            <div
              key={feature.id}
              className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-blue-400">
                {feature.title}
              </h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-800 rounded-lg p-8">
          <div className="md:flex">
            <div className="md:w-1/2 md:pr-8">
              <h3 className="text-2xl font-bold mb-4">
                Our Security Certifications
              </h3>
              <p className="text-gray-300 mb-6">
                We comply with industry-leading security standards and hold
                multiple certifications to ensure your data is always safe.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-green-400 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-300">SOC 2 Type II Certified</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-green-400 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-300">GDPR Compliant</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-green-400 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-300">PCI DSS Level 1</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 md:pl-8 mt-8 md:mt-0">
              <h3 className="text-2xl font-bold mb-4">
                Security Tips for Users
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-blue-400">
                    Use Strong Passwords
                  </h4>
                  <p className="text-gray-300">
                    Create unique, complex passwords and change them regularly.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-blue-400">
                    Enable Two-Factor Authentication
                  </h4>
                  <p className="text-gray-300">
                    Add an extra layer of security to your account.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-blue-400">
                    Monitor Account Activity
                  </h4>
                  <p className="text-gray-300">
                    Regularly check your login history for any suspicious
                    activity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurSecurity;
