"use client";

import * as React from "react";
import { cn } from "../helper";

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  loading: boolean;
}

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, children, loading, ...props }, ref) => (
    <div ref={ref} className="relative inline-block" {...props}>
      {loading && (
        <div
          className={cn(
            "w-full h-full animate-pulse z-10 bg-neutral-100 dark:bg-neutral-800",
            className
          )}
        />
      )}
      {!loading && children}
    </div>
  )
);

export { Skeleton };
