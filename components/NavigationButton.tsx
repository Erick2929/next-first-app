"use client";

import { useRouter } from "next/navigation";

export default function NavigationButton() {
  const router = useRouter();

  return (
    <button type='button' onClick={() => router.push("/perfil")}>
      Ir a perfil
    </button>
  );
}
