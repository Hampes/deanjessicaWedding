import CountdownTimer from '@/components/CountdownTimer';
const WeddingCountdown = () => {
  const weddingDate = new Date('2025-09-08T00:00:00');

  return (
    <div className="w-10/12 border-t-[1px] border-gray-300">
      <div className="max-w-4xl mx-auto px-4 py-12 ">
        <CountdownTimer targetDate={weddingDate} />
      </div>
    </div>
  );
};

export default WeddingCountdown;
