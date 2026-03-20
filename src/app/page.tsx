export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 flex flex-col items-center justify-center p-8 font-sans selection:bg-blue-500/30">
      
      {/* Hero Section */}
      <div className="max-w-3xl text-center space-y-8 mt-12">
        <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-gray-800 bg-gray-900/50 text-sm font-medium text-gray-300 mb-4">
          ✨ Lab 1 Successfully Deployed
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
          Welcome to <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            My Web Workspace
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
          I successfully conquered SSH keys, automated GitHub Actions, and Next.js static exports to get this page live on the internet.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          <a
            href="#"
            className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]"
          >
            Explore My Work
          </a>
          <a
            href="https://github.com/ArtemPylhun/lab-1-setup"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full bg-gray-900 hover:bg-gray-800 text-white font-semibold transition-all border border-gray-800 hover:border-gray-700"
          >
            View GitHub
          </a>
        </div>
      </div>

      {/* Feature Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24 max-w-5xl w-full pb-12">
        {[
          { title: "Next.js 15", desc: "Built with the modern App Router and standard React." },
          { title: "Tailwind CSS", desc: "Styled entirely with utility classes for a sleek, responsive design." },
          { title: "GitHub Actions", desc: "Configured with a modern CI/CD pipeline for automated deployments." },
        ].map((item, i) => (
          <div 
            key={i} 
            className="p-6 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-blue-500/50 transition-colors group"
          >
            <h3 className="text-xl font-bold text-gray-200 mb-2 group-hover:text-blue-400 transition-colors">
              {item.title}
            </h3>
            <p className="text-gray-500 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
      
    </main>
  );
}