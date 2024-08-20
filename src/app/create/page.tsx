'use client'

import { useRouter } from "next/navigation";

export default function Create(){
    const router = useRouter();
    // @ts-ignore
    const submitHandler = async (evt)=>{
        evt.preventDefault();
        const title = evt.target._title.value;
        const body = evt.target._body.value;
        const option = {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title, 
                body
            })
        }
        const resp = await fetch('http://localhost:9999/topics', option)
        const result = await resp.json();
        router.push(`/read/${result.id}`);
        router.refresh();
    }
    return <>
        <h2>Create</h2>
        <form onSubmit={submitHandler}>
            <p><input type="text" name="_title" placeholder="title" /></p>
            <p>
                <textarea name="_body" placeholder="body"></textarea>
            </p>
            <p>
                <input type="submit" value="Create" />
            </p>
        </form>
    </>
}