'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="container-main flex min-h-[50vh] items-center justify-center py-14 text-center">
      <div className="max-w-md rounded-3xl border border-[#e8efe7] bg-white p-8 shadow-sm">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#16834a]">Market alert</p>
        <h2 className="mt-3 text-3xl font-black text-[#112617]">কিছু ভুল হয়েছে</h2>
        <p className="mt-4 text-sm leading-7 text-[#718176]">
          এই পেজটি লোড করতে সমস্যা হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।
        </p>
        <button
          type="button"
          onClick={() => reset()}
          className="btn-primary mt-6"
        >
          আবার চেষ্টা করুন
        </button>
        {process.env.NODE_ENV !== 'production' && (
          <pre className="mt-4 overflow-x-auto rounded-2xl bg-[#f7faf8] p-3 text-left text-xs text-[#4d5b51]">
            {error.message}
          </pre>
        )}
      </div>
    </div>
  );
}
