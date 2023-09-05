"use client";
import { useEffect, useState } from "react";
import { useNetwork } from "@mantine/hooks";

const OfflineStorage = () => {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");

  const dbName = "offline_data_db";
  const storeName = "messages";

  useEffect(() => {
    openDatabase()
      .then(showStoredMessages)
      .catch((error) => console.error("Database error:", error));
  }, []);

  const openDatabase = () => {
    return new Promise((resolve, reject) => {
      const request = window.indexedDB.open(dbName, 1);

      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        db.createObjectStore(storeName, { keyPath: "id", autoIncrement: true });
      };

      request.onsuccess = (event) => resolve(event.target.result);
      request.onerror = (event) => reject(event.target.error);
    });
  };

  const addMessage = async () => {
    if (!messageInput) return;

    try {
      const db = await openDatabase();
      const transaction = db.transaction([storeName], "readwrite");
      const store = transaction.objectStore(storeName);

      const data = { message: messageInput };
      const addRequest = store.add(data);

      addRequest.onsuccess = () => {
        setMessageInput("");
        showStoredMessages(db);
      };
    } catch (error) {
      console.error("Database error:", error);
    }
  };

  const showStoredMessages = async (db) => {
    try {
      const transaction = db.transaction([storeName], "readonly");
      const store = transaction.objectStore(storeName);
      const cursorRequest = store.openCursor();

      const storedMessages = [];
      cursorRequest.onsuccess = (event) => {
        const cursor = event.target.result;
        if (cursor) {
          storedMessages.push(cursor.value.message);
          cursor.continue();
        } else {
          setMessages(storedMessages);
        }
      };
    } catch (error) {
      console.error("Database error:", error);
    }
  };

  const networkStatus = useNetwork();

  return (
    <>
      <div className="flex justify-center p-10">
        <div>
          <div className="pt-[50px]">
            <h1 className="font-bold text-2xl">Offline Reports</h1>
            <div className="flex justify-center">
              {networkStatus.online ? (
                <p className="text-green-500 p-5">online</p>
              ) : (
                <p className="text-red-500 p-5">offline</p>
              )}
            </div>
            <div>
              <div>
                <input
                  type="text"
                  placeholder="Report Title"
                  className="w-full mb-5 mt-5 border-gray-900 h-10"
                />
              </div>
              <textarea
                type="text"
                value={messageInput}
                onChange={(event) => setMessageInput(event.target.value)}
                placeholder="Enter Report"
                className=" mt-5 h-10 w-full bg-gray-200 rounded-lg"
              />
            </div>
            <button
              onClick={addMessage}
              className="bg-orange-700 text-white p-3 rounded-sm mt-5 "
            >
              Add
            </button>
            <h2 className="mt-5 font-semibold">Saved Messages:</h2>
            <div className="bg-white w-[200px] h-[200px] p-5 mt-5 drop-shadow-md">
              <ul className="text-gray-700">
                {messages.map((message, index) => (
                  <li key={index}>{message}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OfflineStorage;
