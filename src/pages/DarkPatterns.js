import React from 'react';

function DarkPatterns() {
  const patterns = [
    {
      category: "Shop Page Patterns",
      patterns: [
        {
          name: "Forced Premium Membership",
          description: "Automatically adds a premium membership to cart without user consent, both instantly and when another item is added",
          impact: "Users are forced into subscriptions they didn't choose themselves, forcing them to spend additional money"
        },
        {
          name: "Retention of Premium Membership",
          description: "Makes it difficult to remove the premium membership with a manipulative free shipping offer",
          impact: "Tries to trick users to be locked to 3 months of monthly payments"
        },
        {
          name: "Hidden Fees",
          description: "Mandatory handling fees and shipping costs revealed only at final checkout step",
          impact: "Makes the user think the price is less than the actual price until the very last step of checkout"
        },
        {
          name: "Fake Urgency",
          description: "Countdown timer that never ends, fake viewer counts, and 'Only X left!' badges",
          impact: "Gives the user a feeling that they have to act now or they will loose out on a great deal, which is not the case"
        },
        {
          name: "Fake Discounts",
          description: "Fake discounts on all products",
          impact: "Tricks the user into thinking they are getting a good deal when this is not the case"
        },
        {
          name: "Additional offer popup",
          description: "Forced popup with a discount offer after adding an item to the cart, with a fake discount and manipulative decline button",
          impact: "Tricks users into thinking they are getting a deal, while actually being forced to accept a discount they don't want"
        },
        {
            name: "Hidden Continue Option",
            description: "Hard to see button to continue without account",
            impact: "Makes users believe account creation is mandatory, making them give up additional personal information that is not strictly needed"
        },
        {
            name: "Additional User Information Collection",
            description: "Presents optional user information fields as though they are mandatory through visual design",
            impact: "Tricks users into providing more information than necessary"
        },
        {
            name: "Intrusive Newsletter Popup",
            description: "A newsletter popup with the promise of free shipping on the first order",
            impact: "Tricks users into giving up their email address which in turn will be shared with partners for marketing"
        }
      ]
    },
    {
      category: "Blog Page Patterns",
      patterns: [
        {
          name: "Intrusive Newsletter Popup",
          description: "Intrusive popup with hard-to-find close button and manipulative messaging",
          impact: "Coerces users into submitting their email addres"
        },
        {
            name: "Cookie Consent Banner",
            description: "Obtrusive cookie consent banner that is hard to dismiss and uses manipulative patterns to force users to accept all cookies",
            impact: "Users are coerced to accept all cookies, compromising their privacy"
        },
        {
            name: "Intrusive Adds",
            description: "Ads that are somewhat relevant to the content",
            impact: "Users may click on ads thinking they are content, leading to unwanted redirects"
        },
        {
            name: "AI Generated Article",
            description: "The entire article is AI generated, only explained with small text at the bottom of the page",
            impact: "Users may not get the same level of quality when the article is AI written compared to human written, this fact is hidden away from the user."
        },
        {
            name: "Autoplaying Video Requires Cookies",
            description: "Video that autoplays with sound only if necessary and Analytics cookies are enabled",
            impact: "Forces users into accepting analytics cookies if they want to see the video, which might not even be relevant for the article"
        },
      ]
    },
  ];

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8">Dark Patterns</h1>
      <p className="text-gray-600 mb-8">
        This page documents the various dark patterns and hostile design elements implemented 
        across the site for educational purposes. These patterns demonstrate common manipulative 
        practices found in modern web pages such as news / article pages and webshops.
      </p>
      
      {patterns.map((category, index) => (
        <div key={index} className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">{category.category}</h2>
          <div className="grid gap-6">
            {category.patterns.map((pattern, patternIndex) => (
              <div key={patternIndex} className="border rounded-lg p-6 bg-white shadow-sm">
                <h3 className="text-xl font-semibold mb-2">{pattern.name}</h3>
                <p className="text-gray-600 mb-2">{pattern.description}</p>
                <p className="text-red-600 mb-2">Impact: {pattern.impact}</p>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="mt-8 p-4 bg-yellow-50 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Educational Purpose Notice</h3>
        <p className="mb-2 text-gray-700">
          These patterns are implemented and exaggerated for educational purposes to demonstrate how websites 
          can manipulate user behavior. For developers they show what to be aware of when designing websites, 
          for users they highlight what to be aware of when navigating the internet.
        </p>
      </div>
    </div>
  );
}

export default DarkPatterns;