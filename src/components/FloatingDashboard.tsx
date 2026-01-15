import { BarChart3, TrendingUp, Users, Activity } from 'lucide-react'

export function FloatingDashboard() {
  return (
    <div className="floating-dashboard-container relative mx-auto mt-16 max-w-5xl">
      {/* Main Dashboard Card */}
      <div className="dashboard-mockup relative rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/90 to-slate-800/90 p-6 shadow-2xl backdrop-blur-xl">
        {/* Dashboard Header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-white">Workflow Analytics</h3>
            <p className="text-sm text-slate-400">Real-time performance metrics</p>
          </div>
          <div className="flex gap-2">
            <div className="h-3 w-3 rounded-full bg-green-400/80"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-400/80"></div>
            <div className="h-3 w-3 rounded-full bg-red-400/80"></div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mb-6 grid grid-cols-2 gap-4 md:grid-cols-4">
          {/* Stat Card 1 */}
          <div className="stat-card rounded-lg border border-white/5 bg-white/5 p-4 backdrop-blur-sm">
            <div className="mb-2 flex items-center justify-between">
              <Users className="h-4 w-4 text-blue-400" />
              <TrendingUp className="h-3 w-3 text-green-400" />
            </div>
            <div className="text-2xl font-bold text-white">2.4K</div>
            <div className="text-xs text-slate-400">Active Users</div>
          </div>

          {/* Stat Card 2 */}
          <div className="stat-card rounded-lg border border-white/5 bg-white/5 p-4 backdrop-blur-sm">
            <div className="mb-2 flex items-center justify-between">
              <Activity className="h-4 w-4 text-purple-400" />
              <TrendingUp className="h-3 w-3 text-green-400" />
            </div>
            <div className="text-2xl font-bold text-white">94%</div>
            <div className="text-xs text-slate-400">Success Rate</div>
          </div>

          {/* Stat Card 3 */}
          <div className="stat-card rounded-lg border border-white/5 bg-white/5 p-4 backdrop-blur-sm">
            <div className="mb-2 flex items-center justify-between">
              <BarChart3 className="h-4 w-4 text-cyan-400" />
              <TrendingUp className="h-3 w-3 text-green-400" />
            </div>
            <div className="text-2xl font-bold text-white">156</div>
            <div className="text-xs text-slate-400">Tasks/Day</div>
          </div>

          {/* Stat Card 4 */}
          <div className="stat-card rounded-lg border border-white/5 bg-white/5 p-4 backdrop-blur-sm">
            <div className="mb-2 flex items-center justify-between">
              <Activity className="h-4 w-4 text-pink-400" />
              <TrendingUp className="h-3 w-3 text-green-400" />
            </div>
            <div className="text-2xl font-bold text-white">12.5s</div>
            <div className="text-xs text-slate-400">Avg Response</div>
          </div>
        </div>

        {/* Chart Area */}
        <div className="chart-container relative overflow-hidden rounded-lg border border-white/5 bg-white/5 p-4 backdrop-blur-sm">
          <div className="mb-3 text-sm font-medium text-white">Workflow Performance</div>

          {/* Simulated Bar Chart */}
          <div className="flex h-32 items-end justify-between gap-2">
            {[65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88, 92].map((height, index) => (
              <div key={index} className="chart-bar flex-1">
                <div
                  className="w-full rounded-t bg-gradient-to-t from-blue-600 to-blue-400"
                  style={{
                    height: `${height}%`,
                    animationDelay: `${index * 0.1}s`,
                  }}
                ></div>
              </div>
            ))}
          </div>

          {/* Chart Labels */}
          <div className="mt-2 flex justify-between text-xs text-slate-500">
            <span>Jan</span>
            <span>Dec</span>
          </div>
        </div>

        {/* Glow Effect */}
        <div className="glow-effect absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-cyan-500/20 blur-3xl"></div>
      </div>

      {/* Floating Card 1 - Top Right */}
      <div className="floating-card-1 absolute -right-4 -top-8 w-48 rounded-lg border border-white/10 bg-gradient-to-br from-emerald-900/80 to-emerald-800/80 p-4 shadow-xl backdrop-blur-xl md:w-56">
        <div className="mb-2 flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/20">
            <TrendingUp className="h-4 w-4 text-emerald-400" />
          </div>
          <span className="text-sm font-medium text-white">Productivity</span>
        </div>
        <div className="text-3xl font-bold text-white">+32%</div>
        <div className="text-xs text-slate-400">vs last month</div>
      </div>

      {/* Floating Card 2 - Bottom Left */}
      <div className="floating-card-2 absolute -bottom-6 -left-4 w-44 rounded-lg border border-white/10 bg-gradient-to-br from-purple-900/80 to-purple-800/80 p-4 shadow-xl backdrop-blur-xl md:w-52">
        <div className="mb-2 flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-500/20">
            <Activity className="h-4 w-4 text-purple-400" />
          </div>
          <span className="text-sm font-medium text-white">Automation</span>
        </div>
        <div className="text-3xl font-bold text-white">89%</div>
        <div className="text-xs text-slate-400">tasks automated</div>
      </div>
    </div>
  )
}
