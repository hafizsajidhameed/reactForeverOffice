export function ChatBox() {
  return (
    <div className=" p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex itmes-center gap-x-4 mb-6">
      <div className="shrink-0">
        <img
          src="https://www.svgrepo.com/show/18823/chat.svg"
          alt=""
          className="size-12"
        />
      </div>
      <div>
        <div className="text-xl font-medium text-black">ChitChat</div>
        <p className="text-slate-500">you have a new message!</p>
      </div>
    </div>
  );
}
