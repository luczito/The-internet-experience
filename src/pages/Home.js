function Home() {
  const sections = [
    {
      title: "Purpose",
      content: "The point of this website is to provide a platform where users can learn about the hostile and toxic patterns that exist on the internet. The website is designed to be a parody of the internet experience, highlighting the absurdity of certain online behaviors and trends."
    },
    {
      title: "Available Pages",
      subsections: [
        {
          name: "Home",
          description: "Provides an overview of the sub pages and the purpose of this website."
        },
        {
          name: "Blog",
          description: "Emulates a blog or newspage, with a focus on the hostile and toxic patterns existing on these types of websites."
        },
        {
          name: "Shop",
          description: "Simulates a common toxic shopping platform, featuring various dark patterns that try to trap you with additional fees and manipulative tactics."
        },
        {
          name: "Toxic Patterns",
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