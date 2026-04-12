export default function LandingQuironValles() {
  const doctoraliaUrl = 'https://www.doctoralia.es/tu-perfil';
  const googleProfileUrl = 'https://share.google/30xWNq7DOS99p7VmX';
  const maxDentalUrl = 'https://www.maxdentalvalles.com';

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name: 'Unidad de Cirugía Oral y Maxilofacial - Hospital Quirónsalud del Vallès',
    description:
      'Unidad de cirugía oral y maxilofacial en Sabadell, ubicada en el Hospital Quirónsalud del Vallès. Especialistas en muelas del juicio, cordales incluidos, implantes dentales y cirugía oral compleja.',
    telephone: '+34 679 176 144',
    url: 'https://www.maxilofacialsabadell.com',
    image: 'https://www.maxilofacialsabadell.com/logo-ocm.png',
    medicalSpecialty: 'Oral and Maxillofacial Surgery',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Passeig Rubió i Ors, 23',
      addressLocality: 'Sabadell',
      addressRegion: 'Barcelona',
      postalCode: '08203',
      addressCountry: 'ES',
    },
    areaServed: [
      'Sabadell',
      'Terrassa',
      'Sant Cugat del Vallès',
      'Rubí',
      'Cerdanyola del Vallès',
      'Barberà del Vallès',
      'Castellar del Vallès',
      'Sant Quirze del Vallès',
    ],
    sameAs: [
      'https://www.quironsalud.com/valles/es/cita-medica#r!/n!/29?dir=next',
      doctoraliaUrl,
      googleProfileUrl,
      maxDentalUrl,
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿Cuándo es necesario quitar las muelas del juicio?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'La extracción suele recomendarse cuando las muelas del juicio provocan dolor, infección, inflamación de la encía, caries en el diente vecino o permanecen retenidas dentro del hueso. En nuestra consulta de Sabadell valoramos cada caso con exploración clínica y radiografías o TAC dental si es necesario.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Es dolorosa la extracción de una muela del juicio?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'La intervención se realiza habitualmente con anestesia local y, en algunos casos, con sedación. Durante el procedimiento el paciente no siente dolor. Después de la cirugía puede aparecer inflamación o molestias leves que normalmente se controlan con medicación y cuidados postoperatorios.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Cuánto tiempo dura la recuperación?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'La mayoría de los pacientes pueden retomar sus actividades habituales en pocos días. La inflamación suele disminuir progresivamente durante la primera semana siguiendo las recomendaciones del cirujano maxilofacial.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Cuándo es recomendable colocar un implante dental?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Los implantes dentales están indicados cuando se ha perdido uno o varios dientes y se desea recuperar la función masticatoria y la estética. Antes de realizar el tratamiento se evalúa la cantidad y calidad del hueso mediante radiografías o TAC dental.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Cuánto tiempo dura un implante dental?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Con una correcta planificación quirúrgica y una buena higiene oral, los implantes dentales pueden mantenerse en buen estado durante muchos años. Las revisiones periódicas y el mantenimiento adecuado son fundamentales para su éxito a largo plazo.',
        },
      },
    ],
  };

  const treatments = [
    {
      title: 'Muelas del juicio',
      text: 'Valoración y extracción de cordales incluidos, semiincluidos o complejos con un enfoque quirúrgico seguro y personalizado.',
      href: '/muelas-del-juicio-sabadell',
    },
    {
      title: 'Implantes dentales',
      text: 'Tratamientos con implantes en casos sencillos y complejos, con planificación precisa para recuperar función y estética.',
      href: '/implantes-dentales-sabadell',
    },
    {
      title: 'Cirugía oral compleja',
      text: 'Abordaje de quistes maxilares, dientes incluidos, infecciones y otras patologías de cirugía oral.',
    },
  ];

  const doctors = [
    {
      name: 'Dr. Alfonso Mogedas Vegara',
      role: 'Jefe de Servicio',
      img: '/doctors/mogedas.jpg',
      position: 'center 32%',
      bio: 'Especialista vía MIR en Cirugía Oral y Maxilofacial, jefe de servicio y responsable de la unidad en el Hospital Quirónsalud del Vallès.',
    },
    {
      name: 'Dra. Laia Fité',
      role: 'Cirujana Oral y Maxilofacial',
      img: '/doctors/fite.jpg',
      position: 'center 34%',
      bio: 'Especialista en cirugía oral y maxilofacial con experiencia en patología oral, implantología y cirugía compleja.',
    },
    {
      name: 'Dr. Nil Valentínes',
      role: 'Cirujano Oral y Maxilofacial',
      img: '/doctors/valentines.png',
      position: 'center 34%',
      bio: 'Cirujano especializado en cirugía oral y maxilofacial.',
    },
    {
      name: 'Dra. Paula Donate',
      role: 'Cirujana Oral y Maxilofacial',
      img: '/doctors/donate.jpg',
      position: 'center 30%',
      bio: 'Cirujana oral y maxilofacial con experiencia en implantología, cirugía oral y patología de cabeza y cuello.',
    },
    {
      name: 'Dr. Radek Lewko',
      role: 'Cirujano Oral y Maxilofacial',
      img: '/doctors/lewko.png',
      position: 'center 33%',
      bio: 'Cirujano especializado en cirugía oral y maxilofacial, centrado en la precisión quirúrgica y la recuperación del paciente.',
    },
  ];

  function TeamMemberCard({ doctor }) {
    return (
      <article className="rounded-3xl border border-cyan-100 bg-white p-5 shadow-sm">
        <div className="mb-4 h-72 overflow-hidden rounded-2xl bg-slate-100">
          <img
            src={doctor.img}
            alt={`${doctor.name}, ${doctor.role}`}
            className="block h-full w-full object-cover"
            style={{ objectPosition: doctor.position || 'center 35%' }}
            loading="lazy"
          />
        </div>

        <h3 className="text-lg font-semibold">{doctor.name}</h3>
        <p className="mt-1 text-sm font-medium text-cyan-700">{doctor.role}</p>
        <p className="mt-3 text-sm leading-6 text-slate-600">{doctor.bio}</p>
      </article>
    );
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <header className="sticky top-0 z-40 w-full border-b border-cyan-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
          <div className="flex items-center gap-4">
            <img
              src="/logo-ocm.png"
              alt="Unidad de Cirugía Oral y Maxilofacial"
              className="h-12 w-auto"
            />
            <div className="text-sm font-medium text-slate-600">
              Unidad de Cirugía Oral y Maxilofacial · Sabadell
            </div>
          </div>

          <div className="flex items-center gap-3">
            <img
              src="/logo-quiron-valles.png"
              alt="Hospital Quirónsalud del Vallès"
              className="h-10 w-auto"
            />
          </div>
        </div>
      </header>

      <main className="min-h-screen bg-white pb-24 text-cyan-900 selection:bg-cyan-100">
        <section className="border-b border-cyan-100 bg-cyan-50">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-2 lg:items-center lg:py-24">
            <div>
              <span className="inline-flex rounded-full border border-slate-300 px-4 py-1 text-sm font-medium text-slate-700">
                Cirugía Oral y Maxilofacial · Hospital Quirónsalud del Vallès
              </span>

              <h1 className="mt-5 text-4xl font-bold tracking-tight text-cyan-900 lg:text-5xl">
                Cirujano maxilofacial en Sabadell para muelas del juicio e implantes
                dentales
              </h1>

              <p className="mt-5 text-lg leading-8 text-slate-700">
                En nuestra consulta de cirugía oral y maxilofacial en Sabadell, ubicada
                en el Hospital Quirónsalud del Vallès, tratamos muelas del juicio,
                cordales incluidos, implantes dentales y casos de cirugía oral compleja.
                Atendemos pacientes privados y de aseguradoras con cobertura en el
                hospital.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://www.quironsalud.com/valles/es/cita-medica#r!/n!/29?dir=next"
                  className="rounded-2xl bg-cyan-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-cyan-700"
                >
                  Pedir cita en Quirónsalud
                </a>

                <a
                  href="tel:+34679176144"
                  className="rounded-2xl border border-slate-300 px-6 py-3 text-sm font-semibold text-cyan-900 transition hover:bg-cyan-100"
                >
                  Llamar al 679 176 144
                </a>

                <a
                  href="https://wa.me/34679176144"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-slate-300 px-6 py-3 text-sm font-semibold text-cyan-900 transition hover:bg-cyan-100"
                >
                  WhatsApp
                </a>
              </div>

              <p className="mt-4 text-sm text-slate-500">
                También puedes escribirnos por WhatsApp al 679 176 144 para pedir
                información o solicitar cita.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-cyan-100 bg-white p-6 shadow-sm sm:col-span-2">
                <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  Tratamientos destacados
                </p>
                <ul className="mt-4 space-y-3 text-slate-700">
                  <li>
                    <a href="/muelas-del-juicio-sabadell" className="hover:underline">
                      Extracción de muelas del juicio complejas
                    </a>
                  </li>
                  <li>Cordales incluidos y dientes retenidos</li>
                  <li>Quistes maxilares y cirugía oral</li>
                  <li>
                    <a href="/implantes-dentales-sabadell" className="hover:underline">
                      Implantes dentales unitarios y múltiples
                    </a>
                  </li>
                  <li>Rehabilitación de casos complejos</li>
                </ul>
              </div>

              <div className="rounded-3xl border border-cyan-100 bg-white p-6 shadow-sm">
                <p className="text-3xl font-bold">1ª planta</p>
                <p className="mt-2 text-slate-600">
                  Ubicación de la consulta en el hospital
                </p>
              </div>

              <div className="rounded-3xl border border-cyan-100 bg-white p-6 shadow-sm">
                <p className="text-3xl font-bold">Sabadell</p>
                <p className="mt-2 text-slate-600">
                  Fácil acceso para pacientes del Vallès
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight">
              ¿Cuándo conviene acudir a un cirujano maxilofacial?
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              Esta consulta está orientada a pacientes que necesitan valorar muelas del
              juicio retenidas, cordales con dolor o infección, implantes dentales o
              procedimientos de cirugía oral compleja en Sabadell y el Vallès.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              Atendemos pacientes de Sabadell, Terrassa, Sant Cugat, Rubí, Cerdanyola,
              Barberà, Castellar y otras poblaciones del Vallès.
            </p>
          </div>
        </section>

        <section className="border-y border-cyan-100 bg-cyan-50">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight">Qué tratamos</h2>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                Tratamos patología de cirugía oral y maxilofacial en Sabadell, con
                especial dedicación a la extracción de cordales incluidos, la cirugía
                oral compleja y la colocación de implantes dentales.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {treatments.map((item) =>
                item.href ? (
                  <a
                    key={item.title}
                    href={item.href}
                    className="rounded-3xl border border-cyan-100 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="mt-3 leading-7 text-slate-700">{item.text}</p>
                    <span className="mt-4 inline-block text-sm font-semibold text-cyan-900">
                      Ver más →
                    </span>
                  </a>
                ) : (
                  <article
                    key={item.title}
                    className="rounded-3xl border border-cyan-100 bg-white p-6 shadow-sm"
                  >
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="mt-3 leading-7 text-slate-700">{item.text}</p>
                  </article>
                )
              )}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div className="rounded-3xl border border-cyan-100 bg-cyan-50 p-8 shadow-sm">
              <h2 className="text-3xl font-bold tracking-tight">Dónde estamos</h2>

              <p className="mt-4 text-lg leading-8 text-slate-700">
                Consulta de cirugía oral y maxilofacial en Sabadell, situada en el
                Hospital Quirónsalud del Vallès.
              </p>

              <p className="mt-4 text-lg leading-8 text-slate-700">
                Passeig Rubió i Ors, 23
                <br />
                08203 Sabadell, Barcelona
              </p>

              <div className="mt-6 overflow-hidden rounded-2xl border border-cyan-100 shadow-sm">
                <iframe
                  src="https://www.google.com/maps?q=Hospital+Quir%C3%B3nsalud+del+Vall%C3%A8s+Sabadell&output=embed"
                  width="100%"
                  height="320"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa Hospital Quirónsalud del Vallès"
                />
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Hospital+Quironsalud+del+Valles+Sabadell"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex rounded-2xl bg-cyan-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-cyan-700"
              >
                Cómo llegar en Google Maps
              </a>

              <div className="mt-8 space-y-3 text-slate-700">
                <p>
                  <span className="font-semibold">Teléfono y WhatsApp:</span> 679 176
                  144
                </p>
                <p>
                  <span className="font-semibold">Consulta:</span> 1ª planta
                </p>
                <p>
                  <span className="font-semibold">Reserva online:</span>{' '}
                  <a
                    href="https://www.quironsalud.com/valles/es/cita-medica#r!/n!/29?dir=next"
                    className="underline"
                  >
                    Pedir cita en Quirónsalud
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold tracking-tight">
                Equipo de cirujanos maxilofaciales
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                Equipo de cirugía oral y maxilofacial con experiencia en cordales
                incluidos, implantes dentales y cirugía oral compleja. El Dr. Alfonso
                Mogedas Vegara es el jefe de servicio y responsable de la unidad.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {doctors.map((doctor) => (
                  <TeamMemberCard key={doctor.name} doctor={doctor} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-cyan-100 bg-cyan-50">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-bold tracking-tight">
                Opiniones y perfiles del equipo
              </h2>

              <p className="mt-4 text-lg leading-8 text-slate-700">
                Puedes consultar opiniones de pacientes, información adicional del
                equipo y otros perfiles relacionados en Doctoralia, Google y Max Dental
                Vallès.
              </p>

              <div className="mt-8 grid gap-6 md:grid-cols-3">
                <a
                  href={doctoraliaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-3xl border border-cyan-100 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <h3 className="text-xl font-semibold">Doctoralia</h3>
                  <p className="mt-3 leading-7 text-slate-700">
                    Consulta el perfil profesional y las opiniones de pacientes en
                    Doctoralia.
                  </p>
                  <span className="mt-4 inline-block text-sm font-semibold text-cyan-900">
                    Ver perfil →
                  </span>
                </a>

                <a
                  href={googleProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-3xl border border-cyan-100 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <h3 className="text-xl font-semibold">Google</h3>
                  <p className="mt-3 leading-7 text-slate-700">
                    Revisa nuestra presencia en Google y consulta valoraciones de
                    pacientes.
                  </p>
                  <span className="mt-4 inline-block text-sm font-semibold text-cyan-900">
                    Ver perfil →
                  </span>
                </a>

                <a
                  href={maxDentalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-3xl border border-cyan-100 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <h3 className="text-xl font-semibold">Max Dental Vallès</h3>
                  <p className="mt-3 leading-7 text-slate-700">
                    Accede a otra web relacionada con nuestro equipo y actividad
                    asistencial.
                  </p>
                  <span className="mt-4 inline-block text-sm font-semibold text-cyan-900">
                    Visitar web →
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight">
              Muelas del juicio en Sabadell
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              Valoramos y tratamos cordales incluidos, semierupcionados o complejos que
              pueden causar dolor, infección, inflamación o daño en los dientes vecinos.
              Cuando es necesario, utilizamos radiografía o TAC dental para planificar la
              cirugía con precisión.
            </p>
            <a
              href="/muelas-del-juicio-sabadell"
              className="mt-6 inline-flex rounded-2xl bg-cyan-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-cyan-700"
            >
              Ver información completa sobre muelas del juicio
            </a>
          </div>
        </section>

        <section className="border-y border-cyan-100 bg-cyan-50">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight">
                Implantes dentales en Sabadell
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                Realizamos tratamientos con implantes dentales para sustituir dientes
                perdidos, tanto en casos sencillos como complejos, con planificación
                quirúrgica individualizada en el Hospital Quirónsalud del Vallès.
              </p>
              <a
                href="/implantes-dentales-sabadell"
                className="mt-6 inline-flex rounded-2xl bg-cyan-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-cyan-700"
              >
                Ver información completa sobre implantes dentales
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-bold tracking-tight">Preguntas frecuentes</h2>

          <div className="mt-8 max-w-3xl space-y-6 text-slate-700">
            <div>
              <h3 className="text-lg font-semibold">
                ¿Cuándo es necesario quitar las muelas del juicio?
              </h3>
              <p className="mt-2">
                La extracción suele recomendarse cuando las muelas del juicio provocan
                dolor, infección, inflamación de la encía, caries en el diente vecino o
                permanecen retenidas dentro del hueso. En nuestra consulta de Sabadell
                valoramos cada caso con exploración clínica y radiografías o TAC dental
                si es necesario.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                ¿Es dolorosa la extracción de una muela del juicio?
              </h3>
              <p className="mt-2">
                La intervención se realiza habitualmente con anestesia local y, en
                algunos casos, con sedación. Durante el procedimiento el paciente no
                siente dolor. Después de la cirugía puede aparecer inflamación o molestias
                leves que normalmente se controlan con medicación y cuidados
                postoperatorios.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                ¿Cuánto tiempo dura la recuperación?
              </h3>
              <p className="mt-2">
                La mayoría de los pacientes pueden retomar sus actividades habituales en
                pocos días. La inflamación suele disminuir progresivamente durante la
                primera semana siguiendo las recomendaciones del cirujano maxilofacial.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                ¿Cuándo es recomendable colocar un implante dental?
              </h3>
              <p className="mt-2">
                Los implantes dentales están indicados cuando se ha perdido uno o varios
                dientes y se desea recuperar la función masticatoria y la estética. Antes
                de realizar el tratamiento se evalúa la cantidad y calidad del hueso
                mediante radiografías o TAC dental.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                ¿Cuánto tiempo dura un implante dental?
              </h3>
              <p className="mt-2">
                Con una correcta planificación quirúrgica y una buena higiene oral, los
                implantes dentales pueden mantenerse en buen estado durante muchos años.
                Las revisiones periódicas y el mantenimiento adecuado son fundamentales
                para su éxito a largo plazo.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-bold tracking-tight">
            Información ampliada sobre tratamientos
          </h2>

          <p className="mt-4 max-w-3xl text-lg text-slate-700">
            Para pacientes que desean conocer más detalles sobre los tratamientos más
            frecuentes de cirugía oral, hemos preparado páginas específicas con
            información ampliada.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <a
              href="/muelas-del-juicio-sabadell"
              className="block rounded-3xl border border-cyan-100 p-6 transition hover:shadow-md"
            >
              <h3 className="text-xl font-semibold">
                Extracción de muelas del juicio en Sabadell
              </h3>
              <p className="mt-3 text-slate-700">
                Información detallada sobre cordales incluidos, síntomas frecuentes,
                cuándo es recomendable la extracción y cómo es el proceso de recuperación.
              </p>
              <span className="mt-4 inline-block text-sm font-semibold text-cyan-900">
                Ver información completa →
              </span>
            </a>

            <a
              href="/implantes-dentales-sabadell"
              className="block rounded-3xl border border-cyan-100 p-6 transition hover:shadow-md"
            >
              <h3 className="text-xl font-semibold">
                Implantes dentales en Sabadell
              </h3>
              <p className="mt-3 text-slate-700">
                Explicación completa sobre el tratamiento con implantes dentales,
                planificación quirúrgica, casos complejos y resultados esperables.
              </p>
              <span className="mt-4 inline-block text-sm font-semibold text-cyan-900">
                Ver información completa →
              </span>
            </a>
          </div>
        </section>

        <section className="bg-gradient-to-r from-cyan-600 to-rose-400 text-white">
          <div className="mx-auto max-w-6xl px-6 py-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight lg:text-4xl">
              ¿Necesitas valorar muelas del juicio o implantes dentales en Sabadell?
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-white/90">
              Nuestro equipo de cirugía oral y maxilofacial en Sabadell puede valorar tu
              caso y orientarte sobre el tratamiento más adecuado.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="https://www.quironsalud.com/valles/es/cita-medica#r!/n!/29?dir=next"
                className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-cyan-900 shadow-sm transition hover:opacity-90"
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
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Escribir por WhatsApp
              </a>
            </div>
          </div>
        </section>

        <a
          href="https://wa.me/34679176144"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Escribir por WhatsApp"
          className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-emerald-600"
        >
          <span className="text-lg">💬</span>
          WhatsApp
        </a>

        <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-cyan-100 bg-white/95 p-3 backdrop-blur md:hidden">
          <div className="mx-auto flex max-w-6xl gap-3">
            <a
              href="tel:+34679176144"
              className="flex-1 rounded-2xl bg-cyan-600 px-4 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-cyan-700"
            >
              Llamar
            </a>

            <a
              href="https://wa.me/34679176144"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-center text-sm font-semibold text-emerald-700 transition hover:bg-emerald-100"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
