type ReadPropsType = {
    params: {
        id: string;
    };
};

type TopicType = {
    id: string;
    title: string;
    body: string;
};

async function fetchTopic(id: string): Promise<TopicType> {
    const res = await fetch(`http://localhost:9999/topics/${id}`);
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}

export default async function Read({ params }: ReadPropsType) {
    const topic = await fetchTopic(params.id);

    return (
        <>
            <h2>{topic.title}</h2>
            <p>{topic.body}</p>
        </>
    );
}