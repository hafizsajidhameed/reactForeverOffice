export function Radio() {
    return (
        <fieldset>
            <legend>
                Published status
            </legend>
            <input type="radio" id="draft" className="peer/draft" name="status" checked />
            <label htmlFor="draft" className="peer-checked/draft:text-sky-500">Draft</label>
            <input type="radio" id="published" className="peer/published" name="status" />
            <label htmlFor="draft" className="peer-checked/published:text-sky-500">Published</label>

            <div className="hidden peer-checked/draft:block">Draftes are only visible to the administrators.</div>
            <div className="hidden pee-checked/published:block">Your post will be publicly visible to your site.</div>
        </fieldset>
    )
}