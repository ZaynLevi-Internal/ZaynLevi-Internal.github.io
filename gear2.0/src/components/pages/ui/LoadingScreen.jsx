const LoadingScreen = () => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#030b1c] text-slate-200">
    <div className="flex items-center gap-4">
      <img src="/zaynlevi-mark.svg" alt="" className="h-10 w-10" />
      <span className="text-sm font-medium">Loading Zayn Levi Technologies…</span>
    </div>
  </div>
);

export default LoadingScreen;
