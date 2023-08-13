import React, { useState } from "react";
import { data } from "./data";

function TrackUrls() {
  const [url, setUrl] = useState<string>("");
  const [trackedUrls, setTrackedUrls] = useState<string[]>([]);

  const handleAdd = () => {
    setTrackedUrls([...trackedUrls, url]);
    setUrl("");
  };

  return (
    <div>
      <h3>Track Specific URLs:</h3>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter URL to track"
      />
      <button onClick={handleAdd}>Add URL</button>
      <ul>
        {trackedUrls.map((tUrl, index) => (
          <li key={index}>{tUrl}</li>
        ))}
      </ul>
    </div>
  );
}

export default TrackUrls;
