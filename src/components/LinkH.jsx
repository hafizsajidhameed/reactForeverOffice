export function LinkH() {
  return (
    <a
      href="#"
      className="group block max-w-xs mx-auto bg-white shadow-lg rounded-lg p-6 ring-1 ring-slate-900/5 space-y-3 hover:bg-sky-500 hover:ring-sky-500 mb-5"
    >
      <div className="flex items-center space-x-3">
        <img
          src="https://uxwing.com/wp-content/themes/uxwing/download/file-and-folder-type/file-new-icon.png"
          alt=""
          className="h-6 w-6 group-hover:filter group-hover:invert"
        />
        <h3 className="text-slate-900 group-hover:text-white text-sm font-semibold">
          New Project
        </h3>
      </div>
      <p className="text-slate-500 group-hover:text-white text-sm">
        Create a new project from a variety of starting templates.
      </p>
    </a>
  );
}
