import React, { useEffect, useState } from "react";

// 呼び出し元でRefをidで取得して引数に当てる
export const useOffsetTop = (ref?: React.RefObject<HTMLElement>) => {
  const [viewportTop, setViewportTop] = useState<number>();
  const [pageOffsetTop, setPageOffsetTop] = useState<number>();

  const handler = () => {
    if (!ref?.current) return;
    const clientRect = ref.current.getBoundingClientRect();
    setViewportTop(clientRect.top);
    const newPageOffsetTop = clientRect.top + window.pageYOffset;
    setPageOffsetTop(newPageOffsetTop);
  };

  useEffect(() => {
    if (!ref?.current) return;

    handler();
    window.addEventListener("scroll", handler);

    return () => window.removeEventListener("scroll", handler);
  }, [handler]);

  return { viewportTop, pageOffsetTop };
};
