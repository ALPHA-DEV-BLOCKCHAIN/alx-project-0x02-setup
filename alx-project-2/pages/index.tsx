// import Header from "../components/layout/Header";
// import { User } from "../interfaces";

// export default function Home() {
//   const user: User = { id: 1, name: "Pascal" };

//   return (
//     <>
//       <Header />
//       <main className="flex min-h-screen flex-col items-center justify-center p-8">
//         <h1 className="text-4xl font-bold text-gray-800">
//           Welcome to my Next.js + Tailwind Project 
//         </h1>
//         <p className="mt-4 text-lg text-gray-600">
//           Hello, {user.name}! This is the starting point of <strong>alx-project-2</strong>.
//         </p>
//       </main>
//     </>
//   );
// }

export default function Home() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold">Welcome to ALX Project 2 🚀</h1>
      <p className="mt-4">This is the index page.</p>
    </div>
  );
}

