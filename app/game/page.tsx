"use client";
import React, {useEffect, useState } from "react";
import { motion } from "framer-motion";
import {useOpcionesStore} from '../store/opcionesStore'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { shallow } from 'zustand/shallow'


export default function Page() {

  const { posibilidades } = useOpcionesStore((state) => ({
    posibilidades: state.posibilidades,
  }), shallow)

  const {updateOpcion} = useOpcionesStore()

  const bienvendia = () => mensaje();
  useEffect(() => {
    bienvendia();
  }, [])

  const mensaje = () => {
      toast('Bienvenido al juego🤖', {
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
  
  const notifyPapel = () => toast("HUMANO - 📜  Haz Elegido Papel");
  const notifyTijera = () => toast("HUMANO - ✂️  Haz Elegido Tijera");
  const notifyPiedra = () => toast("HUMANO - ✊  Haz Elegido Piedra");

  
  const handleClickPapel = () => {
    updateOpcion("papel")
  notifyPapel();
  }
  
  const handleClickPiedra = () => {
    updateOpcion("piedra")  
    notifyPiedra(); 
  }
  
  const handleClickTijera = () => {
  updateOpcion("tijera")  
  notifyTijera();
}

  return (
    <div className="flex flex-col justify-center items-center">
      <motion.svg
        width={304}
        height={270}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.45 }}
        className={"focus:outline-none "}
      >
        <path
          opacity={0.2}
          d="M150.5 218 243 64H58l92.5 154Z"
          stroke="#000"
          strokeWidth={10}
        />
        {/* //azul */}
        <path
          d="M53.189 109.63c29.375 0 53.189-24.541 53.189-54.815C106.378 24.542 82.564 0 53.189 0S0 24.541 0 54.815c0 30.273 23.814 54.815 53.189 54.815Z"
          fill="#2745C0"
          onClick={handleClickPapel}
        />
        {/* //azul marco */}
        <path
          d="M53.189 104.77c29.375 0 53.189-23.454 53.189-52.385C106.378 23.454 82.564 0 53.189 0S0 23.454 0 52.385c0 28.931 23.814 52.385 53.189 52.385Z"
          fill="url(#a)"
          className={"marco"}
          onClick={handleClickPapel}
        />
        {/* //azul fondo */}
        <path
          d="M53.19 94.509c22.55 0 40.831-18.376 40.831-41.044 0-22.668-18.28-41.044-40.832-41.044-22.55 0-40.832 18.376-40.832 41.044 0 22.668 18.282 41.044 40.832 41.044Z"
          fill="#E1E4ED"
          className=" hover:fill-amber-300"
          onClick={handleClickPapel}
        />
        {/* //azul objeto */}
        <path
          d="M69.055 42.838a2.125 2.125 0 0 0-.905-.146c-.416.03-.755.201-.955.481-1.176 1.666-2.14 4.81-2.918 7.337-.358 1.169-.837 2.733-1.184 3.475-.362-2.08.047-9.697.206-12.63l.002-.047c.11-2.038.125-2.396.1-2.553-.174-1.118-.618-1.852-1.319-2.18-.708-.333-1.629-.186-2.62.417-.497.303-.635 1.345-1.06 6.067l-.002.02c-.236 2.595-.776 8.568-1.441 9.563-.75-1.392-1.785-9.3-2.23-12.722-.313-2.397-.495-3.774-.617-4.19-.257-.87-1.343-1.611-2.418-1.653-.895-.044-1.629.415-1.98 1.214-.654.736-.422 3.179.303 8.964.343 2.754 1.055 8.441.607 9.08-.893-.099-2.427-3.661-4.559-10.592-.597-1.942-.782-2.525-.966-2.78-.362-.891-1.593-1.578-2.696-1.5a2.304 2.304 0 0 0-.277.036c-.578.116-1.896.653-1.615 3.13.778 3.435 1.623 5.957 2.444 8.405l.017.05c.49 1.465.954 2.85 1.386 4.388 1.017 3.63.622 5.882.617 5.907-.035.232-.105.374-.212.423a.405.405 0 0 1-.142.033c-.323.023-.806-.193-1.056-.333-.567-1.098-3.4-6.33-5.966-7.055l-.091-.026-.094.008c-.942.09-1.633.45-2.056 1.068-.67.978-.393 2.224-.325 2.474l.038.09c.02.037 2.079 3.825 2.397 5.587.274 1.511 1.695 3.148 2.837 4.464l.047.054c.373.43.696.802.949 1.146 3.316 3.492 8.557 6.428 8.6 6.452.654.487 1.018.958 1.056 1.363a.595.595 0 0 1-.117.43l-.114.12.726.711 13.832-.98.59-2.73c1.823-7.705 1.442-14.275 1.436-14.319.007-.242.517-2.58.93-4.468l.01-.048c.82-3.763 1.838-8.444 2.034-10.225.085-.761-.398-1.461-1.23-1.78Z"
          fill="#3C4262"
          className=" objeto"
          onClick={handleClickPapel}
        />
        {/* amarillo */}
        <path
          d="M249.686 109.63c29.65 0 53.686-24.541 53.686-54.815C303.372 24.542 279.336 0 249.686 0S196 24.541 196 54.815c0 30.273 24.036 54.815 53.686 54.815Z"
          fill="#C76C1D"
          onClick={handleClickTijera}

        />
        {/* //amarillo marco */}
        <path
          d="M249.686 104.77c29.65 0 53.686-23.454 53.686-52.385C303.372 23.454 279.336 0 249.686 0S196 23.454 196 52.385c0 28.931 24.036 52.385 53.686 52.385Z"
          fill="url(#b)"
          className="marco hover:-translate-x-[0.15rem] hover:-translate-y-[0.001rem]"
          onClick={handleClickTijera}
        />
        {/* //amarillo fondo */}
        <path
          d="M249.687 94.509c22.762 0 41.214-18.376 41.214-41.044 0-22.668-18.452-41.044-41.214-41.044-22.762 0-41.214 18.376-41.214 41.044 0 22.668 18.452 41.044 41.214 41.044Z"
          fill="#E1E4ED"
          className="hover:fill-amber-300"
          onClick={handleClickTijera}
        />
        {/* //amarillo objeto */}
        <path
          d="m238.927 53.113 4.451-6.234c-1.85-.307-5.248-.375-8.031 2.397-4.388 4.37-6.164 13.81-6.535 16.093l11.15 11.105c2.008-.17 10.897-1.353 19.461-9.88.09-.185 2.177-1.72.471-3.419-.814-.81-2.162-.796-2.993.033a1.055 1.055 0 0 1-1.498.015 1.041 1.041 0 0 1 .015-1.49l3.026-3.014c1.538-1.532.09-4.116-2.057-3.495l-2.477 2.112a1.067 1.067 0 0 1-1.498-.103c-.384-.443-.301-1.114.136-1.492 8.654-7.562 7.39-6.65 12.958-11.848 2.08-1.725-.537-4.776-2.587-3.03l-13.468 12.064a1.052 1.052 0 0 1-1.379-.015c-.445-.383-.454-.934-.163-1.37l9.395-14.545c1.373-1.852-1.33-3.91-2.776-2.042l-13.891 19.347a1.06 1.06 0 0 1-.682.434 1.048 1.048 0 0 1-.788-.179 1.01 1.01 0 0 1-.426-.671 1.024 1.024 0 0 1 .186-.773Z"
          fill="#3C4262"
          className="objeto hover:-translate-x-[1.5rem] hover:-translate-y-[0.5rem]"
          onClick={handleClickTijera}

        />
          {/* rojo */}
        <path
          d="M151.686 269.63c29.65 0 53.686-24.542 53.686-54.815 0-30.273-24.036-54.815-53.686-54.815S98 184.542 98 214.815c0 30.273 24.036 54.815 53.686 54.815Z"
          fill="#9C1734"
          onClick={handleClickPiedra}
        />
        {/* //rojo marco */}
        <path
          d="M151.686 264.77c29.65 0 53.686-23.454 53.686-52.385 0-28.931-24.036-52.385-53.686-52.385S98 183.454 98 212.385c0 28.931 24.036 52.385 53.686 52.385Z"
          fill="url(#c)"
          className="marco hover:-translate-x-[0.07rem] hover:-translate-y-[0.07rem]"
          onClick={handleClickPiedra}

        />
        {/* //rojo fondo */}
        <path
          d="M151.687 254.509c22.762 0 41.214-18.376 41.214-41.044 0-22.668-18.452-41.044-41.214-41.044-22.762 0-41.214 18.376-41.214 41.044 0 22.668 18.452 41.044 41.214 41.044Z"
          fill="#E1E4ED"
          className="hover:fill-amber-300"
          onClick={handleClickPiedra}
        />
        {/* // rojo objeto */}
        <path
          d="M167.651 207.571c-.475-5.997-7.208-5.385-7.208-5.385-2.842-5.01-7.281-1.381-7.281-1.381-3.41-4.911-7.687-.36-7.687-.36-7.373-.796-7.087 5.234-7.087 5.234-.173 1.917 1.04 7.847 1.04 7.847-1.094-3.418-3.467-.581-3.467-.581-2.917 4.502-.721 6.967-.721 6.967 3.947 4.626 12.357 10.18 12.357 10.18 3.046 1.745 1.757 3.3 1.757 3.3l18.42-3.044.424-3.494c2.8-8.472-.547-19.284-.547-19.284v.001Z"
          fill="#3C4262"
          className="objeto hover:-translate-x-[1rem] hover:-translate-y-[1.5rem]"
          onClick={handleClickPiedra}
        />
        <defs>
          <linearGradient
            id="a"
            x1={5318.9}
            y1={0}
            x2={5318.9}
            y2={10477}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#5571F3" />
            <stop offset={1} stopColor="#fff" stopOpacity={0} />
          </linearGradient>
          <linearGradient
            id="b"
            x1={5564.6}
            y1={0}
            x2={5564.6}
            y2={10477}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#ECA822" />
            <stop offset={1} stopColor="#fff" stopOpacity={0} />
          </linearGradient>
          <linearGradient
            id="c"
            x1={5466.6}
            y1={160}
            x2={5466.6}
            y2={10637}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#DD3051" />
            <stop offset={1} stopColor="#fff" stopOpacity={0} />
          </linearGradient>
        </defs>
        
      </motion.svg>
      <ToastContainer
position="bottom-right"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
      />

    </div>

  );
}