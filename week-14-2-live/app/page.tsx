import client from "@/db"
import axios from "axios";

// async function getUserData() {
//   await new Promise((r)=>setTimeout(r,1000));
//   const response = await axios.get("http://localhost:3000/api/user")
//   return response.data;
// }

// const client = new prisma();

async function getUserData() {
  const user = await client.user.findFirst();
  return {
    email: user?.username,
    name: "Prince"
  }
}


export default async function Home() {
  const userData = await getUserData();
  return (
    <div>
      <div className="flex flex-col justify-center h-screen">
        <div className="flex justify-center">
            <div className="border p-8 rounded">
                <div>
                    Name: {userData?.name}
                </div>
                
                {userData?.email}
            </div>
        </div>
    </div>
    </div>
  );
}
