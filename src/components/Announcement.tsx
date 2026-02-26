"use client";
import React, { useEffect, useState } from "react";
import apiClient from "@/services/api";

interface AnnouncementType {
  id: number;
  title: string;
  content: string;
}

const Announcement = () => {
  const [announcements, setAnnouncements] = useState<AnnouncementType[]>([]);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const response = await apiClient.get('/get_announcement');
        if (response.data.success && response.data.data.length > 0) {
          setAnnouncements(response.data.data);
        }
      } catch (error) {
        console.error("Failed to fetch announcements:", error);
      }
    };

    fetchAnnouncements();
  }, []);

  if (announcements.length === 0) return null;


  return (
    <div className="h-12 w-screen overflow-hidden px-6 lg:px-20 pointer-events-none bg-(--accent-gold)">
      <div className="max-w-400 mx-auto h-full w-full flex items-center overflow-hidden">
        <div className="animate-scroll-single flex items-center whitespace-nowrap">
          {announcements.map((item, indx) => (
            <div key={indx} className="flex gap-4 items-center">
              <p className="font-medium text-[14px] text-(--secondary-bg) inline-block px-6">
                {`${item.title} : ${item.content}`}
              </p>
              {indx !== announcements.length - 1 && <div className="w-1 h-1 bg-(--secondary-bg)"></div>}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-single {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-scroll-single {
          animation: scroll-single 15s linear infinite;
        }

        .animate-scroll-single:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Announcement;
