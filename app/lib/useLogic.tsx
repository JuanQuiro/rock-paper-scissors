'use client'
import React, { useEffect, useState } from 'react'
import { shallow } from 'zustand/shallow'
import { useOpcionesStore } from '../store/opcionesStore'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function generarNumeroAleatorio(): number {
  return Math.floor(Math.random() * 3);
}

function obtenerOpcionAleatoria(): Opcion {
  const numeroAleatorio = generarNumeroAleatorio();
  return numeroAleatorio === 0
  ? "piedra"
  : numeroAleatorio === 1
  ? "papel"
  : "tijera";
}

type Estado = "piedra" | "papel" | "tijera" | "" | string;

function compararEstados(estado1: Estado, estado2: Estado): "empate" | "Gana Humano" | "Gana Maquina" {
  if (estado1 === "" || estado2 === "") {
    return "empate";
  } else if (estado1 === estado2) {
    return "empate";
  } else if (
    (estado1 === "piedra" && estado2 === "tijera") ||
    (estado1 === "papel" && estado2 === "piedra") ||
    (estado1 === "tijera" && estado2 === "papel")
  ) {
    return "Gana Humano";
  } else {
    return "Gana Maquina";
  }
}

type Opcion = "piedra" | "papel" | "tijera" | string;

const mensajeRobotPiedra = () => {
    toast('🤖 - He jugado piedra ✊', {
    position: "bottom-left",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
});
};

const mensajeRobotPapel = () => {
    toast('🤖 - He jugado tijera✂️', {
    position: "bottom-left",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
});
};

const mensajeRobotTijera = () => {
    toast('🤖 - He jugado papel 📜', {
    position: "bottom-left",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
});
};

const mensajeFinalWinHuman = () => {
    toast('Gana el ser Humano', {
    position: "bottom-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
});
};

const mensajeFinalWinMaquine = () => {
    toast('Gana la maquina', {
    position: "bottom-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
});
};

const mensajeFinalEmpate = () => {
    toast('Empate!!', {
    position: "bottom-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
});
};



export default function Home() {
  const [opcion, setOpcion] = useState<Opcion>("papel");
  const [result, setResult] = useState("")
  const [primeraVez, setPrimeravez] = useState(false)
  const [primeraVezFinal, setPrimeravezFinal] = useState(false)
  const [temp, setTemp] = useState(false)
  

  const { posibilidades } = useOpcionesStore((state) => ({
    posibilidades: state.posibilidades,
  }), shallow)

  function generarOpcionAleatoria() {
    const opcionAleatoria = obtenerOpcionAleatoria();
    setOpcion(opcionAleatoria);
  }

  useEffect(() => {
    if (temp) {
      generarOpcionAleatoria()
      setResult(compararEstados(posibilidades, opcion))
      setTemp(false)
    }
    else {
      setTemp(true)
    }
  }, [posibilidades])


  useEffect(() => {
    if (primeraVez) {
      
      if (opcion === 'tijera') {
        mensajeRobotTijera();
      }
      if (opcion === 'piedra') {
        mensajeRobotPiedra();
      }
      if (opcion === 'papel') {
        mensajeRobotPapel();
      }
    }
    else {
      setPrimeravez(true)
    }
    
  }, [posibilidades,opcion])

  // useEffect(() => {
  //   if (primeraVezFinal) {
      
  //     if (result === "empate") {
  //       mensajeFinalEmpate()
  //     }
  //     if (result === "Gana Humano") {
  //       mensajeFinalWinHuman()
  //     }
  //     if (result === "Gana Maquina") {
  //       mensajeFinalWinMaquine()
  //     }
  //   }
  //   else {
  //     setPrimeravezFinal(true)
  //   }
    
  // }, [posibilidades])
  

  return (
    <div>
    </div>
  );
}

