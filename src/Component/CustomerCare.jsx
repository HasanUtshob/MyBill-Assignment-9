import React from "react";

const CustomerCare = () => {
  const supportOptions = [
    {
      id: 1,
      title: "24/7 Live Chat",
      description:
        "Get instant help from our support team anytime, day or night.",
      icon: (
        <svg
          className="w-8 h-8 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Email Support",
      description: "Send us an email and well respond within 24 hours.",
      icon: (
        <svg
          className="w-8 h-8 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Help Center",
      description: "Browse our comprehensive knowledge base for answers.",
      icon: (
        <svg
          className="w-8 h-8 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            We're Here to Help
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Our customer care team is dedicated to providing you with the best
            support experience.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {supportOptions.map((option) => (
            <div
              key={option.id}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
            >
              <div className="mb-4">{option.icon}</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {option.title}
              </h3>
              <p className="text-gray-600">{option.description}</p>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                Get Help
              </button>
            </div>
          ))}
        </div>
        <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-medium text-gray-900 mb-4">
            Frequently Asked Questions
          </h3>
          <div className="space-y-4">
            <div className="border-b border-gray-200 pb-4">
              <h4 className="font-medium text-gray-900">
                How do I add a new bill?
              </h4>
              <p className="mt-1 text-gray-600">
                Navigate to the "Add Bill" section in your dashboard and fill in
                the required details. You can set up recurring bills as well.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <h4 className="font-medium text-gray-900">
                Is my financial data secure?
              </h4>
              <p className="mt-1 text-gray-600">
                Yes, we use bank-level encryption and never store your banking
                credentials. Your data's security is our top priority.
              </p>
            </div>
            <div className="pb-4">
              <h4 className="font-medium text-gray-900">
                Can I export my bill history?
              </h4>
              <p className="mt-1 text-gray-600">
                Absolutely! You can export your bill history in CSV or PDF
                format from the reports section.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerCare;
