
export default function Loading() {
  return (
    <main className="flex gap-5 flex-1 flex-col items-center justify-center animate-pulse">
      <div className="w-2/3 h-14 bg-gray-300 rounded-lg md:h-16 dark:bg-gray-600"></div>

      <div className="w-full h-28 bg-gray-300 rounded-lg dark:bg-gray-600"></div>
      <div className="w-full h-28 bg-gray-300 rounded-lg dark:bg-gray-600"></div>

      <div className="w-full h-14 bg-gray-300 rounded-lg md:w-1/3 dark:bg-gray-600"></div>
    </main>
  )
};
