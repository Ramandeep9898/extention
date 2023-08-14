import VisitedUrls from "./VisitedUrls";
import TrackUrls from "./TrackUrls";
import "./App.css";
import { data } from "./data";
import { useEffect, useState } from "react";

function App() {
  const [list, setList] = useState(data);
  const [urls, setUrls] = useState<any>([]);
  const [inputValue, setInputValue] = useState({
    name: "",
    url: "",
    count: 0,
  });

  useEffect(() => {
    // @ts-ignore
    chrome.storage.sync.get(["visitedUrls"], (result) => {
      setUrls(result.visitedUrls || []);
    });
  }, []);

  useEffect(() => {
    const urlCountMap = {};
    urls.forEach((url: any) => {
      // @ts-ignore
      urlCountMap[url] = (urlCountMap[url] || 0) + 1;
    });
    const updatedData = data.map((item) => ({
      ...item,
      // @ts-ignore
      count: urlCountMap[item.url] || 0,
    }));
    setList(updatedData);
  }, [urls]);

  const addLinkHandler = () => {
    if (inputValue.name !== "" && inputValue.url !== "") {
      console.log(inputValue);
      const newArray = [...list, inputValue];
      setList(newArray);
      console.log("newArray", newArray);
    }
  };
  return (
    <div className="App">
      <div className="input-container">
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="name"
            value={inputValue.name}
            onChange={(e) =>
              setInputValue({ ...inputValue, name: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="url"
            value={inputValue.url}
            onChange={(e) =>
              setInputValue({ ...inputValue, url: e.target.value })
            }
          />
        </div>
        <button className="btn-black" onClick={addLinkHandler}>
          <span> Add </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-25"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </div>

      <ul className="list">
        {list.length &&
          list.map((ele, index) => (
            <li className="card" key={index}>
              <div className="">
                <h3 className="card-link">{ele.name}</h3>
                <p className="card-heading">{ele.url}</p>
              </div>

              <div className=" card-end">
                <div className="card-visiters">
                  <p className="">{ele.count}</p>
                  <p className="">visiters</p>
                </div>
                <button className="card-btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-25"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default App;
