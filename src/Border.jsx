export const Border = () => {
  return (
    <div className="w-sm mx-auto p-4 ">
      <h2>Categories</h2>
      <ul className="*:rounded-full *:border *:border-sky-100 *:bg-sky-50 *:px-2 *:py-0.5 dark:text-sky-300 dark:*:border-sky-500/15 dark:*:bg-sky-500/10 *:flex *:inline ">
        <li>Sales</li>
        <li>Marketing</li>
        <li>SEO</li>
      </ul>
      <blockquote className="text-2xl font-semibold italic text-center text-slate-900">
        When you look
        <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
          <span className="relative text-white">annoyed</span>
        </span>
        all the time, people think that you're busy.
      </blockquote>
    </div>
  );
};
