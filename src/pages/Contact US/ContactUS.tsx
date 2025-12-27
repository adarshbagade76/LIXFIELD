import React from "react";
import openComposeEmail from "../../components/HeroContactButton/HeroContactButton";

const ChatCard = () => {
  return (
    <div className="min-h-screen flex items-center justify-center 
      bg-gradient-to-br from-rose-100 via-pink-100 to-emerald-100 px-4">
      
      {/* Card */}
      <div className="w-full max-w-md bg-white/70 backdrop-blur-lg 
        rounded-3xl shadow-lg p-6 sm:p-7 border border-white/40">
        
        {/* Header */}
        <h2 className="text-lg font-semibold text-gray-700">
          Let’s chat.
        </h2>
        <div className="h-1 w-10 bg-pink-200 rounded-full mt-1 mb-6"></div>

        {/* Form */}
        <form className="space-y-4">
          
          <input
            type="text"
            placeholder="Your name"
            className="w-full rounded-xl border border-pink-100 
              bg-pink-50 px-4 py-2.5 text-sm text-gray-700 
              placeholder-gray-400 focus:outline-none 
              focus:ring-2 focus:ring-pink-200"
          />

          <input
            type="email"
            placeholder="Email address"
            className="w-full rounded-xl border border-pink-100 
              bg-pink-50 px-4 py-2.5 text-sm text-gray-700 
              placeholder-gray-400 focus:outline-none 
              focus:ring-2 focus:ring-pink-200"
          />

          <textarea
            rows={3}
            placeholder="Your message"
            className="w-full rounded-xl border border-pink-100 
              bg-pink-50 px-4 py-2.5 text-sm text-gray-700 
              placeholder-gray-400 resize-none focus:outline-none 
              focus:ring-2 focus:ring-pink-200"
          />

          {/* Button */}
          <button
            type="submit"
            className="bg-pink-200 text-gray-700 text-sm 
              px-5 py-2.5 rounded-xl hover:bg-pink-300 
              transition font-medium"
               onClick={() => openComposeEmail('trade@globalexportslixfield.com')}
          >
            Send Email
          </button>

        </form>
      </div>
    </div>
  );
};

export default ChatCard;
