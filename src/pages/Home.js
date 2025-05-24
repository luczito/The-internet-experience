function Home() {
  const sections = [
    {
      title: "Purpose",
      content: `The purpose of this website is to provide a platform where users can learn about the hostile and dark patterns that exist on the internet. 
      These tactics, such as hidden opt-outs, misleading language, and false urgency, are deliberately used to benefit the owners of the site at the expense of the user.
      The website is designed to mimic news / article pages and webshops, highlighting and exaggerating the toxic or manipulative behaviors of these sites, with clear explanations of each dark pattern implemented`
    },
    {
      title: "Available Pages",
      subsections: [
        {
          name: "Home",
          description: "This page which provides an overview of the sub pages and the overall purpose of this website."
        },
        {
          name: "Blog",
          description: "Emulates a blog, article or news page, with a focus on the hostile and dark patterns existing on these types of websites."
        },
        {
          name: "Shop",
          description: "Simulates a common online shopping platform, featuring various dark patterns that try to trap you with additional fees and manipulative tactics."
        },
        {
          name: "Dark Patterns",
          description: "A page that documents the various dark patterns and hostile design elements implemented across the site for educational purposes."}
      ]
    }
  ];

  return (
    <main className="container mx-auto py-10 px-4 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-center">Welcome to The Internet Experience</h1>
      
      {sections.map((section, index) => (
        <div key={index} className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">{section.title}</h2>
          
          {section.content && (
            <p className="text-gray-700 leading-relaxed mb-6">
              {section.content}
            </p>
          )}
          
          {section.subsections && (
            <div className="grid gap-6 md:grid-cols-2">
              {section.subsections.map((subsection, subIndex) => (
                <div 
                  key={subIndex} 
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    {subsection.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {subsection.description}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </main>
  );
}

export default Home;