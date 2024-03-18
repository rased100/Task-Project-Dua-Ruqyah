"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";
import clipboardCopy from "clipboard-copy";
import playBtnImg from "@/public/btn/playbtn.svg";
import pauseBtnImg from "@/public/btn/pausebtn.svg";
import { IoCopyOutline } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
import { IoBulbOutline } from "react-icons/io5";
import { FiShare2 } from "react-icons/fi";
import { TbInfoOctagon } from "react-icons/tb";
import { ImLoop } from "react-icons/im";

const CustomButton = ({ dua }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLooping, setIsLooping] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [totalDuration, setTotalDuration] = useState(0);
  const audioRef = useRef();

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const audioElement = audioRef.current;
    const handleEnded = () => {
      setIsPlaying(false);
    };
    if (audioElement) {
      audioRef.current.addEventListener("ended", handleEnded);
      return () => {
        audioElement.removeEventListener("ended", handleEnded);
      };
    }
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
      audioRef.current.loop = isLooping;
    }
  }, [isPlaying, isLooping]);

  useEffect(() => {
    const audioElement = audioRef.current;
    const handleTimeUpdate = () => {
      setCurrentTime(audioElement.currentTime);
      setTotalDuration(audioElement.duration);
    };
    if (audioElement) {
      audioElement.addEventListener("timeupdate", handleTimeUpdate);
      return () => {
        audioElement.removeEventListener("timeupdate", handleTimeUpdate);
      };
    }
  }, [audioRef]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  let previousBookmarks = null;
  if (typeof window !== "undefined") {
    previousBookmarks = localStorage.getItem("bookmarks");
  }

  const previousFolders = [];

  if (previousBookmarks) {
    const bookmarks = JSON.parse(previousBookmarks);
    for (const folder in bookmarks) {
      previousFolders.push(folder);
    }
  }

  const handleCopy = () => {
    const duaText = document.getElementById(dua.dua_id).innerText;
    const textToCopy = `${duaText}\n\nCopied from:\nDua zone (Hisnul muslim)\nhttps:www.duazone.com`;
    clipboardCopy(textToCopy);

    toast.success("Copied to clipboard", {
      style: {
        padding: "20px",
        background: "#333",
        color: "white",
      },
      iconTheme: {
        primary: "white",
        secondary: "black",
      },
      position: "bottom-center",
    });
  };

  const handleBookmark = (e) => {
    e.preventDefault();
    const form = e.target;

    const newFolder = form.newFolder.value;
    const duas = [dua.dua_id];
    const createdAt = new Date();

    if (!newFolder) {
      const folderName = form.folderName.value;

      if (previousBookmarks) {
        const bookmarks = JSON.parse(previousBookmarks);
        bookmarks[folderName] = { duas, createdAt };
        localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

        toast.success("Bookmark added", {
          style: {
            padding: "20px",
            background: "#333",
            color: "white",
          },
          iconTheme: {
            primary: "white",
            secondary: "black",
          },
          position: "bottom-center",
        });
        form.reset();
      } else {
        const bookmarks = { [folderName]: { duas, createdAt } };
        localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
        toast.success("Bookmark Done", {
          style: {
            padding: "15px",
            background: "#333",
            color: "white",
          },
          iconTheme: {
            primary: "white",
            secondary: "black",
          },
          position: "bottom-center",
        });
        form.reset();
      }
    } else {
      if (previousBookmarks) {
        const bookmarks = JSON.parse(previousBookmarks);
        bookmarks[newFolder] = { duas, createdAt };
        localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

        toast.success("Bookmark Done", {
          style: {
            padding: "20px",
            background: "#333",
            color: "white",
          },
          iconTheme: {
            primary: "white",
            secondary: "black",
          },
          position: "bottom-center",
        });

        form.reset();
      } else {
        const bookmarks = { [newFolder]: { duas, createdAt } };
        localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
        toast.success("Bookmark Done", {
          style: {
            padding: "15px",
            background: "#333",
            color: "white",
          },
          iconTheme: {
            primary: "white",
            secondary: "black",
          },
          position: "bottom-center",
        });
        form.reset();
      }
    }
  };

  const handleComingSoonToast = () => {
    toast.success("Coming Soon Insha allah.", {
      style: {
        padding: "20px",
        background: "#333",
        color: "white",
      },
      iconTheme: {
        primary: "white",
        secondary: "black",
      },
      position: "bottom-center",
    });
  };

  return (
    <div className="flex justify-between items-center mt-8">
      <Toaster />
      <div>
        {dua.audio && (
          <div className="flex gap-4 items-center">
            <button onClick={togglePlay}>
              <Image
                src={isPlaying ? playBtnImg : pauseBtnImg}
                alt="control button"
              />
            </button>
            <audio ref={audioRef} src={dua.audio} />
            {isPlaying && (
              <div className="audio-control">
                <input
                  type="range"
                  min={0}
                  max={totalDuration}
                  value={currentTime}
                  onChange={(e) => {
                    const time = parseFloat(e.target.value);
                    audioRef.current.currentTime = time;
                    setCurrentTime(time);
                  }}
                  className="appearance-none w-[130px] bg-gray-300 h-1 rounded-full outline-none"
                />
                <span className="text-gray-600 mx-4">
                  {formatTime(totalDuration - currentTime)}
                </span>
                <button onClick={() => setIsLooping(!isLooping)}>
                  <ImLoop
                    className={`text-xl ${
                      isLooping ? "text-gray-900" : "text-gray-500"
                    }`}
                  />
                </button>
              </div>
            )}
          </div>
        )}
      </div>
      <div className="flex gap-6">
        <button onClick={handleCopy} title="Copy">
          <IoCopyOutline className="text-gray-500 text-3xl" />
        </button>
        <button
          title="Bookmark"
          onClick={() => document.getElementById("bookmark_modal").showModal()}
        >
          <CiBookmark className="text-gray-500 text-3xl" />
        </button>
        <button onClick={handleComingSoonToast} title="Memorize">
          <IoBulbOutline className="text-gray-500 text-3xl" />
        </button>
        <button onClick={handleComingSoonToast} title="Share">
          <FiShare2 className="text-gray-500 text-2xl" />
        </button>
        <button onClick={handleComingSoonToast} title="Report">
          <TbInfoOctagon className="text-gray-500 text-3xl" />
        </button>
      </div>

      <dialog id="bookmark_modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Favorite</h3>
          <form onSubmit={handleBookmark}>
            <div>
              <label className="block text-left font-medium text-base text-title mb-2 capitalize dark:text-dark-text xs:mb-3 xs:text-sm mt-5">
                Folder Name
              </label>
              <select
                className="border rounded-md w-full px-4 py-2 border-green-600"
                name="folderName"
                id="folderName"
              >
                <option value="Favorite">Favorite</option>
                {previousFolders.map((folder, index) => (
                  <option value={folder} key={index}>
                    {folder}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-left font-medium text-base text-title mb-2 capitalize dark:text-dark-text xs:mb-3 xs:text-sm mt-5">
                Or,
              </label>
              <input
                className="border rounded-md w-full px-4 py-2 border-green-600"
                type="text"
                placeholder="Create New Bookmark Folder"
                name="newFolder"
              />
            </div>
            <input
              className="px-4 py-2 m-4 bg-green-600 text-gray-200 font-semibold rounded-md"
              type="submit"
              value="Save"
            />
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default CustomButton;
