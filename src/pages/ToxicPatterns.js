import React from 'react';

function ToxicPatterns() {
  const patterns = [
    {
      category: "Shop Page Patterns",
      patterns: [
        {
          name: "Forced Premium Membership",
          description: "Automatically adds a premium membership to cart without user consent, both instantly and when another item is added",
          impact: "Users are forced into subscriptions they didn't choose"
        },
        {
          name: "Hidden Fees",
          description: "Mandatory handling fees and shipping costs revealed only at final checkout step",
          impact: "Creates price uncertainty and unexpected costs"
        },
        {
          name: "Fake Urgency",
          description: "Countdown timer that never ends, fake viewer counts, and 'Only X left!' badges",
          impact: "Pressures users into quick, unconsidered purchases"
        },
        {
          name: "Additional offer popup",
          description: "Forced popup with a discount offer after adding an item to the cart, with a fake discount and manipulative decline button",
          impact: "Tricks users into thinking they are getting a deal, while actually being forced to accept a discount they don't want"
        },
        {
          name: "Retention of Premium Membership",
          description: "Makes it difficult to remove the premium membership with a manipulative free shipping offer",
          impact: "Locks users into unwanted subscriptions"
        },
        {
            name: "Hidden Continue Option",
            description: "Nearly invisible button to continue without account",
            impact: "Makes users believe account creation is mandatory, giving up unnecessary information"
        },
        {
            name: "Additional User Information Collection",
            description: "Presents optional user information fields as mandatory through visual design",
            impact: "Tricks users into providing more information than necessary"
        }
      ]
    },
    {
      category: "Blog Page Patterns",
      patterns: [
        {
          name: "Newsletter Signup popup",
          description: "Intrusive popup with hard-to-find close button and manipulative messaging",
          impact: "Coerces users into submitting their email addres"
        },
        {
            name: "Cookie Consent Banner",
            description: "Obtrusive cookie consent banner that is hard to dismiss and uses manipulative patterns to force users to accept all cookies",
            impact: "Users are coerced to accept all cookies, compromising their privacy"
        },
        {
            name: "Intrusive adds",
            description: "Ads that are hard to distinguish from content, with misleading titles and images",
            impact: "Users may click on ads thinking they are content, leading to unwanted redirects"
        },
      ]
    },
  ];

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8">Implemented Dark Patterns</h1>
      <p className="text-gray-600 mb-8">
        This page documents the various dark patterns and hostile design elements implemented 
        across the site for educational purposes. These patterns demonstrate common manipulative 
        practices found in modern web applications.
      </p>
      
      {patterns.map((category, index) => (
        <div key={index} className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">{category.category}</h2>
          <div className="grid gap-6">
            {category.patterns.map((pattern, patternIndex) => (
              <div key={patternIndex} className="border rounded-lg p-6 bg-white shadow-sm">
                <h3 className="text-xl font-semibold mb-2">{pattern.name}</h3>
                <p className="text-gray-600 mb-2">{pattern.description}</p>
                <p className="text-red-600 text-sm">Impact: {pattern.impact}</p>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="mt-8 p-4 bg-yellow-50 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Educational Purpose Notice</h3>
        <p className="text-sm text-gray-700">
          These patterns are implemented for educational purposes to demonstrate how websites 
          can manipulate user behavior. They serve as examples of practices to recognize and avoid 
          in ethical web development.
        </p>
      </div>
    </div>
  );
}

export default ToxicPatterns;