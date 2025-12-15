import React from 'react';
import { Clock, User, Mail, Building } from 'lucide-react';

export default function DashboardHome() {
  // Mock recent users data (in real app, this comes from Redux store)
  const recentUsers = [
    { 
      id: 1, 
      name: 'John Doe', 
      email: 'john@example.com', 
      phone: '123-456-7890',
      company: 'Tech Corp',
      addedAt: '2 minutes ago'
    },
    { 
      id: 2, 
      name: 'Jane Smith', 
      email: 'jane@example.com', 
      phone: '098-765-4321',
      company: 'Design Studio',
      addedAt: '15 minutes ago'
    },
    { 
      id: 3, 
      name: 'Bob Johnson', 
      email: 'bob@example.com', 
      phone: '555-123-4567',
      company: 'Marketing Inc',
      addedAt: '1 hour ago'
    },
    { 
      id: 4, 
      name: 'Alice Brown', 
      email: 'alice@example.com', 
      phone: '444-555-6666',
      company: 'Startup Hub',
      addedAt: '2 hours ago'
    },
    { 
      id: 5, 
      name: 'Charlie Wilson', 
      email: 'charlie@example.com', 
      phone: '777-888-9999',
      company: 'Finance Co',
      addedAt: '3 hours ago'
    }
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 overflow-hidden via-blue-50 to-purple-50 p-6 md:p-8">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Welcome Section */}
        <div className="mb-10">
          <h1 className="text-5xl md:text-6xl font-bold bg-linear-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
            Welcome Back!  
          </h1>
          <p className="text-gray-600 text-xl">
            Here's what's happening with your data today
          </p>
        </div>

        {/* Recent Data Table */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <Clock className="w-6 h-6 text-purple-600" />
              Recently Added Users
            </h2>
            <p className="text-gray-600 text-sm mt-1">Latest entries in your database</p>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50/80">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    ID
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Phone
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Company
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Added
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {recentUsers.map((user, index) => (
                  <tr 
                    key={user.id} 
                    className="hover:bg-purple-50/50 transition-colors duration-200"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm font-medium text-gray-900">
                        #{user.id}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-linear-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-semibold">
                          {user.name.charAt(0)}
                        </div>
                        <span className="text-sm font-medium text-gray-900">
                          {user.name}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Mail className="w-4 h-4 text-gray-400" />
                        {user.email}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {user.phone}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Building className="w-4 h-4 text-gray-400" />
                        {user.company}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                        {user.addedAt}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Footer */}
          <div className="px-6 py-4 bg-gray-50/50 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              Showing <span className="font-semibold text-gray-900">{recentUsers.length}</span> recent entries
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}