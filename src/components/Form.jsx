import { useState } from "react";
export function Form() {

  const [showMessage, setShowMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 1000);
  }
  return (
    <form
      onSubmit={handleSubmit}
      action=""
      className="m-20 max-w-lg mx-auto space-y-2 border border-slate-200 rounded-xl shadow-xl p-8 last-child:text-center"

    >
      <label htmlFor="" className="block mt-8">
        <span>User Name</span>
        <input
          type="text"
          className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                disabled:bg-slate-50 disabled:text-slate-500 disabled:boreder-slate-200 disabled:shadow-none
                invalid:border-pink-500 invalid:text-pink-600
                focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
        />
      </label>
      <label htmlFor="" className="block mb-4">
        <span>Email</span>
        <input
          type="email"
          className="peer mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                disabled:bg-slate-50 disabled:text-slate-500 disabled:boreder-slate-200 disabled:shadow-none
                invalid:border-pink-500 invalid:text-pink-600
                focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
        />
        <p className=" invisible peer-invalid:visible text-pink-600">Please provide a valid email address.</p>
      </label>
      <label htmlFor="" className="block mb-4">
        <span>Password</span>
        <input
          type="text"
          className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                disabled:bg-slate-50 disabled:text-slate-500 disabled:boreder-slate-200 disabled:shadow-none
                invalid:border-pink-500 invalid:text-pink-600
                focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
        />
      </label>
      <div className="text-center">
        <button className="py-2 px-10 bg-blue-100 text-blue-900 text-md font-semibold hover:bg-blue-900 hover:text-blue-100 rounded-lg my-4" type="submit">
          Save
        </button>
        {showMessage && <div className="w-sm h-sm z-50 bg-green-100 rounded-lg text-green-900 text-center font-semibold p-6">
          <h1>Form Submitted</h1>
        </div>}
      </div>
    </form>
  );
}
