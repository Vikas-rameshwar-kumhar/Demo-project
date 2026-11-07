export function ArrowIcon({
  diagonal = false,
  className,
}: {
  diagonal?: boolean;
  className?: string;
}) {
  return diagonal ? (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className={className}>
      <path d="M5 15 15 5M6 5h9v9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ) : (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className={className}>
      <path d="M3 10h13m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
