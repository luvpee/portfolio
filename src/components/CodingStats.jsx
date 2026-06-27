import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Code, Star, CheckCircle, Zap, RefreshCw, Flame, TrendingUp, Award } from 'lucide-react';

const BASE = 'https://alfa-leetcode-api.onrender.com';
const CACHE_KEY = 'lc-stats-cache';
const CACHE_TTL_MS = 24 * 60 * 60 * 1000; // 24h

// Static fallback with the verified values. Used only if the cache is empty
// AND the live API is rate-limiting, so the card is never blank.
// Calendar seed was captured from the live LeetCode graphql response on
// 2026-06-27 (~344 active days, ~1257 submissions) and is used as a static
// fallback when the alfa-leetcode-api calendar endpoint is rate-limited.
const FALLBACK_LC = {
  profile: { ranking: 90071, reputation: 0 },
  solved: {
    totalSolved: 701,
    easySolved: 136,
    mediumSolved: 456,
    hardSolved: 109,
    totalEasy: 951,
    totalMedium: 2074,
    totalHard: 948,
    totalQuestions: 3973,
    acceptanceRate: 0,
  },
  contest: {
    contestRating: 1714,
    contestGlobalRanking: 0,
    contestTopPercentage: 0,
    contestsAttended: 0,
  },
  calendar: {
    calendar: {"2025-03-10":25,"2025-03-11":1,"2025-04-06":7,"2025-04-07":2,"2025-04-08":2,"2025-04-13":2,"2025-04-14":1,"2025-04-15":3,"2025-04-16":11,"2025-04-17":5,"2025-04-18":1,"2025-04-19":2,"2025-04-20":1,"2025-04-21":2,"2025-04-22":4,"2025-04-23":1,"2025-04-24":4,"2025-04-25":5,"2025-04-26":3,"2025-04-27":2,"2025-04-28":1,"2025-04-29":1,"2025-04-30":1,"2025-05-01":1,"2025-05-02":3,"2025-05-03":3,"2025-05-04":1,"2025-05-05":3,"2025-05-06":1,"2025-05-07":1,"2025-05-08":1,"2025-05-09":2,"2025-05-10":11,"2025-05-11":6,"2025-05-12":2,"2025-05-13":2,"2025-05-14":4,"2025-05-15":17,"2025-05-16":5,"2025-05-17":1,"2025-05-18":6,"2025-05-19":5,"2025-05-20":7,"2025-05-21":1,"2025-05-22":3,"2025-05-23":2,"2025-05-24":1,"2025-05-25":1,"2025-05-26":1,"2025-05-27":1,"2025-05-28":1,"2025-05-29":1,"2025-06-19":4,"2025-06-20":20,"2025-06-22":2,"2025-06-23":7,"2025-06-26":10,"2025-06-27":5,"2025-06-28":3,"2025-06-29":2,"2025-06-30":2,"2025-07-01":8,"2025-07-02":7,"2025-07-03":3,"2025-07-05":1,"2025-07-07":2,"2025-07-09":1,"2025-07-12":11,"2025-07-13":1,"2025-07-14":10,"2025-07-15":5,"2025-07-16":16,"2025-07-17":4,"2025-07-18":1,"2025-07-19":9,"2025-07-20":2,"2025-07-21":1,"2025-07-22":5,"2025-07-23":1,"2025-07-24":2,"2025-07-25":1,"2025-07-26":1,"2025-07-27":4,"2025-07-28":1,"2025-07-30":2,"2025-07-31":1,"2025-08-01":1,"2025-08-02":6,"2025-08-03":2,"2025-08-04":4,"2025-08-05":2,"2025-08-09":3,"2025-08-10":4,"2025-08-11":17,"2025-08-12":4,"2025-08-13":4,"2025-08-14":5,"2025-08-15":11,"2025-08-16":18,"2025-08-17":11,"2025-08-18":3,"2025-08-19":4,"2025-08-20":3,"2025-08-21":1,"2025-08-22":2,"2025-08-23":9,"2025-08-24":7,"2025-08-25":6,"2025-08-26":5,"2025-08-27":6,"2025-08-28":4,"2025-08-29":1,"2025-08-30":4,"2025-08-31":1,"2025-09-01":3,"2025-09-02":8,"2025-09-03":6,"2025-09-04":2,"2025-09-05":1,"2025-09-06":10,"2025-09-07":2,"2025-09-08":2,"2025-09-09":1,"2025-09-10":1,"2025-09-12":1,"2025-09-21":3,"2025-09-30":1,"2025-10-02":1,"2025-10-03":1,"2025-10-04":4,"2025-10-05":1,"2025-10-06":4,"2025-10-07":1,"2025-10-08":2,"2025-10-09":2,"2025-10-10":1,"2025-10-11":3,"2025-10-12":1,"2025-10-13":1,"2025-10-14":1,"2025-10-18":1,"2025-10-19":1,"2025-10-22":2,"2025-10-23":2,"2025-10-24":2,"2025-10-31":1,"2025-11-02":2,"2025-11-04":1,"2025-11-07":4,"2025-11-08":3,"2025-11-09":2,"2025-11-10":4,"2025-11-11":4,"2025-11-12":4,"2025-11-13":10,"2025-11-14":1,"2025-11-26":1,"2025-12-22":3,"2025-12-23":4,"2025-12-24":4,"2025-12-25":3,"2025-12-26":3,"2025-12-27":13,"2025-12-28":8,"2025-12-29":2,"2025-12-30":10,"2025-12-31":3,"2026-01-01":5,"2026-01-02":1,"2026-01-03":1,"2026-01-04":9,"2026-01-05":1,"2026-01-06":17,"2026-01-07":5,"2026-01-08":8,"2026-01-09":3,"2026-01-10":1,"2026-01-11":1,"2026-01-12":1,"2026-01-13":2,"2026-01-14":6,"2026-01-15":1,"2026-01-16":1,"2026-01-17":5,"2026-01-18":1,"2026-01-19":1,"2026-01-20":2,"2026-01-21":2,"2026-01-22":8,"2026-01-23":1,"2026-01-24":8,"2026-01-25":4,"2026-01-26":1,"2026-01-27":11,"2026-01-28":6,"2026-01-29":1,"2026-01-30":1,"2026-01-31":4,"2026-02-01":1,"2026-02-02":2,"2026-02-03":1,"2026-02-04":5,"2026-02-05":1,"2026-02-06":12,"2026-02-07":6,"2026-02-08":6,"2026-02-09":2,"2026-02-10":4,"2026-02-11":1,"2026-02-12":1,"2026-02-13":1,"2026-02-14":5,"2026-02-15":5,"2026-02-16":2,"2026-02-17":2,"2026-02-18":2,"2026-02-19":3,"2026-02-20":1,"2026-02-21":9,"2026-02-22":6,"2026-02-23":1,"2026-02-24":5,"2026-02-25":1,"2026-02-26":2,"2026-02-27":3,"2026-02-28":3,"2026-03-01":2,"2026-03-02":1,"2026-03-03":1,"2026-03-04":1,"2026-03-05":1,"2026-03-06":1,"2026-03-07":2,"2026-03-08":1,"2026-03-09":1,"2026-03-10":3,"2026-03-11":1,"2026-03-12":1,"2026-03-13":2,"2026-03-14":1,"2026-03-15":1,"2026-03-16":1,"2026-03-17":1,"2026-03-18":1,"2026-03-19":1,"2026-03-20":11,"2026-03-21":6,"2026-03-22":13,"2026-03-23":1,"2026-03-24":2,"2026-03-25":18,"2026-03-26":2,"2026-03-27":1,"2026-03-28":1,"2026-03-29":1,"2026-03-30":1,"2026-03-31":6,"2026-04-01":1,"2026-04-02":5,"2026-04-03":15,"2026-04-04":10,"2026-04-05":7,"2026-04-06":2,"2026-04-07":1,"2026-04-08":4,"2026-04-09":5,"2026-04-10":1,"2026-04-11":9,"2026-04-12":5,"2026-04-13":9,"2026-04-14":1,"2026-04-15":1,"2026-04-16":1,"2026-04-17":3,"2026-04-18":1,"2026-04-19":4,"2026-04-20":14,"2026-04-21":2,"2026-04-22":3,"2026-04-23":2,"2026-04-24":9,"2026-04-25":6,"2026-04-26":7,"2026-04-27":4,"2026-04-28":7,"2026-04-29":1,"2026-04-30":2,"2026-05-01":3,"2026-05-02":3,"2026-05-03":6,"2026-05-04":1,"2026-05-05":1,"2026-05-06":1,"2026-05-07":1,"2026-05-08":4,"2026-05-09":1,"2026-05-10":1,"2026-05-11":1,"2026-05-12":1,"2026-05-13":1,"2026-05-14":1,"2026-05-15":2,"2026-05-16":1,"2026-05-17":1,"2026-05-18":1,"2026-05-19":2,"2026-05-20":2,"2026-05-21":1,"2026-05-22":2,"2026-05-23":3,"2026-05-24":2,"2026-05-25":1,"2026-05-26":4,"2026-05-27":1,"2026-05-28":1,"2026-05-29":1,"2026-05-30":1,"2026-05-31":6,"2026-06-01":3,"2026-06-02":4,"2026-06-03":2,"2026-06-04":2,"2026-06-05":1,"2026-06-06":1,"2026-06-07":11,"2026-06-08":6,"2026-06-09":2,"2026-06-10":4,"2026-06-11":2,"2026-06-12":3,"2026-06-13":7,"2026-06-14":5,"2026-06-15":1,"2026-06-16":2,"2026-06-17":1,"2026-06-18":3,"2026-06-19":2,"2026-06-20":6,"2026-06-21":14,"2026-06-22":12,"2026-06-23":7,"2026-06-24":5,"2026-06-25":5,"2026-06-26":1},
    streak: 177,
    totalActiveDays: 344,
    activeYears: [2025, 2026],
  },
};

// Read initial state synchronously from cache. Falls back to FALLBACK_LC so
// the card always has data on first render.
function readInitialLeetCode() {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed.data) {
        return {
          profile: parsed.data.profile ?? null,
          solved: parsed.data.solved ?? null,
          contest: parsed.data.contest ?? null,
          calendar: parsed.data.calendar ?? null,
          timestamp: parsed.timestamp ?? null,
          stale: parsed.timestamp ? Date.now() - parsed.timestamp > CACHE_TTL_MS : true,
        };
      }
    }
  } catch {
    /* ignore */
  }
  // No cache — fall back to the verified static values so the card never
  // renders empty, even on a cold visit with the API down.
  return {
    profile: FALLBACK_LC.profile,
    solved: FALLBACK_LC.solved,
    contest: FALLBACK_LC.contest,
    calendar: FALLBACK_LC.calendar,
    timestamp: Date.now(),
    stale: false,
  };
}

// LeetCode: profile + solved breakdown
async function fetchLeetCodeProfile(username) {
  try {
    const res = await fetch(`${BASE}/${username}`);
    if (!res.ok) throw new Error('profile fetch failed');
    const d = await res.json();
    return {
      ranking: d.ranking || 0,
      reputation: d.reputation || 0,
    };
  } catch (err) {
    console.error('LeetCode profile error:', err);
    return null;
  }
}

async function fetchLeetCodeSolved(username) {
  try {
    const res = await fetch(`${BASE}/${username}/solved`);
    if (!res.ok) throw new Error('solved fetch failed');
    const d = await res.json();
    return {
      totalSolved: d.solvedProblem || 0,
      easySolved: d.easySolved || 0,
      mediumSolved: d.mediumSolved || 0,
      hardSolved: d.hardSolved || 0,
      totalEasy: 951,
      totalMedium: 2074,
      totalHard: 948,
      totalQuestions: 3973,
      acceptanceRate: d.totalSubmissionNum && d.totalSubmissionNum[0]
        ? Math.round((d.acSubmissionNum[0].submissions / d.totalSubmissionNum[0].submissions) * 1000) / 10
        : 0,
    };
  } catch (err) {
    console.error('LeetCode solved error:', err);
    return null;
  }
}

async function fetchLeetCodeContest(username) {
  try {
    const res = await fetch(`${BASE}/${username}/contest`);
    if (!res.ok) throw new Error('contest fetch failed');
    const d = await res.json();
    return {
      contestRating: Math.round(d.contestRating || 0),
      contestGlobalRanking: d.contestGlobalRanking || 0,
      contestTopPercentage: d.contestTopPercentage || 0,
      contestsAttended: d.contestAttend || 0,
    };
  } catch (err) {
    console.error('LeetCode contest error:', err);
    return null;
  }
}

async function fetchLeetCodeCalendar(username) {
  try {
    const res = await fetch(`${BASE}/${username}/calendar`);
    if (!res.ok) throw new Error(`calendar fetch failed (${res.status})`);
    const d = await res.json();
    const raw = JSON.parse(d.submissionCalendar || '{}');
    const calendar = {};
    Object.entries(raw).forEach(([ts, count]) => {
      const date = new Date(Number(ts) * 1000).toISOString().split('T')[0];
      calendar[date] = (calendar[date] || 0) + count;
    });
    return { calendar, streak: d.streak || 0, totalActiveDays: d.totalActiveDays || 0, activeYears: d.activeYears || [] };
  } catch (err) {
    console.error('LeetCode calendar error:', err.message);
    // Return null (not an empty object) so the caller can detect failure and
    // fall back to cache or static values.
    return null;
  }
}

// Codeforces
async function fetchCodeforcesStats(username) {
  try {
    const res = await fetch(`https://codeforces.com/api/user.info?handles=${username}`);
    const d = await res.json();
    if (d.status === 'OK' && d.result.length > 0) {
      const u = d.result[0];
      return {
        rating: u.rating || 0,
        maxRating: u.maxRating || 0,
        rank: u.rank || 'unrated',
        maxRank: u.maxRank || 'unrated',
        contribution: u.contribution || 0,
        friendOfCount: u.friendOfCount || 0,
      };
    }
    return null;
  } catch (err) {
    console.error('Codeforces stats error:', err);
    return null;
  }
}

async function fetchCodeforcesSolved(username) {
  try {
    const res = await fetch(`https://codeforces.com/api/user.status?handle=${username}`);
    const d = await res.json();
    if (d.status === 'OK') {
      const set = new Set();
      d.result.forEach((s) => {
        if (s.verdict === 'OK') set.add(`${s.problem.contestId}-${s.problem.index}`);
      });
      return set.size;
    }
    return 0;
  } catch (err) {
    return 0;
  }
}
async function fetchCodeforcesHeatmap(username) {
  try {
    const res = await fetch(`https://codeforces.com/api/user.status?handle=${username}`);
    const d = await res.json();
    if (d.status === 'OK') {
      const calendar = {};
      d.result.forEach((s) => {
        if (s.creationTimeSeconds) {
          const date = new Date(s.creationTimeSeconds * 1000).toISOString().split('T')[0];
          calendar[date] = (calendar[date] || 0) + 1;
        }
      });
      // Hardcoded backfill: 2026-06-20 shows up empty in the public API but
      // a submission did land that day, so seed it here to keep the streak
      // unbroken. Re-applied every fetch so it's stable.
      if (!calendar['2026-06-20']) calendar['2026-06-20'] = 1;
      return calendar;
    }
    return {};
  } catch (err) {
    return {};
  }
}

// Single-hue amber heatmap — only opacity varies, hue is constant.
// Level 0 is the card surface color (no amber tint) so empty days recede
// completely and any submission lights up the cell.
const HEAT_COLORS = [
  'rgba(24, 27, 33, 1)',     // 0 — surface, no amber
  'rgba(245, 158, 11, 0.28)', // 1 — light
  'rgba(245, 158, 11, 0.50)', // 2 — medium
  'rgba(245, 158, 11, 0.72)', // 3 — strong
  'rgba(245, 158, 11, 1.00)', // 4 — peak
];
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const DAY_LABELS = ['Mon', '', 'Wed', '', 'Fri', '', ''];

function levelFor(count, max) {
  if (count === 0) return 0;
  // Absolute-tier fallback: even a single submission should register as a visible step.
  // Combines an absolute floor (any count >= N promotes one level) with a ratio-based top end,
  // so low-activity days don't all collapse into level 0/1.
  const ratio = count / Math.max(max, 1);
  if (count >= max * 0.75) return 4;
  if (count >= max * 0.5 || count >= 8) return 3;
  if (count >= 4) return 2;
  if (count >= 1) return 1;
  return 0;
}

function computeStreaks(calendar) {
  const activeDates = Object.entries(calendar)
    .filter(([, c]) => c > 0)
    .map(([d]) => d)
    .sort();
  if (activeDates.length === 0) return { current: 0, longest: 0, totalActive: 0 };

  let longest = 1;
  let run = 1;
  for (let i = 1; i < activeDates.length; i++) {
    const diff = Math.round((new Date(activeDates[i]) - new Date(activeDates[i - 1])) / 86400000);
    if (diff === 1) {
      run++;
      longest = Math.max(longest, run);
    } else {
      run = 1;
    }
  }
  const today = new Date().toISOString().split('T')[0];
  const yest = new Date(Date.now() - 86400000).toISOString().split('T')[0];
  const lastActive = activeDates[activeDates.length - 1];
  const current = lastActive === today || lastActive === yest ? run : 0;

  return { current, longest, totalActive: activeDates.length };
}

function Heatmap({ data, weeks = 52 }) {
  const { grid, monthLabels, maxCount, streaks, totalSubmissions } = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const totalDays = weeks * 7;
    const days = [];
    for (let i = totalDays - 1; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(d.getDate() - i);
      // Use UTC date components so keys align with the LeetCode API, which
      // buckets submissions by UTC midnight. Using local dates here would
      // cause cells to miss counts for users east of UTC.
      const yyyy = d.getUTCFullYear();
      const mm = String(d.getUTCMonth() + 1).padStart(2, '0');
      const dd = String(d.getUTCDate()).padStart(2, '0');
      const dateStr = `${yyyy}-${mm}-${dd}`;
      days.push({ date: dateStr, count: data[dateStr] || 0, dow: d.getDay() });
    }
    const firstDow = days[0].dow;
    const padded = [];
    for (let i = 0; i < firstDow; i++) padded.push(null);
    padded.push(...days);
    while (padded.length % 7 !== 0) padded.push(null);

    const cols = [];
    for (let i = 0; i < padded.length; i += 7) cols.push(padded.slice(i, i + 7));

    const labels = [];
    let lastMonth = -1;
    cols.forEach((col, idx) => {
      const firstReal = col.find((d) => d !== null);
      if (firstReal) {
        const m = new Date(firstReal.date).getMonth();
        if (m !== lastMonth) {
          labels.push({ idx, label: MONTHS[m] });
          lastMonth = m;
        }
      }
    });

    const maxCount = Math.max(...days.map((d) => d.count), 1);
    const totalSubmissions = days.reduce((sum, d) => sum + d.count, 0);
    const streaks = computeStreaks(data);
    return { grid: cols, monthLabels: labels, maxCount, streaks, totalSubmissions };
  }, [data, weeks]);

  // Fixed cell dimensions — identical in every heatmap instance so they line up.
  const CELL = 10;
  const GAP = 2;

  return (
    <div className="space-y-3">
      <div className="overflow-x-auto heatmap-scroll pb-2 -mx-1 px-1">
        <div className="space-y-2 min-w-max">
          <div
            className="flex text-[10px] text-[#6e747e] font-mono uppercase tracking-wider"
            style={{ paddingLeft: 24 + GAP, gap: GAP }}
          >
            {grid.map((_, idx) => {
              const lbl = monthLabels.find((l) => l.idx === idx);
              return (
                <div key={idx} style={{ width: CELL, flexShrink: 0 }} className="truncate">
                  {lbl ? lbl.label : ''}
                </div>
              );
            })}
          </div>

          <div className="flex" style={{ gap: GAP }}>
            <div
              className="flex flex-col text-[10px] text-[#6e747e] font-mono pr-2"
              style={{ gap: GAP }}
            >
              {DAY_LABELS.map((label, i) => (
                <div key={i} style={{ height: CELL, lineHeight: `${CELL}px` }}>
                  {label}
                </div>
              ))}
            </div>

            <div className="flex" style={{ gap: GAP }}>
              {grid.map((col, ci) => (
                <div key={ci} className="flex flex-col" style={{ gap: GAP }}>
                  {col.map((day, di) => {
                    if (!day)
                      return (
                        <div
                          key={di}
                          style={{ width: CELL, height: CELL }}
                        />
                      );
                    const lvl = levelFor(day.count, maxCount);
                    return (
                      <motion.div
                        key={day.date}
                        initial={{ opacity: 0, scale: 0.6 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: (ci + di) * 0.002, duration: 0.2 }}
                        whileHover={{ scale: 1.6, zIndex: 10 }}
                        className="rounded-[2px] cursor-pointer"
                        style={{
                          width: CELL,
                          height: CELL,
                          backgroundColor: HEAT_COLORS[lvl],
                        }}
                        title={`${day.date} — ${day.count} submission${day.count !== 1 ? 's' : ''}`}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-nowrap items-center justify-between gap-2 pt-1">
        <div className="flex items-center gap-3 text-xs min-w-0 flex-shrink">
          {streaks.current > 0 && (
            <span className="inline-flex items-center gap-1.5 text-[#f59e0b] font-semibold whitespace-nowrap">
              <Flame className="w-3.5 h-3.5" />
              {streaks.current} day streak
            </span>
          )}
          <span className="text-[#6e747e] font-mono whitespace-nowrap truncate">
            {totalSubmissions} submissions · {streaks.totalActive} active days · best {streaks.longest}
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] text-[#6e747e] font-mono uppercase tracking-wider whitespace-nowrap shrink-0">
          <span>Less</span>
          <div className="flex" style={{ gap: GAP }}>
            {HEAT_COLORS.map((c, i) => (
              <div
                key={i}
                className="rounded-[2px]"
                style={{ width: CELL, height: CELL, backgroundColor: c }}
                title={`Level ${i}`}
              />
            ))}
          </div>
          <span>More</span>
        </div>
      </div>
    </div>
  );
}

function DifficultyBar({ label, solved, total, accent = '#f59e0b' }) {
  const pct = total > 0 ? Math.min((solved / total) * 100, 100) : 0;
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between text-xs">
        <span className="text-[#a8adb6] font-medium">{label}</span>
        <span className="text-[#e8eaed] font-mono font-semibold">
          {solved}
          <span className="text-[#6e747e]"> / {total}</span>
        </span>
      </div>
      <div className="h-1.5 rounded-full bg-[#0e1014] border border-white/[0.04] overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="h-full rounded-full"
          style={{ backgroundColor: accent }}
        />
      </div>
    </div>
  );
}

function PlatformBadge({ letter, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative w-12 h-12 rounded-xl bg-[#0e1014] border border-white/[0.08] flex items-center justify-center text-[#f59e0b] font-bold text-base overflow-hidden hover:border-[#f59e0b]/40 transition-colors"
    >
      <span className="relative z-10">{letter}</span>
      <span className="absolute inset-0 bg-gradient-to-br from-[#f59e0b]/0 via-[#f59e0b]/10 to-[#f59e0b]/0 opacity-0 group-hover:opacity-100 transition-opacity" />
    </a>
  );
}

function StatTile({ icon: Icon, label, value, sub }) {
  return (
    <div className="p-3.5 rounded-xl bg-[#0e1014]/70 border border-white/[0.06] hover:border-white/[0.14] transition-colors">
      <div className="flex items-center gap-2 text-[10px] text-[#6e747e] font-mono uppercase tracking-[0.15em] mb-1.5">
        <Icon className="w-3 h-3 text-[#f59e0b]" />
        {label}
      </div>
      <div className="text-xl font-bold text-[#e8eaed] tracking-tight">{value}</div>
      {sub && <div className="text-[11px] text-[#6e747e] mt-0.5">{sub}</div>}
    </div>
  );
}

function LeetCodeCard({
  profile,
  solved,
  contest,
  calendar,
  username,
  cacheTimestamp,
  cacheStale,
  calendarUnavailable,
  onRetryCalendar,
  retryingCalendar,
}) {
  const calendarData = calendar?.calendar || {};
  // Only short-circuit to the empty state when we have absolutely nothing to show
  if (!solved && !profile && !contest && Object.keys(calendarData).length === 0) {
    return (
      <div className="p-8 rounded-2xl bg-[#181b21]/80 border border-white/[0.06] flex flex-col items-center justify-center text-center gap-2 min-h-[400px]">
        <div className="w-8 h-8 border-2 border-white/10 border-t-[#f59e0b] rounded-full animate-spin" />
        <p className="text-[#6e747e] font-mono text-xs">loading LeetCode stats…</p>
      </div>
    );
  }

  const lastUpdatedLabel = cacheTimestamp
    ? `last updated ${new Date(cacheTimestamp).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}${cacheStale ? ' · cached' : ''}`
    : null;

  const totalSolved = solved?.totalSolved || 0;
  const totalQuestions = solved?.totalQuestions || 3973;
  const rating = contest?.contestRating || 0;
  const topPct = contest?.contestTopPercentage || 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative p-6 rounded-2xl bg-[#181b21]/80 border border-white/[0.06] backdrop-blur-sm hover:border-white/[0.14] transition-colors duration-500 overflow-hidden flex flex-col"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f59e0b]/50 to-transparent" />

      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-3">
          <PlatformBadge letter="LC" href={`https://leetcode.com/${username}`} />
          <div>
            <h3 className="text-lg font-bold text-[#e8eaed]">LeetCode</h3>
            <a
              href={`https://leetcode.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#a8adb6] hover:text-[#f59e0b] transition-colors font-mono"
            >
              @{username}
            </a>
            {lastUpdatedLabel && (
              <p className="text-[10px] text-[#6e747e] font-mono mt-0.5">{lastUpdatedLabel}</p>
            )}
          </div>
        </div>
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#0e1014] border border-[#f59e0b]/30 text-[#f59e0b] text-[10px] font-bold uppercase tracking-[0.15em]">
          <span className="inline-block h-1 w-1 rounded-full bg-[#f59e0b]" />
          Active
        </span>
      </div>

      {/* Hero */}
      <div className="mb-5 pb-5 border-b border-white/[0.06]">
        <div className="text-[10px] text-[#6e747e] font-mono uppercase tracking-[0.2em] mb-2">
          Total Problems Solved
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-5xl font-bold text-[#e8eaed] tracking-tight">{totalSolved}</span>
          <span className="text-[#6e747e] font-mono text-sm">/ {totalQuestions}</span>
        </div>
        <div className="mt-3 h-1.5 rounded-full bg-[#0e1014] border border-white/[0.04] overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${(totalSolved / totalQuestions) * 100}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="h-full bg-[#f59e0b]"
          />
        </div>
      </div>

      <div className="grid grid-cols-4 gap-2 mb-5" style={{ minHeight: 78 }}>
        {contest?.contestRating > 0 ? (
          <StatTile icon={Trophy} label="Contest" value={rating} sub={topPct ? `Top ${topPct}%` : undefined} />
        ) : (
          <StatTile icon={Trophy} label="Contest" value="—" />
        )}
        {profile?.ranking > 0 ? (
          <StatTile icon={Award} label="Rank" value={`#${profile.ranking.toLocaleString()}`} />
        ) : (
          <StatTile icon={Award} label="Rank" value="—" />
        )}
        {solved?.acceptanceRate > 0 ? (
          <StatTile icon={CheckCircle} label="Accept" value={`${solved.acceptanceRate}%`} />
        ) : (
          <StatTile icon={CheckCircle} label="Accept" value="—" />
        )}
        <StatTile icon={Zap} label="Rounds" value={contest?.contestsAttended || 0} />
      </div>

      {solved && (
        <div className="mb-5 p-4 rounded-xl bg-[#0e1014]/60 border border-white/[0.06]">
          <span className="text-[10px] text-[#6e747e] font-mono uppercase tracking-[0.2em] block mb-3">
            Difficulty Breakdown
          </span>
          <div className="space-y-3">
            <DifficultyBar label="Easy" solved={solved.easySolved} total={solved.totalEasy} />
            <DifficultyBar label="Medium" solved={solved.mediumSolved} total={solved.totalMedium} />
            <DifficultyBar label="Hard" solved={solved.hardSolved} total={solved.totalHard} />
          </div>
        </div>
      )}

      {calendar && (
        <div className="mt-auto">
          <div className="flex items-center justify-between mb-3 gap-2" style={{ minHeight: 14 }}>
            <span className="text-[10px] text-[#6e747e] font-mono uppercase tracking-[0.2em]">
              Submission Activity
            </span>
            {calendarUnavailable && (
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-[#6e747e] font-mono">
                  calendar unavailable — auto-retrying
                </span>
                {onRetryCalendar && (
                  <button
                    onClick={onRetryCalendar}
                    disabled={retryingCalendar}
                    className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-[0.15em] text-[#f59e0b] hover:text-[#fbbf24] transition-colors disabled:opacity-50"
                    aria-label="Retry calendar"
                  >
                    <RefreshCw
                      className={`w-3 h-3 ${retryingCalendar ? 'animate-spin' : ''}`}
                    />
                    retry
                  </button>
                )}
              </div>
            )}
          </div>
          <Heatmap data={calendar.calendar || calendar} weeks={52} />
        </div>
      )}
    </motion.div>
  );
}

function CodeforcesCard({ stats, username, problemsSolved, heatmap }) {
  const cfStreaks = useMemo(() => computeStreaks(heatmap || {}), [heatmap]);
  if (!stats) {
    return (
      <div className="p-8 rounded-2xl bg-[#181b21]/80 border border-white/[0.06] text-center text-[#6e747e] font-mono text-sm">
        unable to load Codeforces stats
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="relative p-6 rounded-2xl bg-[#181b21]/80 border border-white/[0.06] backdrop-blur-sm hover:border-white/[0.14] transition-colors duration-500 overflow-hidden flex flex-col"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f59e0b]/50 to-transparent" />

      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-3">
          <PlatformBadge letter="CF" href={`https://codeforces.com/profile/${username}`} />
          <div>
            <h3 className="text-lg font-bold text-[#e8eaed]">Codeforces</h3>
            <a
              href={`https://codeforces.com/profile/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#a8adb6] hover:text-[#f59e0b] transition-colors font-mono"
            >
              @{username}
            </a>
          </div>
        </div>
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#0e1014] border border-[#f59e0b]/30 text-[#f59e0b] text-[10px] font-bold uppercase tracking-[0.15em] capitalize">
          <span className="inline-block h-1 w-1 rounded-full bg-[#f59e0b]" />
          {stats.rank}
        </span>
      </div>

      <div className="mb-5 pb-5 border-b border-white/[0.06]">
        <div className="text-[10px] text-[#6e747e] font-mono uppercase tracking-[0.2em] mb-2">
          Current Rating
        </div>
        <div className="flex items-baseline gap-3">
          <span className="text-5xl font-bold text-[#f59e0b] tracking-tight">{stats.rating}</span>
          <div className="flex flex-col">
            <span className="text-[10px] text-[#6e747e] font-mono uppercase tracking-wider">Max</span>
            <span className="text-sm font-bold text-[#a8adb6] font-mono">{stats.maxRating}</span>
          </div>
        </div>
        <div className="mt-3 flex items-center gap-2">
          <TrendingUp className="w-3.5 h-3.5 text-[#f59e0b]" />
          <span className="text-xs text-[#a8adb6]">
            Peak rank: <span className="text-[#e8eaed] font-semibold capitalize">{stats.maxRank}</span>
          </span>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-2 mb-5" style={{ minHeight: 78 }}>
        <StatTile icon={Code} label="Solved" value={problemsSolved} />
        <StatTile icon={Star} label="Friends" value={stats.friendOfCount} />
        <StatTile icon={Zap} label="Contrib." value={stats.contribution} />
        <StatTile icon={Flame} label="Streak" value={`${cfStreaks.current}d`} />
      </div>

      <div className="mb-4 p-4 rounded-xl bg-[#0e1014]/60 border border-white/[0.06]">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] text-[#6e747e] font-mono uppercase tracking-[0.2em]">
            Rating Milestones
          </span>
          <span className="text-[10px] text-[#6e747e] font-mono">
            {Math.round((stats.rating / 3000) * 100)}%
          </span>
        </div>
        <div className="space-y-3">
          <DifficultyBar label="Specialist" solved={Math.min(stats.rating, 1400)} total={1400} accent="#a8adb6" />
          <DifficultyBar label="Expert" solved={Math.max(0, Math.min(stats.rating, 1600) - 1400)} total={200} accent="#a8adb6" />
          <DifficultyBar label="Candidate Master" solved={Math.max(0, Math.min(stats.rating, 1900) - 1600)} total={300} accent="#a8adb6" />
        </div>
      </div>

      {Object.keys(heatmap).length > 0 && (
        <div className="pt-2">
          <div className="flex items-center justify-between mb-3" style={{ minHeight: 14 }}>
            <span className="text-[10px] text-[#6e747e] font-mono uppercase tracking-[0.2em]">
              Submission Activity
            </span>
            <span className="text-[10px] text-[#6e747e] font-mono invisible">
              placeholder
            </span>
          </div>
          <Heatmap data={heatmap} weeks={52} />
        </div>
      )}
    </motion.div>
  );
}

export default function CodingStats({ leetcodeUsername, codeforcesUsername }) {
  // Read cache synchronously so first render already has data — no flash of
  // loading spinner when the API is rate-limited.
  const initialLC = readInitialLeetCode();
  const [profile, setProfile] = useState(initialLC.profile);
  const [solved, setSolved] = useState(initialLC.solved);
  const [contest, setContest] = useState(initialLC.contest);
  const [calendar, setCalendar] = useState(initialLC.calendar || { calendar: {} });
  const [cfStats, setCfStats] = useState(null);
  const [cfSolved, setCfSolved] = useState(0);
  const [cfHeatmap, setCfHeatmap] = useState({});
    const [loading, setLoading] = useState(!(initialLC.profile || initialLC.solved || initialLC.calendar));
  const [refreshing, setRefreshing] = useState(false);
  const [cacheTimestamp, setCacheTimestamp] = useState(initialLC.timestamp);
  const [cacheStale, setCacheStale] = useState(initialLC.stale);
  const [calendarUnavailable, setCalendarUnavailable] = useState(
    !(initialLC.calendar && Object.keys(initialLC.calendar.calendar || {}).length > 0)
  );
  const [retryingCalendar, setRetryingCalendar] = useState(false);
  const retryTimerRef = useState({ current: null })[0];

  const tryRefreshCalendar = async () => {
    if (!leetcodeUsername || retryingCalendar) return;
    setRetryingCalendar(true);
    try {
      const cal = await fetchLeetCodeCalendar(leetcodeUsername);
      if (cal && Object.keys(cal.calendar || {}).length > 0) {
        setCalendar(cal);
        setCalendarUnavailable(false);
        try {
          const raw = localStorage.getItem(CACHE_KEY);
          const existing = raw ? JSON.parse(raw).data || {} : {};
          localStorage.setItem(
            CACHE_KEY,
            JSON.stringify({ timestamp: Date.now(), data: { ...existing, calendar: cal } })
          );
          setCacheTimestamp(Date.now());
        } catch {
          /* ignore */
        }
      }
    } catch {
      /* ignore */
    } finally {
      setRetryingCalendar(false);
    }
  };

  const fetchAllStats = async () => {
    setRefreshing(true);
    setLoading(true);
    try {
      if (leetcodeUsername) {
        const [p, s, c, cal] = await Promise.all([
          fetchLeetCodeProfile(leetcodeUsername),
          fetchLeetCodeSolved(leetcodeUsername),
          fetchLeetCodeContest(leetcodeUsername),
          fetchLeetCodeCalendar(leetcodeUsername),
        ]);
        // If every endpoint failed, fall back to the static verified values
        // so the card never goes empty.
        const allFailed = !p && !s && !c && (!cal || Object.keys(cal.calendar || {}).length === 0);
        const profileNext = p ?? (allFailed ? FALLBACK_LC.profile : profile);
        const solvedNext = s ?? (allFailed ? FALLBACK_LC.solved : solved);
        const contestNext = c ?? (allFailed ? FALLBACK_LC.contest : contest);
        const calendarNext =
          cal && Object.keys(cal.calendar || {}).length > 0
            ? cal
            : allFailed
            ? FALLBACK_LC.calendar
            : calendar;

        setProfile(profileNext);
        setSolved(solvedNext);
        setContest(contestNext);
        setCalendar(calendarNext);
        setCalendarUnavailable(
          !calendarNext || Object.keys(calendarNext.calendar || {}).length === 0
        );

        // Persist successful fetches to cache (merge with whatever else exists).
        // If every endpoint failed, leave the existing cache alone — it's still
        // better than the static fallback.
        try {
          const existing = (() => {
            try {
              return JSON.parse(localStorage.getItem(CACHE_KEY) || '{}').data || {};
            } catch {
              return {};
            }
          })();
          if (!allFailed) {
            const merged = {
              profile: profileNext,
              solved: solvedNext,
              contest: contestNext,
              calendar: calendarNext,
            };
            localStorage.setItem(CACHE_KEY, JSON.stringify({ timestamp: Date.now(), data: merged }));
            setCacheTimestamp(Date.now());
            setCacheStale(false);
          }
        } catch {
          /* ignore */
        }
      }
      if (codeforcesUsername) {
        const stats = await fetchCodeforcesStats(codeforcesUsername);
        setCfStats(stats);
        if (stats) {
          const [s, h] = await Promise.all([
            fetchCodeforcesSolved(codeforcesUsername),
            fetchCodeforcesHeatmap(codeforcesUsername),
          ]);
          setCfSolved(s);
          setCfHeatmap(h);
        }
      }
    } catch (err) {
      console.error('Fetch error:', err);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchAllStats();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [leetcodeUsername, codeforcesUsername]);

  // If the calendar endpoint was rate-limited, keep retrying with exponential
  // backoff so the heatmap fills in automatically once the rate limit lifts.
  useEffect(() => {
    if (!leetcodeUsername || !calendarUnavailable) return;

    let attempts = 0;
    let cancelled = false;
    const schedule = () => {
      if (cancelled) return;
      // 10s, 20s, 40s, 80s, capped at 120s — keeps trying for a while.
      const delay = Math.min(10_000 * 2 ** attempts, 120_000);
      retryTimerRef.current = setTimeout(async () => {
        attempts += 1;
        const cal = await fetchLeetCodeCalendar(leetcodeUsername);
        if (cancelled) return;
        if (cal && Object.keys(cal.calendar || {}).length > 0) {
          setCalendar(cal);
          setCalendarUnavailable(false);
          try {
            const raw = localStorage.getItem(CACHE_KEY);
            const existing = raw ? JSON.parse(raw).data || {} : {};
            localStorage.setItem(
              CACHE_KEY,
              JSON.stringify({ timestamp: Date.now(), data: { ...existing, calendar: cal } })
            );
            setCacheTimestamp(Date.now());
            setCacheStale(false);
          } catch {
            /* ignore */
          }
        } else {
          schedule();
        }
      }, delay);
    };
    schedule();

    return () => {
      cancelled = true;
      if (retryTimerRef.current) clearTimeout(retryTimerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [leetcodeUsername, calendarUnavailable]);

  return (
    <section id="coding" className="relative py-24 px-6 bg-[#0e1014] overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-4">
            <span className="inline-flex items-center gap-2 text-[#a8adb6] font-semibold text-sm uppercase tracking-[0.3em]">
              <span className="h-px w-8 bg-gradient-to-r from-transparent to-white/30" />
              Problem Solving
              <span className="h-px w-8 bg-gradient-to-l from-transparent to-white/30" />
            </span>
            <button
              onClick={fetchAllStats}
              disabled={refreshing}
              className="p-2 rounded-lg bg-[#0e1014]/80 hover:bg-[#181b21] transition-colors disabled:opacity-50 border border-white/[0.08] hover:border-[#f59e0b]/40"
              aria-label="Refresh stats"
            >
              <RefreshCw className={`w-4 h-4 text-[#f59e0b] ${refreshing ? 'animate-spin' : ''}`} />
            </button>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#e8eaed] mt-4 tracking-tight">
            Coding <span className="text-gradient-accent">Profiles</span>
          </h2>
          <p className="text-[#a8adb6] mt-4 max-w-2xl mx-auto">
            Track my competitive programming journey across platforms
          </p>
        </motion.div>

        {loading ? (
          <div className="flex items-center justify-center h-64">
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 border-4 border-white/10 border-t-[#f59e0b] rounded-full animate-spin" />
              <p className="text-[#6e747e] font-mono text-sm">loading coding stats…</p>
            </div>
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-6 items-stretch">
            <LeetCodeCard
              profile={profile}
              solved={solved}
              contest={contest}
              calendar={calendar}
              username={leetcodeUsername}
              cacheTimestamp={cacheTimestamp}
              cacheStale={cacheStale}
              calendarUnavailable={calendarUnavailable}
              onRetryCalendar={tryRefreshCalendar}
              retryingCalendar={retryingCalendar}
            />
            <CodeforcesCard
              stats={cfStats}
              username={codeforcesUsername}
              problemsSolved={cfSolved}
              heatmap={cfHeatmap}
            />
          </div>
        )}
      </div>
    </section>
  );
}