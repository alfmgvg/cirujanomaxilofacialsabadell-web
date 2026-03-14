const treatments = [
  {
    title: 'Muelas del juicio',
    text: 'Valoración y extracción de cordales incluidos, semiincluidos o complejos con un enfoque quirúrgico seguro y personalizado.',
  },
  {
    title: 'Implantes dentales',
    text: 'Tratamientos con implantes en casos sencillos y complejos, con planificación precisa para recuperar función y estética.',
  },
  {
    title: 'Cirugía oral compleja',
    text: 'Abordaje de quistes maxilares, dientes incluidos, infecciones y otras patologías de cirugía oral.',
  },
];

const doctors = [
  {
    name: 'Dr. Alfonso Mogedas Vegara (Jefe de Servicio)',
    img: '/doctors/mogedas.jpg',
    bio: 'Licenciado en Medicina y Cirugía por la UMH de Alicante. Especialista en Cirugía Oral y Maxilofacial vía Hospital Vall d’Hebron. Doctor en Medicina y Cirugía Cum Laude por la UAB y Fellow del European Board of Oral and Maxillofacial Surgery. Actualmente es adjunto del Servicio de Cirugía Oral y Maxilofacial del Hospital Parc Taulí y profesor colaborador de la UAB.',
  },
  {
    name: 'Dr. Nil Valentínes',
    img: '/doctors/valentines.jpg',
    bio: 'Cirujano especializado en cirugía oral y maxilofacial. Aquí se puede añadir una breve biografía profesional, formación y áreas de especial interés.',
  },
  {
    name: 'Dra. Paula Donate',
    img: '/doctors/donate.jpg',
    bio: 'Cirujana especializada en cirugía oral y maxilofacial. Aquí se puede añadir una breve biografía profesional, formación y áreas de especial interés.',
  },
  {
    name: 'Dr. Radek Lewko',
    img: '/doctors/lewko.jpg',
    bio: 'Cirujano especializado en cirugía oral y maxilofacial. Aquí se puede añadir una breve biografía profesional, formación y áreas de especial interés.',
  },
];

const nearbyCities = [
  'Sabadell',
  'Terrassa',
  'Sant Cugat del Vallès',
  'Rubí',
  'Cerdanyola del Vallès',
  'Barberà del Vallès',
  'Castellar del Vallès',
  'Sant Quirze del Vallès',
];

export default function Page() {
  return (
    <>
      <header className="w-full border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
          <div className="flex items-center gap-4">
            <img src="/logo-ocm.png" alt="Odontología Cirugía Maxilofacial" className="h-12 w-auto" />
            <div className="text-sm font-medium text-slate-600">Unidad de Cirugía Oral y Maxilofacial</div>
          </div>
          <div className="flex items-center gap-3">
            <img src="/logo-quiron-valles.png" alt="Hospital Quirónsalud del Vallès" className="h-10 w-auto" />
          </div>
        </div>
      </header>

      <main className="min-h-screen bg-white text-slate-900">
        <section className="border-b border-slate-200 bg-slate-50">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-2 lg:items-center lg:py-24">
            <div>
              <span className="inline-flex rounded-full border border-slate-300 px-4 py-1 text-sm font-medium text-slate-700">
                Cirugía Oral y Maxilofacial · Hospital Quirónsalud del Vallès
              </span>
              <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl">
                Especialistas en muelas del juicio, cirugía oral compleja e implantes dentales en Sabadell
              </h1>
              <p className="mt-5 text-lg leading-8 text-slate-700">
                Atendemos a pacientes de Sabadell y poblaciones cercanas que necesitan extracción de cordales incluidos,
                tratamiento de quistes maxilares e implantes dentales, tanto en casos sencillos como complejos.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://www.quironsalud.com/valles/es/cita-medica#r!/n!/29?dir=next"
                  className="rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
                >
                  Pedir cita
                </a>
                <a
                  href="tel:+34679176144"
                  className="rounded-2xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
                >
                  Llamar al 679 176 144
                </a>
                <a
                  href="https://wa.me/34679176144"
                  className="rounded-2xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
                >
                  WhatsApp
                </a>
              </div>
              <p className="mt-4 text-sm text-slate-500">
                También puedes escribirnos por WhatsApp al 679 176 144 para pedir información o solicitar cita.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:col-span-2">
                <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Tratamientos destacados</p>
                <ul className="mt-4 space-y-3 text-slate-700">
                  <li>• Extracción de muelas del juicio complejas</li>
                  <li>• Cordales incluidos y dientes retenidos</li>
                  <li>• Quistes maxilares y cirugía oral</li>
                  <li>• Implantes dentales unitarios y múltiples</li>
                  <li>• Rehabilitación de casos complejos</li>
                </ul>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-3xl font-bold">1ª planta</p>
                <p className="mt-2 text-slate-600">Ubicación de la consulta en el hospital</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-3xl font-bold">Sabadell</p>
                <p className="mt-2 text-slate-600">Fácil acceso para pacientes del Vallès</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight">¿A quién va dirigida esta página?</h2>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              A personas que buscan un cirujano maxilofacial en Sabadell o en el Vallès para resolver problemas como
              muelas del juicio retenidas, dolor e infección de cordales, quistes de los maxilares o colocación de implantes dentales.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {nearbyCities.map((city) => (
              <span key={city} className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700">
                {city}
              </span>
            ))}
          </div>
        </section>

        <section className="border-y border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight">Qué tratamos</h2>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                La página está enfocada a problemas frecuentes y con alta intención de búsqueda, pero transmitiendo también experiencia en cirugía oral compleja.
              </p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {treatments.map((item) => (
                <article key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-700">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Equipo de cirujanos maxilofaciales</h2>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                Equipo de cirugía oral y maxilofacial con experiencia en cirugía de cordales incluidos, implantes dentales y tratamiento de patología oral compleja.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {doctors.map((doctor) => (
                  <div key={doctor.name} className="rounded-3xl border border-slate-200 p-5 shadow-sm">
                    <img src={doctor.img} alt={doctor.name} className="mb-4 aspect-[4/3] w-full rounded-2xl object-cover" />
                    <h3 className="text-lg font-semibold">{doctor.name}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{doctor.bio}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <h2 className="text-3xl font-bold tracking-tight">Dónde estamos</h2>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                Hospital Quirónsalud del Vallès
                <br />
                Passeig Rubió i Ors, 23
                <br />
                08203 Sabadell, Barcelona
              </p>
              <div className="mt-6 flex aspect-video items-center justify-center rounded-2xl bg-slate-200 px-6 text-center text-sm text-slate-600">
                Aquí se puede incrustar un mapa de Google Maps o una imagen del acceso al hospital
              </div>
              <div className="mt-8 space-y-3 text-slate-700">
                <p><span className="font-semibold">Teléfono y WhatsApp:</span> 679 176 144</p>
                <p><span className="font-semibold">Consulta:</span> 1ª planta</p>
                <p>
                  <span className="font-semibold">Reserva online:</span>{' '}
                  <a href="https://www.quironsalud.com/valles/es/cita-medica#r!/n!/29?dir=next" className="underline">
                    Pedir cita en Quirónsalud
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight">Extracción de muelas del juicio en Sabadell</h2>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              Las muelas del juicio o cordales pueden provocar dolor, infecciones repetidas, inflamación de la encía o daño a los dientes vecinos.
              Nuestro equipo de cirugía oral y maxilofacial en Sabadell está especializado en la extracción de cordales incluidos o complejos.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              Valoramos cada caso con radiografías o TAC dental cuando es necesario para determinar la posición exacta del cordal y planificar la cirugía de forma precisa.
            </p>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight">Implantes dentales en Sabadell</h2>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                Los implantes dentales permiten sustituir dientes perdidos recuperando la función masticatoria y la estética.
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                También tratamos casos con pérdida de hueso, dientes retenidos o situaciones quirúrgicas complejas que requieren la valoración de un cirujano maxilofacial.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-bold tracking-tight">Preguntas frecuentes</h2>
          <div className="mt-8 max-w-3xl space-y-6 text-slate-700">
            <div>
              <h3 className="text-lg font-semibold">¿Cuándo es necesario quitar las muelas del juicio?</h3>
              <p className="mt-2">La extracción de las muelas del juicio suele recomendarse cuando provocan dolor, infecciones repetidas, inflamación de la encía, caries en el diente vecino o cuando permanecen retenidas dentro del hueso.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">¿Es dolorosa la extracción de una muela del juicio?</h3>
              <p className="mt-2">La intervención se realiza habitualmente con anestesia local y, en algunos casos, con sedación. Durante el procedimiento el paciente no siente dolor.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">¿Cuánto tiempo dura la recuperación?</h3>
              <p className="mt-2">La recuperación suele ser rápida. La mayoría de los pacientes pueden retomar sus actividades habituales en pocos días.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">¿Cuándo es recomendable colocar un implante dental?</h3>
              <p className="mt-2">Los implantes dentales están indicados cuando se ha perdido uno o varios dientes y se desea recuperar la función masticatoria y la estética.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">¿Cuánto tiempo dura un implante dental?</h3>
              <p className="mt-2">Con una correcta planificación quirúrgica y una buena higiene oral, los implantes dentales pueden mantenerse en buen estado durante muchos años.</p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-bold tracking-tight">Información ampliada sobre tratamientos</h2>
          <p className="mt-4 max-w-3xl text-lg text-slate-700">
            Para pacientes que desean conocer más detalles sobre los tratamientos más frecuentes de cirugía oral, hemos preparado páginas específicas con información ampliada.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <a href="/muelas-del-juicio-sabadell" className="block rounded-3xl border border-slate-200 p-6 transition hover:shadow-md">
              <h3 className="text-xl font-semibold">Extracción de muelas del juicio en Sabadell</h3>
              <p className="mt-3 text-slate-700">
                Información detallada sobre cordales incluidos, síntomas frecuentes, cuándo es recomendable la extracción y cómo es el proceso de recuperación.
              </p>
            </a>

            <a href="/implantes-dentales-sabadell" className="block rounded-3xl border border-slate-200 p-6 transition hover:shadow-md">
              <h3 className="text-xl font-semibold">Implantes dentales en Sabadell</h3>
              <p className="mt-3 text-slate-700">
                Explicación completa sobre el tratamiento con implantes dentales, planificación quirúrgica, casos complejos y resultados esperables.
              </p>
            </a>
          </div>
        </section>

        <section className="bg-slate-900 text-white">
          <div className="mx-auto max-w-6xl px-6 py-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight lg:text-4xl">
              ¿Tienes dolor por una muela del juicio o necesitas valorar implantes dentales?
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-300">
              Nuestro equipo de cirugía oral y maxilofacial en Sabadell puede valorar tu caso y orientarte sobre el tratamiento más adecuado.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="https://www.quironsalud.com/valles/es/cita-medica#r!/n!/29?dir=next"
                className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:opacity-90"
              >
                Pedir cita online
              </a>
              <a
                href="tel:+34679176144"
                className="rounded-2xl border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Llamar ahora
              </a>
              <a
                href="https://wa.me/34679176144"
                className="rounded-2xl border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Escribir por WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
