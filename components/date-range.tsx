export default function DateRangeShowcase() {
  const marchDays = [
    ["", "", "", "", "", "", "1"],
    ["2", "3", "4", "5", "6", "7", "8"],
    ["9", "10", "11", "12", "13", "14", "15"],
    ["16", "17", "18", "19", "20", "21", "22"],
    ["23", "24", "25", "26", "27", "28", "29"],
    ["30", "31", "", "", "", "", ""],
  ];

  const aprilDays = [
    ["", "", "1", "2", "3", "4", "5"],
    ["6", "7", "8", "9", "10", "11", "12"],
    ["13", "14", "15", "16", "17", "18", "19"],
    ["20", "21", "22", "23", "24", "25", "26"],
    ["27", "28", "29", "30", "", "", ""],
  ];

  const weekdayLabels = ["Pt", "Sa", "Çr", "Pe", "Cu", "Ct", "Pz"];

  return (
    <div className="w-full rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
      <div className="flex items-center justify-between gap-4">
        <div className="flex h-16 min-w-[180px] items-center justify-between rounded-2xl bg-slate-100 px-6 text-[18px] font-medium text-slate-800">
          <span>Bugün</span>
          <span className="text-slate-600">▾</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex h-16 min-w-[210px] items-center gap-3 rounded-2xl border border-slate-300 bg-white px-5 text-[18px] font-medium text-slate-800">
            <span className="text-slate-400">📅</span>
            <span>10/03/2026</span>
          </div>
          <div className="flex h-16 min-w-[210px] items-center gap-3 rounded-2xl border border-slate-300 bg-white px-5 text-[18px] font-medium text-slate-800">
            <span className="text-slate-400">📅</span>
            <span>30/04/2026</span>
          </div>
        </div>
      </div>

      <div className="my-6 h-px bg-slate-200" />

      <div className="grid grid-cols-[72px_1fr_1fr_72px] items-start gap-6">
        <div className="flex justify-center">
          <button className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-3xl text-slate-600">
            ←
          </button>
        </div>

        <CalendarMonth
          title="Mart"
          year="2026"
          weekdayLabels={weekdayLabels}
          days={marchDays}
          startDay="10"
          inRange={["11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"]}
        />

        <CalendarMonth
          title="Nisan"
          year="2026"
          weekdayLabels={weekdayLabels}
          days={aprilDays}
          endDay="30"
          inRange={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29"]}
        />

        <div className="flex justify-center">
          <button className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-3xl text-slate-600">
            →
          </button>
        </div>
      </div>

      <div className="mt-6 h-px bg-slate-200" />

      <div className="mt-6 flex items-center justify-end gap-4">
        <button className="rounded-2xl bg-slate-200 px-8 py-4 text-lg font-semibold text-slate-700">
          Clear
        </button>
        <button className="rounded-2xl bg-sky-600 px-8 py-4 text-lg font-semibold text-white">
          OK
        </button>
      </div>
    </div>
  );
}

function CalendarMonth({
  title,
  year,
  weekdayLabels,
  days,
  startDay,
  endDay,
  inRange = [],
}: {
  title: string;
  year: string;
  weekdayLabels: string[];
  days: string[][];
  startDay?: string;
  endDay?: string;
  inRange?: string[];
}) {
  return (
    <div className="w-full">
      <div className="mb-6 flex items-center justify-center gap-4 text-[22px] font-semibold text-slate-700">
        <span>{title}</span>
        <span>{year}</span>
      </div>

      <div className="mb-4 grid grid-cols-7 gap-2">
        {weekdayLabels.map((label) => (
          <div
            key={label}
            className="flex h-12 items-center justify-center text-[15px] font-semibold text-slate-400"
          >
            {label}
          </div>
        ))}
      </div>

      <div className="grid gap-2">
        {days.map((week, weekIndex) => (
          <div key={weekIndex} className="grid grid-cols-7 gap-2">
            {week.map((day, dayIndex) => {
              const isEmpty = !day;
              const isStart = day === startDay;
              const isEnd = day === endDay;
              const isInRange = inRange.includes(day);

              return (
                <div
                  key={`${weekIndex}-${dayIndex}`}
                  className={[
                    "flex h-14 items-center justify-center rounded-xl text-[18px] font-semibold transition-all",
                    isEmpty
                      ? "bg-transparent text-transparent"
                      : isStart
                      ? "border-2 border-sky-300 bg-sky-100 text-white shadow-inner"
                      : isEnd
                      ? "bg-sky-600 text-white"
                      : isInRange
                      ? "bg-slate-100 text-slate-600"
                      : "bg-transparent text-slate-600",
                  ].join(" ")}
                >
                  {day || "."}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}