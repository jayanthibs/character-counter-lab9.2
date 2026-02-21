import type { StatsDisplayProps } from "../../types";

function StatsDisplay({ stats, showReadingTime }: StatsDisplayProps) {
  return (
    <section className="stats-section common-align">
    <div className="stats-display">
      <div className="stats-content">
        <p>Characters</p>
        <p className="textalign">{stats.characterCount}</p>
      </div>

      <div className="stats-content">
        <p>Words</p>
        <p className="textalign">
          {stats.wordCount >= 25 && stats.wordCount <= 100 ? (
            <span style={{ color: "green" }}>{stats.wordCount}</span>
          ) : (
            <span style={{ color: "red" }}>{stats.wordCount}</span>
          )}
        </p>
      </div>

      <div className="stats-content">
        <p >Reading time</p>
        {showReadingTime && <p className="textalign">{stats.readingTime}</p>}
      </div>
      </div>

      

    
    </section>
  );
}

export default StatsDisplay;
