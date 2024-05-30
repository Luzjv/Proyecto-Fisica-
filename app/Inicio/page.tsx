import React from 'react';
import Head from 'next/head';

export default function Inicio() {
  return (
    <div>
      <Head>
        <title>Calculadora de Caída Libre</title>
        <meta name="description" content="Calculadora y Pasos de Caída Libre" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="welcome-section bg-gray-100 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-center mb-4">Bienvenido a la Calculadora de Caída Libre</h1>
            <p className="text-lg text-center mb-6">Esta herramienta te ayudará a calcular diferentes aspectos de la caída libre.</p>
            <a
                href="/Calculadora"
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600"
              >
                Ir al Inicio
              </a> <img src="/Fisica.jpg" alt="Falling Person" className="mx-auto "style={{ width: '350px', height: '350px' }} />
          </div>
        </section>

        +
      </main>

      
    </div>
  );
}
