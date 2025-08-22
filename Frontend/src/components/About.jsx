import React from "react";
import Footer from "../components/Footer"; // ✅ Adjust path if needed

const About = () => {
  return (
    <>
      <div className="bg-gradient-to-br from-blue-50 to-white dark:from-slate-900 dark:to-slate-800 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white dark:bg-slate-900 shadow-lg rounded-xl p-8 border border-gray-100 dark:border-slate-700">
            <h1 className="text-5xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              About Us
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Welcome to <span className="font-semibold text-blue-600 dark:text-blue-400">bookStore</span> – your trusted
              destination for <span className="font-medium">learning and personal growth</span>. We are committed to making
              high-quality educational content accessible to everyone.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Whether you're a student, professional, or lifelong learner, our platform offers the tools and support you
              need to thrive. We believe education should be engaging, affordable, and always within reach.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Join us today and start exploring our carefully curated collection of courses and resources to power your
              success.
            </p>
          </div>
        </div>
      </div>

      {/* ✅ Footer Component */}
      <Footer />
    </>
  );
};

export default About;
