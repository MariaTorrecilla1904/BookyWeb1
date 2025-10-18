"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/shared/ui/button";

export default function LandingPage() {
  const router = useRouter();

  return (
    <main className="flex flex-col min-h-screen items-center justify-center bg-gradient-to-b from-blue-50 to-blue-100 text-center p-6">
      <h1 className="text-5xl font-bold text-blue-600 mb-4">📚 Booky</h1>
      <p className="text-lg text-gray-700 mb-8 max-w-md">
        Tu biblioteca digital. Gestiona tus libros, autores y lecturas fácilmente.
      </p>

      <div className="flex gap-4">
        <Button>Iniciar sesión</Button>
        <Button variant="secondary">Registrarse</Button>
      </div>
    </main>
  );
}
