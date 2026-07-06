"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { courseData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import { BsBookHalf } from "react-icons/bs";

export default function Course() {
  const { ref } = useSectionInView("Courses");
  const { theme } = useTheme();

  const isLight = theme === "light";

  return (
    <section
      id="course"
      ref={ref}
      className="section-container mb-28 scroll-mt-28 sm:mb-40"
    >
      <SectionHeading>Courses</SectionHeading>
      <div className="w-full overflow-hidden">
        <VerticalTimeline lineColor={isLight ? "#bae6fd" : "rgba(125, 211, 252, 0.24)"}>
        {courseData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            contentStyle={{
              background: isLight
                ? "rgba(255, 255, 255, 0.88)"
                : "rgba(255, 255, 255, 0.05)",
              boxShadow: isLight
                ? "0 16px 48px -16px rgba(15, 23, 42, 0.18)"
                : "none",
              border: isLight
                ? "1px solid rgba(255, 255, 255, 0.75)"
                : "1px solid rgba(255, 255, 255, 0.08)",
              textAlign: "left",
              padding: "1.5rem 2rem",
              borderRadius: "1rem",
            }}
            contentArrowStyle={{
              borderRight: isLight
                ? "0.4rem solid rgba(255, 255, 255, 0.85)"
                : "0.4rem solid rgba(255, 255, 255, 0.05)",
            }}
            date={item.date}
            dateClassName="!text-gray-500 dark:!text-gray-400 !font-medium"
            icon={<BsBookHalf />}
            iconStyle={{
              background: isLight ? "#0284c7" : "rgba(56, 189, 248, 0.85)",
              color: "#fff",
              boxShadow: "0 12px 28px -10px rgba(14, 165, 233, 0.75)",
            }}
          >
            <h3 className="font-semibold capitalize text-gray-900 dark:text-gray-100">
              {item.title}
            </h3>
            <p className="!mt-1 font-medium text-brand-600 dark:text-brand-400">
              {item.location}
            </p>
            <p className="!mt-2 !font-normal leading-relaxed text-gray-600 dark:text-white/75">
              {item.description}
            </p>
          </VerticalTimelineElement>
        ))}
        </VerticalTimeline>
      </div>
    </section>
  );
}
