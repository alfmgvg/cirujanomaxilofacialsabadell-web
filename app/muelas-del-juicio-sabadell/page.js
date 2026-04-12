export default function Page() {
  return (
    <main className="min-h-screen bg-white text-cyan-900 px-6 py-16">
      <div className="mx-auto max-w-4xl">

        <h1 className="text-4xl font-bold">
          Extracción de muelas del juicio en Sabadell
        </h1>

        <p className="mt-6 text-lg text-slate-700">
          La extracción de muelas del juicio o cordales es uno de los procedimientos más
          frecuentes en cirugía oral y maxilofacial. En nuestra consulta en Sabadell,
          ubicada en el Hospital Quirónsalud del Vallès, tratamos casos simples y
          complejos con un enfoque seguro y personalizado.
        </p>

        <div className="mt-8 flex gap-4 flex-wrap">
          <a
            href="https://www.quironsalud.com/valles/es/cita-medica#r!/n!/29?dir=next"
            className="bg-cyan-600 text-white px-6 py-3 rounded-2xl font-semibold"
          >
            Pedir cita
          </a>

          <a
            href="tel:+34679176144"
            className="border px-6 py-3 rounded-2xl font-semibold"
          >
            Llamar ahora
          </a>
        </div>

        {/* SINTOMAS */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold">
            ¿Cuándo hay que quitar las muelas del juicio?
          </h2>

          <p className="mt-4 text-slate-700">
            Las muelas del juicio pueden provocar problemas cuando no tienen espacio para
            salir correctamente o quedan retenidas dentro del hueso. En estos casos es
            frecuente que aparezcan síntomas como:
          </p>

          <ul className="mt-4 space-y-2 text-slate-700">
            <li>• Dolor en la zona posterior de la boca</li>
            <li>• Inflamación de la encía</li>
            <li>• Infecciones repetidas</li>
            <li>• Dificultad para abrir la boca</li>
            <li>• Caries en el diente adyacente</li>
          </ul>
        </section>

        {/* TIPOS */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold">
            Tipos de muelas del juicio
          </h2>

          <p className="mt-4 text-slate-700">
            No todas las muelas del juicio son iguales. El tratamiento depende de su
            posición:
          </p>

          <ul className="mt-4 space-y-2 text-slate-700">
            <li>• Cordales erupcionados (han salido completamente)</li>
            <li>• Cordales semiincluidos (parcialmente cubiertos)</li>
            <li>• Cordales incluidos (dentro del hueso)</li>
          </ul>

          <p className="mt-4 text-slate-700">
            En casos complejos utilizamos TAC dental para planificar la cirugía con
            precisión.
          </p>
        </section>

        {/* PROCEDIMIENTO */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold">
            ¿Cómo es la extracción?
          </h2>

          <p className="mt-4 text-slate-700">
            La intervención se realiza con anestesia local y, en algunos casos, con
            sedación. El procedimiento suele durar entre 20 y 45 minutos dependiendo de la
            complejidad.
          </p>

          <p className="mt-4 text-slate-700">
            Nuestro objetivo es realizar una cirugía lo más mínimamente invasiva posible
            para facilitar una recuperación rápida.
          </p>
        </section>

        {/* RECUPERACION */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold">
            Recuperación tras la cirugía
          </h2>

          <p className="mt-4 text-slate-700">
            La recuperación suele ser rápida. Durante los primeros días puede aparecer
            inflamación o molestias leves que se controlan con medicación.
          </p>

          <ul className="mt-4 space-y-2 text-slate-700">
            <li>• Inflamación durante 48-72h</li>
            <li>• Vida normal en pocos días</li>
            <li>• Control en consulta si es necesario</li>
          </ul>
        </section>

        {/* CTA FINAL */}
        <section className="mt-16 bg-cyan-50 p-8 rounded-3xl">
          <h2 className="text-2xl font-bold">
            ¿Te duele una muela del juicio?
          </h2>

          <p className="mt-4 text-slate-700">
            Si tienes dolor o sospechas que una muela del juicio te está dando problemas,
            podemos valorar tu caso en nuestra consulta en Sabadell.
          </p>

          <div className="mt-6 flex gap-4 flex-wrap">
            <a
              href="https://www.quironsalud.com/valles/es/cita-medica#r!/n!/29?dir=next"
              className="bg-cyan-600 text-white px-6 py-3 rounded-2xl font-semibold"
            >
              Pedir cita
            </a>

            <a
              href="https://wa.me/34679176144"
              className="border px-6 py-3 rounded-2xl font-semibold"
            >
              WhatsApp
            </a>
          </div>
        </section>

      </div>
    </main>
  );
}
