import { cn } from "@/lib/utils";

interface BadgeProps {
    children: React.ReactNode;
    className?: string;
}

export function Badge({ children, className }: BadgeProps) {
    return (
        <span className={cn(
            "inline-flex items-center rounded-full bg-secondary/20 px-2.5 py-0.5 text-xs font-medium text-primary border border-secondary/30",
            className
        )}>
            {children}
        </span>
    );
}
