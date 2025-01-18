export function Profile() {
  return (
    <div
      className="p-8 max-w-sm mx-auto space-y-2 bg-purple-50 rounded-xl shadow-xl
        sm:py-4 sm:flex sm:items-center sm:space-y-0 gap-x-6"
    >
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf_MeKGLOEz7Jdxpmm9ovFkA1IBC2o28mkHQ&s"
        alt=""
        className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
      />
      <div className="text-center space-y-2 sm:text-left">
        <div className="space-y-0.5">
          <p className="text-lg text-black font-semibold">Erin Lindford</p>
          <p className="text-slate-500 font-medium">Product Engineer</p>
        </div>

        <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</button>
      </div>
    </div>
  );
}
