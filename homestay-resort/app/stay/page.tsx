export default function Stay() {
  const rooms = [
    { name: 'Mountain Suite', price: '₹12,000' },
    { name: 'Garden Villa', price: '₹15,000' },
  ];
  return (
    <div className="pt-32 pb-20 px-12 max-w-7xl mx-auto">
      <h1 className="text-6xl font-bold mb-16">Our Accommodation</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {rooms.map(room => (
          <div key={room.name} className="border border-white/10 rounded-3xl p-6 group cursor-pointer">
            <div className="h-80 bg-zinc-800 rounded-2xl mb-6 overflow-hidden">
              <div className="w-full h-full bg-zinc-700 transition-transform duration-500 group-hover:scale-110" />
            </div>
            <h2 className="text-3xl font-bold mb-2">{room.name}</h2>
            <p className="text-zinc-400 mb-6">Experience comfort defined by panoramic views and curated design.</p>
            <div className="flex justify-between items-center">
              <span className="font-bold text-2xl">{room.price} / night</span>
              <button className="px-6 py-2 border border-white/20 rounded-full hover:bg-white hover:text-black">View Room</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
