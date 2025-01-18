export function FileIn() {
    return (
        <form action="" className="flex items-center space-x-6">
            <div className="shrink-0">
                <img src="https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQCS-WeAiO9jmhTcSXWPq92PrqlCThjEANfUMpOTO6FEb5pklh2iCkxCawIHng5iZk_hNNFix6dwm03vkI" alt="" className="h-16 w-16 rounded-full"/>
            </div>
            <label htmlFor="" className="block">
                <span className="sr-only">Choose profile photo</span>
                <input type="file" className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100" />
            </label>
        </form>
    )
}