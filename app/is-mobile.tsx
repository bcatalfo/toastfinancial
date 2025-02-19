import { useEffect, useState } from "react";

export default function useIsMobile() {
  const [mobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (window.matchMedia("(max-width: 1024px)").matches) {
      setIsMobile(true);
    }
  }, []);
  return mobile;
}
