import { useState } from "react"

function IndexPopup() {
  const [data, setData] = useState("")

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 16
      }}>
      <h2>
        Welcome to your{" "}
        <a href="https://www.plasmo.com" target="_blank">
          Plasmo
        </a>{" "}
        Extension!
      </h2>
      <input onChange={(e) => setData(e.target.value)} value={data} />
      <button
        className="button"
        onClick={() => {
          chrome.tabs.create({
            url: "./tabs/index.html"
          })
        }}>
        Export Instagram Data
      </button>
    </div>
  )
}

export default IndexPopup
