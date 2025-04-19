export function ToxicMeter({ score }) {
    const level = 100 - score;
    return (
      <div className="w-full bg-gray-300 h-2">
        <div
          className="bg-red-500 h-2 transition-all duration-500"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    );
  }