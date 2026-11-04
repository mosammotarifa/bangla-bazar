import React from "react";

const Loading = () => {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-gray-50">
      {/* Spinner */}
      <div className="relative flex items-center justify-center">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-green-100 border-t-green-700"></div>

        <span className="absolute text-xl">🛒</span>
      </div>

      <h2 className="mt-6 text-xl font-bold text-gray-800">
        বাজার দর
      </h2>

      <p className="mt-2 animate-pulse text-sm text-gray-500">
        তথ্য লোড হচ্ছে, অনুগ্রহ করে অপেক্ষা করুন...
      </p>
    </div>
  );
};

export default Loading;