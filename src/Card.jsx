export const Card = () => {
  return (
    <div
      className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden
    md:max-w-2xl mb-10"
    >
      <div className="md:flex">
        <div className="md:shrink-0">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvahGZLHMsfq8aYbbkxdBN_4wGfNftpgXb2xlDcMHNdG7g7nU1Txmtc2W6JgwNIvkqIWw&usqp=CAU"
            alt=""
            className="h-48 w-full object-cover md:h-full md:w-48"
          />
        </div>
        <div className="p-8">
          <div className="mt-2 uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            Bachi of the year
          </div>
          <a
            href="#"
            className="block mt-1 text-lg leading-right font-medium text-black hover:underline"
          >
            She can handle two at a time
          </a>
          <p className="mt-2 text-slate-500 ">
            Looking to take your team away on a retreat to enjoy awesome food
            and take in some sunshine? We have a list of places to do just that.
          </p>
        </div>
      </div>
    </div>
  );
};
