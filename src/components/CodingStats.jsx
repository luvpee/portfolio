import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Code, Calendar, Star, CheckCircle, Zap, RefreshCw } from 'lucide-react';
import { useTheme } from '../context/ThemeContext.jsx';

// LeetCode Stats API
async function fetchLeetCodeStats(username) {
  try {
    const response = await fetch(`https://leetcode-stats-api.herokuapp.com/${username}`);
    if (!response.ok) throw new Error('Failed to fetch');
    const data = await response.json();

    if (data.status === 'error') throw new Error(data.message);

    return {
      username: username,
      totalSolved: data.totalSolved || 0,
      easySolved: data.easySolved || 0,
      mediumSolved: data.mediumSolved || 0,
      hardSolved: data.hardSolved || 0,
      ranking: data.ranking || 0,
      contributionPoints: data.contributionPoints || 0,
      acceptanceRate: data.acceptanceRate || 0,
    };
  } catch (error) {
    console.error('LeetCode fetch error:', error);
    return null;
  }
}

// Codeforces API
async function fetchCodeforcesStats(username) {
  try {
    const response = await fetch(`https://codeforces.com/api/user.info?handles=${username}`);
    const data = await response.json();
    if (data.status === 'OK' && data.result.length > 0) {
      const user = data.result[0];
      return {
        username: user.handle,
        rating: user.rating || 0,
        maxRating: user.maxRating || 0,
        rank: user.rank || 'unrated',
        maxRank: user.maxRank || 'unrated',
      };
    }
    return null;
  } catch (error) {
    console.error('Codeforces fetch error:', error);
    return null;
  }
}

async function fetchCodeforcesProblemsolved(username) {
  try {
    const response = await fetch(`https://codeforces.com/api/user.status?handle=${username}`);
    const data = await response.json();
    if (data.status === 'OK') {
      const solvedProblems = new Set();
      data.result.forEach((submission) => {
        if (submission.verdict === 'OK') {
          solvedProblems.add(`${submission.problem.contestId}-${submission.problem.index}`);
        }
      });
      return solvedProblems.size;
    }
    return 0;
  } catch (error) {
    console.error('Codeforces problems solved error:', error);
    return 0;
  }
}

async function fetchCodeforcesHeatmap(username) {
  try {
    const response = await fetch(`https://codeforces.com/api/user.status?handle=${username}`);
    const data = await response.json();
    if (data.status === 'OK') {
      const calendar = {};
      data.result.forEach((submission) => {
        if (submission.creationTimeSeconds) {
          const date = new Date(submission.creationTimeSeconds * 1000);
          const dateStr = date.toISOString().split('T')[0];
          calendar[dateStr] = (calendar[dateStr] || 0) + 1;
        }
      });
      return calendar;
    }
    return {};
  } catch (error) {
    console.error('Codeforces heatmap error:', error);
    return {};
  }
}

// Heatmap Component
function Heatmap({ data, isDark }) {
  const today = new Date();
  const weeks = 26; // Show 26 weeks

  const getDaysInYear = () => {
    const days = [];
    for (let i = weeks * 7 - 1; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      const dateStr = date.toISOString().split('T')[0];
      days.push({
        date: dateStr,
        count: data[dateStr] || 0,
        dayIndex: date.getDay(),
      });
    }
    return days;
  };

  const daysData = getDaysInYear();
  const maxCount = Math.max(...daysData.map((d) => d.count), 1);

  const getColor = (count) => {
    if (count === 0) return isDark ? '#1e293b' : '#e2e8f0';
    const intensity = Math.min(count / Math.max(maxCount, 5), 1);
    if (intensity < 0.25) return isDark ? '#4c1d95' : '#c7d2fe';
    if (intensity < 0.5) return isDark ? '#6d28d9' : '#a5b4fc';
    if (intensity < 0.75) return isDark ? '#8b5cf6' : '#818cf8';
    return isDark ? '#a78bfa' : '#6366f1';
  };

  // Group by weeks
  const weekGroups = [];
  for (let w = 0; w < weeks; w++) {
    const weekDays = daysData.filter((d) => {
      const dayIndex = daysData.indexOf(d);
      return Math.floor(dayIndex / 7) === w;
    });
    weekGroups.push(weekDays);
  }

  return (
    <div className="overflow-x-auto">
      <div className="flex gap-[3px]">
        {weekGroups.map((week, weekIndex) => (
          <div key={weekIndex} className="flex flex-col gap-[3px]">
            {week.map((day) => (
              <div
                key={day.date}
                className="w-3 h-3 rounded-[2px] cursor-pointer transition-transform hover:scale-125"
                style={{ backgroundColor: getColor(day.count) }}
                title={`${day.date}: ${day.count} submissions`}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="flex justify-end items-center gap-2 mt-3 text-xs text-slate-500 dark:text-slate-400">
        <span>Less</span>
        <div className="flex gap-0.5">
          {[0, 0.25, 0.5, 0.75, 1].map((intensity) => (
            <div
              key={intensity}
              className="w-3 h-3 rounded-[2px]"
              style={{ backgroundColor: getColor(intensity * Math.max(maxCount, 5)) }}
            />
          ))}
        </div>
        <span>More</span>
      </div>
    </div>
  );
}

// Stat Card Component
function StatCard({ icon: Icon, label, value, color }) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
      <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${color}`}>
        <Icon className="w-4 h-4 text-white" />
      </div>
      <div>
        <div className="text-lg font-bold text-slate-900 dark:text-white">{value}</div>
        <div className="text-xs text-slate-500 dark:text-slate-400">{label}</div>
      </div>
    </div>
  );
}

export default function CodingStats({ leetcodeUsername, codeforcesUsername }) {
  const { isDark } = useTheme();
  const [leetcodeStats, setLeetcodeStats] = useState(null);
  const [codeforcesStats, setCodeforcesStats] = useState(null);
  const [codeforcesProblems, setCodeforcesProblems] = useState(0);
  const [codeforcesHeatmap, setCodeforcesHeatmap] = useState({});
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchAllStats = async () => {
    setRefreshing(true);
    setLoading(true);

    try {
      const promises = [];

      if (leetcodeUsername) {
        promises.push(
          fetchLeetCodeStats(leetcodeUsername).then((data) => {
            setLeetcodeStats(data);
          })
        );
      }

      if (codeforcesUsername) {
        promises.push(
          fetchCodeforcesStats(codeforcesUsername).then(async (data) => {
            if (data) {
              const solved = await fetchCodeforcesProblemsolved(codeforcesUsername);
              const heatmap = await fetchCodeforcesHeatmap(codeforcesUsername);
              setCodeforcesStats({ ...data, problemsSolved: solved });
              setCodeforcesProblems(solved);
              setCodeforcesHeatmap(heatmap);
            }
          })
        );
      }

      await Promise.allSettled(promises);
    } catch (err) {
      console.error('Fetch error:', err);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchAllStats();
  }, [leetcodeUsername, codeforcesUsername]);

  const handleRefresh = () => {
    fetchAllStats();
  };

  return (
    <section id="coding" className="py-24 px-6 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-4">
            <span className="text-indigo-500 font-semibold text-sm uppercase tracking-wider">
              Problem Solving
            </span>
            <button
              onClick={handleRefresh}
              disabled={refreshing}
              className="p-2 rounded-lg bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 transition-colors disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 text-slate-600 dark:text-slate-300 ${refreshing ? 'animate-spin' : ''}`} />
            </button>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mt-2">
            Coding Profiles
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-4 max-w-2xl mx-auto">
            Track my competitive programming journey
          </p>
        </motion.div>

        {loading ? (
          <div className="flex items-center justify-center h-64">
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin" />
              <p className="text-slate-500 dark:text-slate-400">Loading coding stats...</p>
            </div>
          </div>
        ) : (
          <>
            {/* Stats Cards */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* LeetCode Card */}
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center">
                      <span className="text-2xl">💻</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">LeetCode</h3>
                      <a
                        href={`https://leetcode.com/${leetcodeUsername}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-indigo-500 hover:underline"
                      >
                        @{leetcodeUsername}
                      </a>
                    </div>
                  </div>
                </div>

                {leetcodeStats ? (
                  <div className="grid grid-cols-2 gap-3">
                    <StatCard
                      icon={CheckCircle}
                      label="Total Solved"
                      value={leetcodeStats.totalSolved}
                      color="bg-indigo-500"
                    />
                    <StatCard
                      icon={Trophy}
                      label="Global Ranking"
                      value={`#${leetcodeStats.ranking}`}
                      color="bg-purple-500"
                    />
                    <StatCard
                      icon={Zap}
                      label="Easy"
                      value={leetcodeStats.easySolved}
                      color="bg-green-500"
                    />
                    <StatCard
                      icon={Code}
                      label="Medium"
                      value={leetcodeStats.mediumSolved}
                      color="bg-yellow-500"
                    />
                    <StatCard
                      icon={Star}
                      label="Hard"
                      value={leetcodeStats.hardSolved}
                      color="bg-red-500"
                    />
                    <StatCard
                      icon={CheckCircle}
                      label="Accept Rate"
                      value={`${leetcodeStats.acceptanceRate}%`}
                      color="bg-blue-500"
                    />
                  </div>
                ) : (
                  <div className="text-center py-8 text-slate-500 dark:text-slate-400">
                    <p>Unable to load LeetCode stats</p>
                  </div>
                )}
              </div>

              {/* Codeforces Card */}
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                      <span className="text-2xl">🏆</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">Codeforces</h3>
                      <a
                        href={`https://codeforces.com/profile/${codeforcesUsername}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-indigo-500 hover:underline"
                      >
                        @{codeforcesUsername}
                      </a>
                    </div>
                  </div>
                </div>

                {codeforcesStats ? (
                  <div className="grid grid-cols-2 gap-3">
                    <StatCard
                      icon={Trophy}
                      label="Current Rating"
                      value={codeforcesStats.rating}
                      color="bg-blue-500"
                    />
                    <StatCard
                      icon={Star}
                      label="Max Rating"
                      value={codeforcesStats.maxRating}
                      color="bg-purple-500"
                    />
                    <StatCard
                      icon={CheckCircle}
                      label="Problems Solved"
                      value={codeforcesProblems}
                      color="bg-green-500"
                    />
                    <StatCard
                      icon={Code}
                      label="Rank"
                      value={codeforcesStats.rank}
                      color="bg-orange-500"
                    />
                  </div>
                ) : (
                  <div className="text-center py-8 text-slate-500 dark:text-slate-400">
                    <p>Unable to load Codeforces stats</p>
                  </div>
                )}
              </div>
            </div>

            {/* Heatmap */}
            {codeforcesUsername && Object.keys(codeforcesHeatmap).length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10"
              >
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
                  Codeforces Activity Heatmap (Last 6 Months)
                </h3>
                <Heatmap data={codeforcesHeatmap} isDark={isDark} />
              </motion.div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
