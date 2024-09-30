"use server"
import Homepage from "@/app/home/_home"
export default async function Home() {
  const ambildatax = async () => {
    const url = process.env.URLDATA;
    try {
      const response = await fetch(url, { cache: 'no-store' });
      if (!response.ok) {
        throw new Error('Failed to fetch');
      }
      const data = await response.json({ revalidated: true });
      return data;
    } catch (error) {
      console.error("Error fetching packages:", error);
      return;
    }
  };

  const dataq = await ambildatax();
  console.log(dataq);
  return (
    <div>
      <Homepage data={dataq} />
    </div>
  )
}