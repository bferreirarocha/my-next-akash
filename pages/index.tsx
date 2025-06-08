import { fetchTor } from "@/lib/fetchTor";
import { Geist, Geist_Mono } from "next/font/google";


export default function Home({message, ip }: { message:string, ip: string }) {
  return (
    <div>
      <h1>Message SSR:</h1> 
      <pre>{message}</pre>
   <br />
      <h4>IP pubblico visto da fetch SSR:</h4>
      <pre>{ip}</pre>
    </div>
  );
}

export async function getServerSideProps() {
  const host = process.env.WEB3_API_HOST || "https://my-vercel-api-4cc60tgbu-brunos-projects-0db78d3f.vercel.app";
  const url = `${host}/api/hello`;

  console.log("🔍 Chiamata fetch a:", url);

  try {
    const res = await fetchTor(url);
    console.log("📡 Status response:", res.status);

    const text = await res.text();
    console.log("📄 Risposta testuale:\n", text);

    const data = JSON.parse(text);

    return {
      props: {
        message: data.message,
        ip: data.ip,
      },
    };
  } catch (error) {
    console.error("❌ Errore durante il fetch:", error);
    return {
      props: {
        message: "Errore nella risposta API",
        ip: null,
      },
    };
  }
}


