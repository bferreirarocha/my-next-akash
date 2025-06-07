import { fetchTor } from "@/lib/fetchTor";
import { Geist, Geist_Mono } from "next/font/google";


export default function Home({ ip }: { ip: string }) {
  return (
    <div>
      <h1>IP pubblico visto da fetch SSR:</h1>
      <pre>{ip}</pre>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetchTor("https://checkip.amazonaws.com"); // IP checker

  const ip = await res.text();

  return {
    props: {
      ip,
    },
  };
}
