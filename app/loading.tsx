export default function Loading() {
  return (
    <div className="container-main py-16">
      <div className="space-y-5">
        <div className="h-5 w-32 animate-pulse rounded-full bg-[#dfeee0]" />
        <div className="h-12 w-full max-w-xl animate-pulse rounded-2xl bg-[#edf5ee]" />
        <div className="grid gap-4 md:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="rounded-3xl border border-[#e8efe7] bg-white p-5 shadow-sm">
              <div className="mb-4 h-6 w-24 animate-pulse rounded-full bg-[#edf5ee]" />
              <div className="h-10 w-2/3 animate-pulse rounded-full bg-[#edf4ef]" />
              <div className="mt-4 h-3 w-full animate-pulse rounded-full bg-[#f3f7f3]" />
              <div className="mt-2 h-3 w-5/6 animate-pulse rounded-full bg-[#f3f7f3]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
