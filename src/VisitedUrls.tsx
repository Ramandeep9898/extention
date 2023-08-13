import React, { useEffect, useState } from "react";

function VisitedUrls() {
  const [urls, setUrls] = useState<string[]>([]);

  useEffect(() => {
    // @ts-ignore
    chrome.storage.sync.get(["visitedUrls"], (result) => {
      setUrls(result.visitedUrls || []);
    });
  }, []);

  return (
    <div>
      <h3>Visited URLs:</h3>
      <ul>
        {urls.map((url, index) => (
          <li key={index}>{url}</li>
        ))}
      </ul>
      <p>Total pages loaded: {urls.length}</p>
    </div>
  );
}

export default VisitedUrls;
