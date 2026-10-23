"use client";
import React, { useEffect, useState } from "react";
import apiClient from "@/services/api";

interface AnnouncementType {
  id: number;
  title: string;
  content: string;
  category?: string;
  attachment_url?: string | null;
  attachment_name?: string | null;
  download_link_text?: string | null;
}

const Announcement = () => {
  const [announcements, setAnnouncements] = useState<AnnouncementType[]>([]);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const response = await apiClient.get('/get_announcement');
        if (response.data.success && Array.isArray(response.data.data)) {
          // Strictly show only Public announcements
          const publicAnnouncements = response.data.data.filter(
            (item: AnnouncementType) => !item.category || item.category === "Public"
          );
          setAnnouncements(publicAnnouncements);
        }
      } catch (error) {
        console.error("Failed to fetch announcements:", error);
      }
    };

    fetchAnnouncements();
  }, []);

  if (announcements.length === 0) return null;

  return (
    <div className="h-12 w-screen overflow-hidden px-6 lg:px-20 bg-(--accent-gold) select-none">
      <div className="max-w-400 mx-auto h-full w-full flex items-center overflow-hidden">
        <div className="animate-scroll-single flex items-center whitespace-nowrap">
          {announcements.map((item, indx) => (
            <div key={item.id || indx} className="flex gap-4 items-center">
              <div className="font-medium text-[14px] text-(--secondary-bg) inline-flex items-center px-6">
                <span>{`${item.title} : ${item.content}`}</span>
                {item.attachment_url && (
                  <a
                    href={item.attachment_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    className="inline-flex items-center gap-1.5 ml-3 px-2.5 py-0.5 rounded-full bg-black/10 hover:bg-black/20 text-(--secondary-bg) font-semibold text-[12px] transition-colors pointer-events-auto cursor-pointer"
                    title={`Download: ${item.attachment_name || item.download_link_text || 'File'}`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <svg
                      className="w-3.5 h-3.5 inline-block shrink-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                    <span>{item.download_link_text || "Download File"}</span>
                  </a>
                )}
              </div>
              {indx !== announcements.length - 1 && <div className="w-1 h-1 bg-(--secondary-bg) rounded-full"></div>}
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
          animation: scroll-single 20s linear infinite;
        }

        .animate-scroll-single:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Announcement;
