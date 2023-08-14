import React, { useEffect, useState } from "react";
import { data } from "./data";
function VisitedUrls() {
  const [urls, setUrls] = useState<any>([]);

  useEffect(() => {
    // @ts-ignore
    chrome.storage.sync.get(["visitedUrls"], (result) => {
      setUrls(result.visitedUrls || []);
    });
  }, []);

  return (
    <div>
      <h3>Visited URLs:</h3>
      <ul className="list">
        {urls.map((url: string, index: any) => (
          <li key={index} className="list-item">
            {url}
          </li>
        ))}
      </ul>
      <p>Total pages loaded: {urls.length}</p>
    </div>
  );
}

export default VisitedUrls;
