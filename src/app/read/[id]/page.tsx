type ReadPropsType = {
    params: {
        id: string;
    }
}
export default function Read(props:ReadPropsType){
    return <>
        <h2>Read {props.params.id}</h2>
    </>
}