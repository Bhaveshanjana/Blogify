import {
  Rocket,
  Zap,
  Sparkles,
  Shield,
  Globe,
  Code,
  Palette,
} from "lucide-react";

const UpcomingFeaturesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br py-12  px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 mt-20">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            Upcoming Features
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Discover what we're building next for your content platform
          </p>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
              <Zap className="w-4 h-4 mr-2" />
              Exciting updates coming soon!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingFeaturesPage;
