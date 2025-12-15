import Link from "next/link";
import { LayoutDashboard, FileText } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-full flex items-center justify-center p-6">
      <div className="max-w-3xl w-full bg-white rounded-xl shadow-md p-8">
        
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <LayoutDashboard className="w-8 h-8 text-indigo-600" />
          <h1 className="text-2xl font-bold text-gray-800">
            Dashboard Home
          </h1>
        </div>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed">
          Welcome to the <span className="font-medium">Posts Management Dashboard</span>.
          This application demonstrates fetching data from a public API and
          managing it using <span className="font-medium">Redux Toolkit</span>.
        </p>

        <p className="mt-3 text-gray-600 leading-relaxed">
          You can perform full CRUD operations (Create, Read, Update, Delete)
          on posts, with centralized state management and a clean dashboard view.
        </p>

        {/* Features */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-gray-700">Key Features</h3>
            <ul className="mt-2 text-sm text-gray-600 space-y-1">
              <li>• Fetch posts from public API</li>
              <li>• Redux Toolkit state management</li>
              <li>• Create, update & delete posts</li>
              <li>• Loading & error handling</li>
            </ul>
          </div>

          <div className="border rounded-lg p-4 flex flex-col justify-between">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-indigo-600" />
              <h3 className="font-semibold text-gray-700">
                Posts Dashboard
              </h3>
            </div>

            <p className="text-sm text-gray-600 mt-2">
              View all posts in a table and perform CRUD operations.
            </p>

            <Link
              href="/post"
              className="mt-4 inline-flex items-center justify-center bg-indigo-600 text-white hover:bg-indigo-700 px-4 py-2 rounded-md transition"
            >
              Go To Posts Dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
