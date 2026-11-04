import React from "react";

const Footer = () => {
  return (
    <footer className="h-24 w-full border-t border-gray-200 bg-white">
      <div className="container mx-auto flex h-full items-center justify-between px-4">
        <p className="text-sm font-medium text-gray-600">
          <span className="font-bold text-green-700">বাজার দর</span> —
          প্রয়োজনীয় পণ্যের দাম এক নজরে।
        </p>

        <p className="max-w-md text-right text-xs leading-5 text-gray-400">
          সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।
        </p>
      </div>
    </footer>
  );
};

export default Footer;
