'use client'
import React, { useState, ChangeEvent } from 'react';
import Head from 'next/head';

export default function Calculadora() {
  const [altura, setAltura] = useState<string>('');
  const [tiempo, setTiempo] = useState<string>('');
  const [velocidad, setVelocidad] = useState<string>('');
  const [gravedad, setGravedad] = useState<string>('');
  const [resultado, setResultado] = useState<string>('');
  const [opcion, setOpcion] = useState<string>(''); // Variable para almacenar la opción seleccionada

  const handleAlturaChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAltura(event.target.value);
  };

  const handleTiempoChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTiempo(event.target.value);
  };

  const handleVelocidadChange = (event: ChangeEvent<HTMLInputElement>) => {
    setVelocidad(event.target.value);
  };

  const handleGravedadChange = (event: ChangeEvent<HTMLInputElement>) => {
    setGravedad(event.target.value);
  };

  const handleOpcionChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = event.target.value;
    setOpcion(selectedOption);

    // Limpiamos los campos cuando se cambia la opción
    setAltura('');
    setTiempo('');
    setVelocidad('');
    setResultado('');
  };

  const calcular = () => {
    const g = parseFloat(gravedad) || 9.8;
    const h = parseFloat(altura) ||0;
    const t = parseFloat(tiempo)||0;
    const v = parseFloat(velocidad)||0;
    let calculo: string = '';

    if (opcion === 'altura') {
      if (!isNaN(t) && !isNaN(v)) {
        const alturaMaxima = (v * t) / 2;
        calculo = `Altura máxima alcanzada: ${alturaMaxima.toFixed(2)} m`;
      } else {
        calculo = 'Por favor, ingresa tiempo y velocidad.';
      }
    } else if (opcion === 'tiempo') {
      if (!isNaN(h) && !isNaN(v)) {
        const tiempoCaida = v / g;
        calculo = `Tiempo de caída: ${tiempoCaida.toFixed(2)} s`;
      } else {
        calculo = 'Por favor, ingresa altura y velocidad.';
      }
    } else if (opcion === 'velocidad') {
      if (!isNaN(h) && !isNaN(t)) {
        const velocidadFinal = g * t;
        calculo = `Velocidad final: ${velocidadFinal.toFixed(2)} m/s`;
      } else {
        calculo = 'Por favor, ingresa altura y tiempo.';
      }
    } else {
      calculo = 'Por favor, selecciona una opción válida.';
    }

    setResultado(calculo);
  };
  const mensajeOpcion = opcion === 'altura' ? 'Ingresa el tiempo,gravedad y la velocidad.' : opcion === 'tiempo' ? 'Ingresa la altura y la velocidad.' : opcion === 'velocidad' ? 'Ingresa la altura, el tiempo y gravedad.' : '';
  return (
    <div className="container w:1/2 mx-auto px-4 py-8">
      <Head>
        <title>Calculadora y Pasos de Caída Libre</title>
      </Head>
      <h1 className="text-3xl font-bold text-center mb-5">Calculadora y Pasos de Caída Libre</h1>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col items-start gap-2">
          <label htmlFor="opcion" className="text-gray-700">Selecciona qué deseas calcular:</label>
          <select
            id="opcion"
            className="w-full border border-gray-300 rounded-md px-2 py-1"
            value={opcion}
            onChange={handleOpcionChange}
          >
            <option value="">Selecciona una opción</option>
            <option value="altura" disabled={opcion === 'altura'}>Altura Máxima</option>
            <option value="tiempo" disabled={opcion === 'tiempo'}>Tiempo de Caída</option>
            <option value="velocidad" disabled={opcion === 'velocidad'}>Velocidad Final</option>
          </select>
          <div className="mt-4 text-gray-700">{mensajeOpcion}</div>

        </div>

        {opcion && (
          <>
            <div className="flex flex-col items-start gap-2">
              <label htmlFor="altura" className="text-gray-700">Altura (m):</label>
              <input
                type="number"
                id="altura"
                className="w-full border border-gray-300 rounded-md px-2 py-1"
                value={altura}
                onChange={handleAlturaChange}
              />
            </div>
            <div className="flex flex-col items-start gap-2">
              <label htmlFor="tiempo" className="text-gray-700">Tiempo (s):</label>
              <input
                type="number"
                id="tiempo"
                className="w-full border border-gray-300 rounded-md px-2 py-1"
                value={tiempo}
                onChange={handleTiempoChange}
              />
            </div>
            <div className="flex flex-col items-start gap-2">
              <label htmlFor="velocidad" className="text-gray-700">Velocidad (m/s):</label>
              <input
                type="number"
                id="velocidad"
                className="w-full border border-gray-300 rounded-md px-2 py-1"
                value={velocidad}
                onChange={handleVelocidadChange}
              />
            </div>
            <div className="flex flex-col items-start gap-2">
              <label htmlFor="gravedad" className="text-gray-700">Gravedad (m/s²):</label>
              <input
                type="number"
                id="gravedad"
                className="w-full border border-gray-300 rounded-md px-2 py-1"
                value={gravedad}
                onChange={handleGravedadChange}
              />
            </div>

            <button
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 mt-4"
              onClick={calcular}
            >
              Calcular
            </button>

            <div className="mt-4 text-gray-700">{resultado}</div>
          </>
        )}
      </div>
    </div>
  );
}