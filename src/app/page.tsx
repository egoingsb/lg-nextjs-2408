import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1><a href="/">WEB</a></h1>
      <ol>
        <li><a href="/read/1">html</a></li>
        <li><a href="/read/2">css</a></li>
      </ol>
      <h2>Welcome</h2>
      Hello, Next
      <ul>
        <li><a href="/create">create</a></li>
      </ul>
    </div>
  );
}
