import {
  ResponsiveContainer,
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

export default function Rain() {
  const data = [
    { time: "10AM", value: 20 },
    { time: "11AM", value: 50 },
    { time: "12PM", value: 90 },
    { time: "1PM", value: 60 },
    { time: "2PM", value: 80 },
    { time: "3PM", value: 70 },
  ];

  return (
    <div className="absolute w-screen bg-background">
      <div className="absolute right-10 top-12 w-80 rounded-2xl p-4 text-white">
        <h3
          className="
            absolute 
            left-8 
            px-2 
            text-base text-secondary_text font-medium
            -top-10
          "
        >
          Chance Of Rain
        </h3>

        <div className="top-10 h-40 flex-shrink-0 w-80">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
              data={data}
              margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
            >
              <defs>
                <linearGradient id="barGradient" x1="0" y1="1" x2="0" y2="0">
                  <stop offset="0%" stopColor="#1f2937" /> {/* button_dark */}
                  <stop offset="100%" stopColor="#ffffff" />
                </linearGradient>
              </defs>
              <CartesianGrid
                vertical={false}
                stroke="#333"
                strokeDasharray="3 3"
              />
              <XAxis
                dataKey="time"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#888", fontSize: 10 }}
              />
              <YAxis
                domain={[0, 100]}
                ticks={[0, 50, 100]}
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#888", fontSize: 10 }}
                tickFormatter={(v) =>
                  v === 100
                    ? "Rainy"
                    : v === 50
                    ? "Sunny"
                    : v === 0
                    ? "Heavy"
                    : ""
                }
              />
              <Bar
                dataKey="value"
                barSize={6}
                fill="url(#barGradient)"
                radius={[10, 10, 0, 0]}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#60A5FA"
                strokeWidth={2}
                // dot={{ r:4, fill:'#60A5FA' }}
                dot={false}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#222",
                  border: "none",
                  borderRadius: "8px",
                }}
                labelStyle={{ color: "#fff" }}
                itemStyle={{ color: "#60A5FA" }}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
