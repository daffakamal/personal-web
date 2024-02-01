const ProgressBar = ({ progressPercentage }) => {
  return (
    <div className="fixed bottom-0 z-40 w-full h-1 bg-transparent">
      <div
        style={{ width: `${progressPercentage}%` }}
        className="bg-zinc-500 h-full rounded-r-full"
      ></div>
    </div>
  );
};

export default ProgressBar;