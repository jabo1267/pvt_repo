import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

interface FropsTrackerProps {}

export default function FropsTracker({}: FropsTrackerProps) {
  const today = 0.00100;
  const yesterday = 0.000095;
  const tomorrow = 0.010105;

  const data = [
    { name: "Yesterday", value: yesterday, label: "₣0.000095" },
    { name: "Today", value: today, label: "₣0.0100" },
    { name: "Tomorrow", value: tomorrow, label: "₣0.000105" },
  ];

  return (
    <section id="frops" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-dancing text-5xl text-gold mb-6">
            Frops Currency(Higher value than gold!)
          </h2>
          <p className="text-xl text-off-white/80 max-w-2xl mx-auto">
            Exclusive love currency, determined by the almighty whale of the frops market, Seona(Love youuuu....value nale predicted vare ethikanee)
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="frops-container rounded-2xl p-8 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-sm text-off-white/60 mb-2">Yesterday</div>
                <div className="text-2xl font-bold text-accent-pink">
                  ₣0.000095
                </div>
              </div>
              <div className="text-center">
                <div className="text-sm text-off-white/60 mb-2">Today</div>
                <div className="text-3xl font-bold text-gold">₣0.00100</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-off-white/60 mb-2">
                  Tomorrow (Hopefully)
                </div>
                <div className="text-2xl font-bold text-green-400">
                  ₣0.010105
                </div>
              </div>
            </div>

            <div className="bg-deep-navy/50 rounded-xl p-6 border border-accent-pink/20">
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data}>
                    <XAxis
                      dataKey="name"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "#ccd6f6", fontSize: 12 }}
                    />
                    <YAxis hide />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#0a192f",
                        border: "1px solid #ff69b4",
                        borderRadius: "8px",
                        color: "#ccd6f6",
                      }}
                      formatter={(value: number) => [value.toFixed(6), "Frops"]}
                    />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#ff69b4"
                      strokeWidth={3}
                      dot={{ fill: "#ff69b4", strokeWidth: 2, r: 4 }}
                      activeDot={{ r: 6, fill: "#ffd700" }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
