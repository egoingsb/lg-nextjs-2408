type ReadPropsType = {
    params: {
        id: string;
    }
}
export default function Read(props:ReadPropsType){
    return <div>
    <h1><a href="/">WEB</a></h1>
    <ol>
      <li><a href="/read/1">html</a></li>
      <li><a href="/read/2">css</a></li>
    </ol>
    <h2>Read {props.params.id}</h2>
    <ul>
      <li><a href="/create">create</a></li>
    </ul>
  </div>
}