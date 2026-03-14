// SEO CONFIG FOR DOMAIN
// Recommended domain: https://cirujanomaxilofacialsabadell.com
// Main SEO title:
// "Cirujano Maxilofacial en Sabadell | Muelas del juicio e implantes dentales"
// Meta description:
// "Unidad de Cirugía Oral y Maxilofacial en el Hospital Quirónsalud del Vallès. Especialistas en muelas del juicio, cordales incluidos e implantes dentales en Sabadell y el Vallès."

export default function LandingQuironValles() {
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
    bio: 'Licenciado en Medicina y Cirugía por la UMH de Alicante. Especialista en Cirugía Oral y Maxilofacial vía Hospital Vall d’Hebron. Doctor en Medicina y Cirugía Cum Laude por la UAB y Fellow del European Board of Oral and Maxillofacial Surgery. Actualmente es adjunto del Servicio de Cirugía Oral y Maxilofacial del Hospital Parc Taulí y profesor colaborador de la UAB.'
  },
  {
    name: 'Dra. Laia Fité',
    img: '/doctors/fite.jpg',
    bio: 'Cirujana especializada en cirugía oral y maxilofacial. Licenciada en Medicina y Cirugía, especialista vía MIR en Cirugía Oral y Maxilofacial en el Hospital Vall d’Hebron de Barcelona. Desde 2019 combina la actividad sanitaria pública en el Hospital Parc Taulí de Sabadell con la práctica privada. Formada en patología de glándulas salivales, patología infantil, cirugía del sueño, así como implantología y cirugía oral.'
  },
  {
    name: 'Dr. Nil Valentínes',
    img: '/doctors/valentines.jpg',
    bio: 'Cirujano especializado en cirugía oral y maxilofacial. Aquí se puede añadir una breve biografía profesional, formación y áreas de especial interés.'
  },
  {
    name: 'Dra. Paula Donate',
    img: '/doctors/donate.jpg',
    bio: 'Cirujana especializada en cirugía oral y maxilofacial. Aquí se puede añadir una breve biografía profesional, formación y áreas de especial interés.'
  },
  {
    name: 'Dr. Radek Lewko',
    img: '/doctors/lewko.jpg',
    bio: 'Cirujano especializado en cirugía oral y maxilofacial. Aquí se puede añadir una breve biografía profesional, formación y áreas de especial interés.'
  }
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

  return (
    <>
      <header className="w-full border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <img src="/logo-ocm.png" alt="Odontología Cirugía Maxilofacial" className="h-12 w-auto" />
            <div className="text-sm text-slate-600 font-medium">Unidad de Cirugía Oral y Maxilofacial</div>
          </div>
          <div className="flex items-center gap-3">
            <img src="/logo-quiron-valles.png" alt="Hospital Quirónsalud del Vallès" className="h-10 w-auto" />
          </div>
        </div>
      </header>
      <main className="min-h-screen bg-white text-slate-900">
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:py-24 grid gap-10 lg:grid-cols-2 lg:items-center">
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

      <section className="bg-slate-50 border-y border-slate-200">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight">Qué tratamos</h2>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              
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
              Equipo de cirugía oral y maxilofacial con experiencia en cirugía de cordales incluidos, implantes dentales y tratamiento de patología oral compleja. El Dr. Alfonso Mogedas Vegara es el jefe de servicio y cirujano maxilofacial responsable de la unidad. Parte de la experiencia clínica del equipo procede también de la actividad desarrollada en MaxDental Vallès, centrada en cirugía oral avanzada e implantología. A continuación puedes añadir fotografías reales y una breve presentación individual de cada profesional.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {doctors.map((doctor) => (
                <div key={doctor.name} className="rounded-3xl border border-slate-200 p-5 shadow-sm">
                  <img src={doctor.img} alt={doctor.name} className="mb-4 aspect-[4/3] w-full object-cover rounded-2xl" />
                  <h3 className="text-lg font-semibold">{doctor.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {doctor.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <h2 className="text-3xl font-bold tracking-tight">Dónde estamos</h2>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              Hospital Quirónsalud del Vallès<br />
              Passeig Rubió i Ors, 23<br />
              08203 Sabadell, Barcelona
            </p>
            <div className="mt-6 aspect-video rounded-2xl bg-slate-200 flex items-center justify-center text-sm text-slate-600 text-center px-6">
              Aquí se puede incrustar un mapa de Google Maps o una imagen del acceso al hospital
            </div>
            <div className="mt-8 space-y-3 text-slate-700">
              <p><span className="font-semibold">Teléfono y WhatsApp:</span> 679 176 144</p>
              <p><span className="font-semibold">Consulta:</span> 1ª planta</p>
              <p><span className="font-semibold">Reserva online:</span> <a href="https://www.quironsalud.com/valles/es/cita-medica#r!/n!/29?dir=next" className="underline">Pedir cita en Quirónsalud</a></p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight">Extracción de muelas del juicio en Sabadell</h2>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            Las muelas del juicio o cordales pueden provocar dolor, infecciones repetidas, inflamación de la encía o daño a los dientes vecinos. Nuestro equipo de cirugía oral y maxilofacial en Sabadell está especializado en la extracción de cordales incluidos o complejos, utilizando técnicas quirúrgicas seguras y una planificación individualizada para cada paciente.
          </p>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            Valoramos cada caso con radiografías o TAC dental cuando es necesario para determinar la posición exacta del cordal y planificar la cirugía de forma precisa.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 border-y border-slate-200">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight">Implantes dentales en Sabadell</h2>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              Los implantes dentales permiten sustituir dientes perdidos recuperando la función masticatoria y la estética. En nuestra consulta del Hospital Quirónsalud del Vallès realizamos tanto implantes unitarios como rehabilitaciones más complejas.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              También tratamos casos con pérdida de hueso, dientes retenidos o situaciones quirúrgicas complejas que requieren la valoración de un cirujano maxilofacial.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight">Unidad de Cirugía Oral y Maxilofacial en Sabadell</h2>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            La Unidad de Cirugía Oral y Maxilofacial del Hospital Quirónsalud del Vallès está orientada al diagnóstico y tratamiento quirúrgico de patologías de la cavidad oral y de los maxilares. Nuestro equipo atiende a pacientes de Sabadell y del conjunto del Vallès que requieren procedimientos de cirugía oral avanzada.
          </p>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            Entre los tratamientos más frecuentes se encuentran la extracción de muelas del juicio complejas, el tratamiento de cordales incluidos, la cirugía de quistes maxilares y la colocación de implantes dentales. También valoramos situaciones más complejas que requieren planificación quirúrgica individualizada.
          </p>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            Nuestro objetivo es ofrecer una atención médica especializada, con un enfoque seguro y personalizado para cada paciente, utilizando técnicas actuales de cirugía oral y maxilofacial dentro del entorno hospitalario del Hospital Quirónsalud del Vallès.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold tracking-tight">Preguntas frecuentes</h2>
        <div className="mt-8 space-y-6 text-slate-700 max-w-3xl">
          <div>
            <h3 className="font-semibold text-lg">¿Cuándo es necesario quitar las muelas del juicio?</h3>
            <p className="mt-2">La extracción de las muelas del juicio suele recomendarse cuando provocan dolor, infecciones repetidas, inflamación de la encía, caries en el diente vecino o cuando permanecen retenidas dentro del hueso. Cada caso debe valorarse mediante exploración clínica y radiografías.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">¿Es dolorosa la extracción de una muela del juicio?</h3>
            <p className="mt-2">La intervención se realiza habitualmente con anestesia local y, en algunos casos, con sedación. Durante el procedimiento el paciente no siente dolor. Después de la cirugía puede aparecer inflamación o molestias leves que normalmente se controlan con medicación y cuidados postoperatorios.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">¿Cuánto tiempo dura la recuperación?</h3>
            <p className="mt-2">La recuperación suele ser rápida. La mayoría de los pacientes pueden retomar sus actividades habituales en pocos días. La inflamación suele disminuir progresivamente durante la primera semana siguiendo las recomendaciones del cirujano.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">¿Cuándo es recomendable colocar un implante dental?</h3>
            <p className="mt-2">Los implantes dentales están indicados cuando se ha perdido uno o varios dientes y se desea recuperar la función masticatoria y la estética. Antes de realizar el tratamiento se evalúa la cantidad y calidad del hueso mediante radiografías o TAC dental.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">¿Cuánto tiempo dura un implante dental?</h3>
            <p className="mt-2">Con una correcta planificación quirúrgica y una buena higiene oral, los implantes dentales pueden mantenerse en buen estado durante muchos años. Las revisiones periódicas y el mantenimiento adecuado son fundamentales para su éxito a largo plazo.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold tracking-tight">Información ampliada sobre tratamientos</h2>
        <p className="mt-4 text-lg text-slate-700 max-w-3xl">
          Para pacientes que desean conocer más detalles sobre los tratamientos más frecuentes de cirugía oral, hemos preparado páginas específicas con información ampliada.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <a href="/muelas-del-juicio-sabadell" className="block rounded-3xl border border-slate-200 p-6 hover:shadow-md transition">
            <h3 className="text-xl font-semibold">Extracción de muelas del juicio en Sabadell</h3>
            <p className="mt-3 text-slate-700">
              Información detallada sobre cordales incluidos, síntomas frecuentes, cuándo es recomendable la extracción y cómo es el proceso de recuperación.
            </p>
            <span className="mt-4 inline-block text-sm font-semibold text-slate-900">Ver información completa →</span>
          </a>

          <a href="/implantes-dentales-sabadell" className="block rounded-3xl border border-slate-200 p-6 hover:shadow-md transition">
            <h3 className="text-xl font-semibold">Implantes dentales en Sabadell</h3>
            <p className="mt-3 text-slate-700">
              Explicación completa sobre el tratamiento con implantes dentales, planificación quirúrgica, casos complejos y resultados esperables.
            </p>
            <span className="mt-4 inline-block text-sm font-semibold text-slate-900">Ver información completa →</span>
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

// -----------------------------
// SEO MINI PAGE 1
// /muelas-del-juicio-sabadell
// -----------------------------

export function MuelasJuicioSabadell() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-4xl font-bold">Extracción de muelas del juicio en Sabadell</h1>
        <p className="mt-6 text-lg text-slate-700">
          Las muelas del juicio o cordales son los últimos molares en aparecer. En muchos casos no
          tienen espacio suficiente para erupcionar correctamente y pueden quedar retenidos dentro
          del hueso o parcialmente cubiertos por la encía.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">Síntomas frecuentes</h2>
        <ul className="mt-4 space-y-2 text-slate-700">
          <li>• Dolor en la zona posterior de la mandíbula</li>
          <li>• Inflamación de la encía</li>
          <li>• Infecciones repetidas</li>
          <li>• Dificultad para abrir la boca</li>
          <li>• Daño en el molar vecino</li>
        </ul>

        <h2 className="mt-10 text-2xl font-semibold">¿Cómo se realiza la cirugía?</h2>
        <p className="mt-4 text-slate-700">
          La intervención se realiza habitualmente con anestesia local y, en algunos casos,
          con sedación. Antes del procedimiento se realiza un estudio radiológico o TAC dental
          para conocer la posición exacta del cordal y planificar la cirugía de forma segura.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">Recuperación</h2>
        <p className="mt-4 text-slate-700">
          La recuperación suele ser rápida. Durante los primeros días puede aparecer inflamación
          o molestias leves que normalmente se controlan con medicación y siguiendo las
          recomendaciones postoperatorias del cirujano.
        </p>

        <div className="mt-12">
          <a href="https://www.quironsalud.com/valles/es/cita-medica#r!/n!/29?dir=next" className="rounded-xl bg-slate-900 text-white px-6 py-3">
            Pedir cita en Quirónsalud del Vallès
          </a>
        </div>
      </section>
    </main>
  );
}

// -----------------------------
// SEO MINI PAGE 2
// /implantes-dentales-sabadell
// -----------------------------

export function ImplantesDentalesSabadell() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-4xl font-bold">Implantes dentales en Sabadell</h1>

        <p className="mt-6 text-lg text-slate-700">
          Los implantes dentales permiten sustituir dientes perdidos mediante una raíz artificial
          de titanio que se integra en el hueso. Sobre este implante se coloca posteriormente
          una corona dental que reproduce la forma y función del diente natural.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">¿Cuándo están indicados?</h2>
        <ul className="mt-4 space-y-2 text-slate-700">
          <li>• Pérdida de uno o varios dientes</li>
          <li>• Dificultad para masticar</li>
          <li>• Problemas estéticos por ausencia dental</li>
          <li>• Rehabilitación completa de la dentición</li>
        </ul>

        <h2 className="mt-10 text-2xl font-semibold">Planificación del tratamiento</h2>
        <p className="mt-4 text-slate-700">
          Antes de colocar un implante dental se realiza un estudio clínico y radiológico
          completo. En muchos casos utilizamos TAC dental para evaluar la cantidad y calidad
          del hueso disponible y planificar la cirugía con precisión.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">Implantes en casos complejos</h2>
        <p className="mt-4 text-slate-700">
          Los cirujanos maxilofaciales están especialmente formados para tratar situaciones
          complejas como pérdida de hueso, dientes retenidos o rehabilitaciones completas
          que requieren planificación quirúrgica avanzada.
        </p>

        <div className="mt-12">
          <a href="https://www.quironsalud.com/valles/es/cita-medica#r!/n!/29?dir=next" className="rounded-xl bg-slate-900 text-white px-6 py-3">
            Pedir cita en Quirónsalud del Vallès
          </a>
        </div>
      </section>
    </main>
  );
}

// -----------------------------
// BLOG ARTICLE 1
// -----------------------------

export function BlogDolorMuelaJuicio() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-4xl font-bold">Dolor de muela del juicio: cuándo acudir al cirujano maxilofacial</h1>

        <p className="mt-6 text-lg text-slate-700">
          El dolor en la zona posterior de la boca es uno de los motivos más frecuentes de consulta relacionados con las muelas del juicio. Estas piezas dentales suelen aparecer entre los 17 y los 25 años, y en muchas ocasiones no disponen de espacio suficiente para erupcionar correctamente.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">Causas más habituales del dolor</h2>
        <p className="mt-4 text-slate-700">
          El dolor puede aparecer cuando la muela del juicio queda parcialmente cubierta por la encía, lo que favorece la acumulación de bacterias y la aparición de infecciones. También puede producirse cuando el cordal empuja al diente vecino o permanece retenido dentro del hueso.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">Síntomas que requieren valoración</h2>
        <ul className="mt-4 space-y-2 text-slate-700">
          <li>• Dolor persistente en la zona posterior de la mandíbula</li>
          <li>• Inflamación de la encía</li>
          <li>• Dificultad para abrir la boca</li>
          <li>• Infecciones repetidas</li>
        </ul>

        <p className="mt-6 text-slate-700">
          Cuando estos síntomas aparecen de forma recurrente es recomendable acudir a un cirujano oral y maxilofacial para valorar la necesidad de extracción.
        </p>
      </section>
    </main>
  );
}

// -----------------------------
// BLOG ARTICLE 2
// -----------------------------

export function BlogRecuperacionCordal() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-4xl font-bold">¿Cuánto tarda la recuperación de una muela del juicio?</h1>

        <p className="mt-6 text-lg text-slate-700">
          La recuperación tras la extracción de una muela del juicio suele ser rápida en la mayoría de los pacientes. El tiempo exacto depende de factores como la posición del cordal, la complejidad de la cirugía y la respuesta individual del organismo.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">Primeros días después de la cirugía</h2>
        <p className="mt-4 text-slate-700">
          Durante las primeras 24‑48 horas es habitual presentar inflamación y molestias leves. Estas molestias suelen controlarse adecuadamente con medicación antiinflamatoria y analgésica.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">Tiempo habitual de recuperación</h2>
        <p className="mt-4 text-slate-700">
          La mayoría de los pacientes pueden retomar sus actividades habituales en 2‑3 días. La inflamación suele disminuir progresivamente durante la primera semana.
        </p>

        <p className="mt-6 text-slate-700">
          Seguir las indicaciones postoperatorias del cirujano es fundamental para favorecer una recuperación rápida y evitar complicaciones.
        </p>
      </section>
    </main>
  );
}

// -----------------------------
// CATALAN VERSION (basic structure)
// -----------------------------

export function LandingQuironVallesCAT() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-4xl font-bold">Cirurgià maxil·lofacial a Sabadell</h1>

        <p className="mt-6 text-lg text-slate-700">
          La nostra unitat de cirurgia oral i maxil·lofacial del Hospital Quirónsalud del Vallès
          està especialitzada en l'extracció de queixals del seny, cirurgia oral complexa i
          tractaments amb implants dentals.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">Tractaments principals</h2>
        <ul className="mt-4 space-y-2 text-slate-700">
          <li>• Extracció de queixals del seny</li>
          <li>• Cordals inclosos</li>
          <li>• Quists maxil·lars</li>
          <li>• Implants dentals</li>
        </ul>

        <p className="mt-6 text-slate-700">
          Atendrem pacients de Sabadell i de tot el Vallès amb un enfocament mèdic especialitzat
          en cirurgia oral i maxil·lofacial dins d'un entorn hospitalari.
        </p>

        <div className="mt-10">
          <a href="https://www.quironsalud.com/valles/es/cita-medica#r!/n!/29?dir=next" className="rounded-xl bg-slate-900 text-white px-6 py-3">
            Demanar visita
          </a>
        </div>
      </section>
    </main>
  );
}

// -----------------------------
// BLOG ARTICLE 3
// -----------------------------

export function BlogDuracionImplante() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-4xl font-bold">¿Cuánto dura un implante dental?</h1>

        <p className="mt-6 text-lg text-slate-700">
          Los implantes dentales están diseñados para ser una solución duradera para la sustitución de dientes perdidos. Con una correcta planificación y un buen mantenimiento, pueden mantenerse en buen estado durante muchos años.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">Factores que influyen en su duración</h2>
        <ul className="mt-4 space-y-2 text-slate-700">
          <li>• Calidad y cantidad de hueso disponible</li>
          <li>• Higiene oral del paciente</li>
          <li>• Revisiones periódicas</li>
          <li>• Ausencia de hábitos como el tabaco</li>
        </ul>

        <p className="mt-6 text-slate-700">
          En condiciones adecuadas, los implantes dentales pueden durar décadas. Las revisiones periódicas permiten detectar precozmente cualquier problema y mantener los resultados a largo plazo.
        </p>
      </section>
    </main>
  );
}

