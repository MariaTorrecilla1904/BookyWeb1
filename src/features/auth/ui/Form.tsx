"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";

export function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Email: ${email}\nPassword: ${password}`);
  };

  return (
    <div className="w-full max-w-sm bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
      {/* Botón volver */}
      <button
        className="text-sm text-blue-600 hover:underline mb-4 flex items-center gap-1"
      >
        ← Volver al inicio
      </button>

      {/* Encabezado */}
      <div className="text-center mb-6">
        <div className="text-4xl mb-2">📚</div>
        <h2 className="text-2xl font-bold text-gray-800">Bienvenido a Booky</h2>
        <p className="text-sm text-gray-500">Inicia sesión para continuar</p>
      </div>

      {/* Formulario */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="text-right text-sm text-blue-600 hover:underline cursor-pointer">
          ¿Olvidaste tu contraseña?
        </div>

        <Button type="submit">Entrar</Button>
      </form>

      {/* Registro */}
      <div className="mt-6 text-center text-sm text-gray-500">
        ¿No tienes cuenta?{" "}
        <span className="text-blue-600 hover:underline cursor-pointer">
          Regístrate
        </span>
      </div>
    </div>
  );
}
