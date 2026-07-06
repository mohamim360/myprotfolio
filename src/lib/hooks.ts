import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./types";

export function useSectionInView(sectionName: SectionName, threshold = 0.25) {
  const { ref, inView } = useInView({
    threshold,
    rootMargin: "-20% 0px -35% 0px",
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 700) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref,
  };
}
