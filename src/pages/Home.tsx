import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 border-b border-gray-700">
        <h1 className="text-xl font-bold text-purple-400">InsightAI</h1>
        <div className="space-x-6">
          <a href="#" className="text-purple-300 hover:text-purple-400">Home</a>
          <a href="#" className="text-purple-300 hover:text-purple-400">New Analysis</a>
          <a href="#" className="text-purple-300 hover:text-purple-400">Past Analysis</a>
        </div>
        <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg">Log Out</button>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 py-16">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-bold text-purple-400">InsightAI</h2>
          <p className="italic text-purple-300 mt-2">
            Empowering Education Through Intelligent Insights.
          </p>
          <p className="mt-4 text-gray-300">
            Welcome to InsightAI, the ultimate platform for monitoring and enhancing student performance. Powered by cutting-edge artificial intelligence, InsightAI offers educators real-time insights into classroom dynamics, enabling smarter decision-making and personalized learning experiences.
          </p>
        </div>
        <div className="mt-8 md:mt-0 md:w-1/3">
          <img src="/insightai-illustration.png" alt="AI Illustration" className="w-full" />
        </div>
      </section>
    </div>
        );
      

};

export default Home; 