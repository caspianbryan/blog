import { createPost } from "@/actions/action";

const Form = () => {
    return (
        <form className="flex flex-col max-w-[400px] mx-auto gap-2 my-10" action={createPost}>
            <input
                className="border rouded px-3 h-10"
                type="text"
                placeholder="New post"
                name="title"
                required
            />
            <textarea
                name="body"
                placeholder="content"
                className="border rounded px-3 py-2"
                required
                rows={8}
            />
            <button className="px-5 rounded tex-white bg-blue-500 h-10" >
                Submit
            </button>
        </form>
    )
}

export default Form