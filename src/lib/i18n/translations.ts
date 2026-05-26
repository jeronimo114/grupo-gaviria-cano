export type Lang = "es" | "en";

export const LANG_LABELS: Record<Lang, string> = {
  es: "Español",
  en: "English",
};

export type TranslationKey =
  | "nav.about" | "nav.companies" | "nav.values" | "nav.news" | "nav.careers" | "nav.contact"
  | "hero.eyebrow" | "hero.title" | "hero.subtitle" | "hero.cta1" | "hero.cta2" | "hero.companies_label"
  | "intro.label" | "intro.title" | "intro.p1" | "intro.p2" | "intro.cta"
  | "stats.eyebrow" | "stats.title" | "stats.s1" | "stats.s2" | "stats.s3" | "stats.s4" | "stats.s5" | "stats.s6" | "stats.note"
  | "empresas.eyebrow" | "empresas.title" | "empresas.subtitle"
  | "empresas.master.tag" | "empresas.master.desc" | "empresas.master.link" | "empresas.visit"
  | "empresas.360.tag" | "empresas.360.desc"
  | "empresas.cc.tag" | "empresas.cc.desc"
  | "empresas.sdl.tag" | "empresas.sdl.desc"
  | "empresas.lead.tag" | "empresas.lead.desc"
  | "empresas.subpage.back" | "empresas.subpage.about"
  | "empresas.subpage.cta.title" | "empresas.subpage.cta.desc" | "empresas.subpage.cta.button"
  | "empresas.cc.subpage.intro" | "empresas.cc.subpage.body1" | "empresas.cc.subpage.body2"
  | "empresas.sdl.subpage.intro" | "empresas.sdl.subpage.body1" | "empresas.sdl.subpage.body2"
  | "empresas.lead.subpage.intro" | "empresas.lead.subpage.body1" | "empresas.lead.subpage.body2"
  | "audience.eyebrow" | "audience.title"
  | "audience.1.title" | "audience.1.desc"
  | "audience.2.title" | "audience.2.desc"
  | "audience.3.title" | "audience.3.desc"
  | "audience.4.title" | "audience.4.desc"
  | "compromise.eyebrow" | "compromise.title" | "compromise.subtitle"
  | "compromise.feature.eyebrow" | "compromise.feature.title" | "compromise.feature.desc"
  | "compromise.1.title" | "compromise.1.desc"
  | "compromise.2.title" | "compromise.2.desc"
  | "compromise.3.title" | "compromise.3.desc"
  | "values.eyebrow" | "values.title"
  | "values.1.num" | "values.1.title" | "values.1.desc"
  | "values.2.num" | "values.2.title" | "values.2.desc"
  | "values.3.num" | "values.3.title" | "values.3.desc"
  | "values.4.num" | "values.4.title" | "values.4.desc"
  | "news.eyebrow" | "news.title" | "news.viewAll"
  | "news.1.cat" | "news.1.title" | "news.1.date"
  | "news.2.cat" | "news.2.title" | "news.2.date"
  | "news.3.cat" | "news.3.title" | "news.3.date"
  | "careers.eyebrow" | "careers.title" | "careers.desc"
  | "careers.1.title" | "careers.1.sub"
  | "careers.2.title" | "careers.2.sub"
  | "careers.3.title" | "careers.3.sub"
  | "contact.eyebrow" | "contact.title" | "contact.desc"
  | "contact.direct.email" | "contact.direct.phone" | "contact.direct.linkedin"
  | "contact.form.title" | "contact.form.sub"
  | "contact.name" | "contact.company" | "contact.optional"
  | "contact.email" | "contact.reason" | "contact.message" | "contact.send" | "contact.disclaimer"
  | "contact.opt1" | "contact.opt2" | "contact.opt3" | "contact.opt4" | "contact.opt5" | "contact.opt6" | "contact.opt7"
  | "contact.offices.title" | "contact.hours.label" | "contact.hours.value"
  | "office.medellin.city" | "office.medellin.role" | "office.medellin.address"
  | "office.doral.city" | "office.doral.role" | "office.doral.address"
  | "footer.brand" | "footer.companies" | "footer.group" | "footer.contactTitle"
  | "footer.writeUs" | "footer.offices" | "footer.openings" | "footer.press"
  | "footer.copyright" | "footer.policy"
  | "form.success"
  | "policy.eyebrow" | "policy.title" | "policy.intro"
  | "policy.sec1.title" | "policy.sec1.p1" | "policy.sec1.p2" | "policy.sec1.p3"
  | "policy.sec2.title" | "policy.sec2.p1" | "policy.sec2.p2"
  | "policy.sec3.title" | "policy.sec3.p1" | "policy.sec3.p2"
  | "policy.sec4.title" | "policy.sec4.p1" | "policy.sec4.p2"
  | "policy.lastUpdate"
  | "policy.cta.title" | "policy.cta.desc" | "policy.cta.button"
  | "policy.back"
  | "careers.policyLink";

export const TRANSLATIONS: Record<Lang, Record<TranslationKey, string>> = {
  es: {
    "nav.about": "Nosotros",
    "nav.companies": "Empresas",
    "nav.values": "Valores",
    "nav.news": "Noticias",
    "nav.careers": "Empleo",
    "nav.contact": "Contacto",

    "hero.eyebrow": "Casa matriz · Inversiones",
    "hero.title": "Más de <em>tres décadas</em><br>invirtiendo en el <em>desarrollo</em><br>de Colombia.",
    "hero.subtitle":
      "Grupo Gaviria Cano consolida un portafolio de empresas en comunicaciones, consultoría y asesoría — al servicio de gobiernos, empresas privadas y de un país mejor informado.",
    "hero.cta1": "Conoce el grupo",
    "hero.cta2": "Hablemos",
    "hero.companies_label": "Nuestras empresas",

    "intro.label": "Nosotros",
    "intro.title":
      "Una <em>casa matriz</em> que origina líneas de negocio rentables, sólidas y con vocación de largo plazo.",
    "intro.p1":
      "Operamos como un portafolio diversificado de empresas en comunicaciones, consultoría y asesoría a privados y gobiernos. Cada año hacemos crecer nuestros ingresos y EBITDA por encima del año anterior, consolidando un grupo con prestigio, eficiencia y respaldo.",
    "intro.p2":
      "Nuestra meta para 2030 es estar listados en las 500 empresas que más facturan en Colombia, con más del 35% de los ingresos provenientes del exterior.",
    "intro.cta": "Conoce nuestras empresas",

    "stats.eyebrow": "Cifras del grupo",
    "stats.title": "Resultados que hablan del <em>compromiso</em> con cada inversión.",
    "stats.s1": "Años de operación",
    "stats.s2": "Inversiones propias",
    "stats.s3": "Empresas diversificadas<br>en Colombia y exterior",
    "stats.s4": "Crecimiento<br>interanual",
    "stats.s5": "Equipo conformado<br>por mujeres",
    "stats.s6": "Años en programas<br>de sostenibilidad",
    "stats.note": "Cifras a diciembre 2025. Crecimiento calculado sobre EBITDA consolidado del grupo.",

    "empresas.eyebrow": "Compañías subordinadas",
    "empresas.title": "Cinco empresas, <em>una visión.</em>",
    "empresas.subtitle":
      "Cada una de nuestras compañías opera con autonomía y especialización, alineadas en torno a una visión común de excelencia, ética y crecimiento sostenido.",
    "empresas.master.tag": "Casa matriz",
    "empresas.master.desc":
      "Originamos y consolidamos inversiones de largo plazo. Como casa matriz, operamos directamente la asignación de capital, la estrategia corporativa y la coordinación entre las empresas del grupo.",
    "empresas.master.link": "Conocer más",
    "empresas.visit": "Visitar",
    "empresas.360.tag": "Medios · Radio",
    "empresas.360.desc":
      "Ecosistema de medios y radio que produce, distribuye y monetiza contenido informativo y de entretenimiento, con presencia destacada en plataformas digitales.",
    "empresas.cc.tag": "Comunicaciones",
    "empresas.cc.desc":
      "Agencia de comunicaciones estratégicas y relaciones públicas. Diseñamos e implementamos campañas de relacionamiento, voceros, posicionamiento de marca y manejo de crisis.",
    "empresas.sdl.tag": "Consultoría",
    "empresas.sdl.desc":
      "Consultoría estratégica para sectores regulados y empresas familiares. Acompañamos procesos de transformación, gobierno corporativo y planeación financiera.",
    "empresas.lead.tag": "Asesoría",
    "empresas.lead.desc":
      "Asesoría a alta dirección de empresas privadas y entidades de gobierno. Especializados en estrategia, vocería ejecutiva y preparación de líderes.",

    "empresas.subpage.back": "Volver al grupo",
    "empresas.subpage.about": "Sobre la empresa",
    "empresas.subpage.cta.title": "¿Hablamos?",
    "empresas.subpage.cta.desc":
      "Cuéntanos sobre tu proyecto. Te respondemos en menos de 24 horas hábiles.",
    "empresas.subpage.cta.button": "Escríbenos",

    "empresas.cc.subpage.intro":
      "CC Media Agency es la firma de comunicaciones estratégicas y relaciones públicas del Grupo Gaviria Cano. Diseñamos campañas que conectan a las marcas con las audiencias que realmente importan.",
    "empresas.cc.subpage.body1":
      "Acompañamos a empresas, líderes y entidades de gobierno en la construcción de narrativas que sostengan reputación, generen confianza y posicionen propósito en el tiempo. Cada estrategia parte de investigación rigurosa y se ejecuta con disciplina editorial.",
    "empresas.cc.subpage.body2":
      "Nuestro enfoque integra planeación de mensajes, gestión de medios, preparación de voceros, posicionamiento de marca y manejo de crisis, todo bajo un marco ético, medible y orientado a resultados.",

    "empresas.sdl.subpage.intro":
      "SDL Consulting es la firma del Grupo Gaviria Cano enfocada en planificación urbana, infraestructura y desarrollo de territorio.",
    "empresas.sdl.subpage.body1":
      "Las ciudades crecen aceleradamente y todos los desarrollos requieren visión de largo plazo. SDL diagnostica y plantea soluciones a problemáticas de infraestructura, movilidad y aprovechamiento eficiente del territorio, siendo proactiva en crear ambientes más amigables para las personas.",
    "empresas.sdl.subpage.body2":
      "La competitividad y productividad deben ser prioridad para cualquier ciudad, departamento o nación. SDL replica casos de éxito internacionales, adaptándolos a la realidad de cada escenario con sensibilidad local y rigor técnico.",

    "empresas.lead.subpage.intro":
      "LEAD Advisors es la firma de asesoría a alta dirección del Grupo Gaviria Cano. Ayudamos a líderes públicos y privados a tomar mejores decisiones bajo presión.",
    "empresas.lead.subpage.body1":
      "La administración pública y la privada necesitan hoy estructuras sincronizadas y productivas para responder a problemáticas que exigen soluciones de avanzada y largo plazo. Acompañamos a nuestros clientes con las herramientas necesarias para mejorar estructuras laborales, procedimientos e implementación de decisiones.",
    "empresas.lead.subpage.body2":
      "Somos aliados en la focalización de problemas prioritarios y sus posibles soluciones. Asesoramos temas de seguridad, productividad, empleo y gestión administrativa, con amplia trayectoria en el sector.",

    "audience.eyebrow": "A quién servimos",
    "audience.title": "Trabajamos con <em>quienes mueven</em> al país.",
    "audience.1.title": "Accionistas",
    "audience.1.desc":
      "Generamos retornos consistentes a través de un portafolio diversificado y disciplinado, con horizonte de largo plazo y ética en cada decisión.",
    "audience.2.title": "Gobiernos",
    "audience.2.desc":
      "Acompañamos a entidades públicas en estrategia de comunicación, vocería, posicionamiento de iniciativas y relacionamiento institucional.",
    "audience.3.title": "Empresas privadas",
    "audience.3.desc":
      "Brindamos consultoría, asesoría y servicios de medios y comunicación a compañías que buscan crecer, posicionarse y gestionar su reputación.",
    "audience.4.title": "Ciudadanía",
    "audience.4.desc":
      "A través de nuestros medios y publicaciones contribuimos a una sociedad mejor informada, en buena parte de manera filantrópica e independiente.",

    "compromise.eyebrow": "Nuestros compromisos",
    "compromise.title": "Inversión que <em>importa</em>.",
    "compromise.subtitle":
      "Más allá de los números, hay una manera de hacer las cosas que define al grupo.",
    "compromise.feature.eyebrow": "Por encima de todo",
    "compromise.feature.title":
      "Creer en Colombia. <em>Invertir en Colombia.</em><br>Querer que al país le vaya mejor.",
    "compromise.feature.desc":
      "Detrás de cada decisión del grupo hay un compromiso real con el desarrollo del país. Invertimos donde otros dudan, contratamos talento local, sostenemos medios independientes y aportamos a una conversación pública mejor informada. No por filantropía: porque creemos en lo que somos capaces de construir juntos.",
    "compromise.1.title": "Diversidad laboral",
    "compromise.1.desc":
      "Más del 62% de nuestro equipo está conformado por mujeres. Apostamos por equipos diversos como motor de mejores decisiones.",
    "compromise.2.title": "Sostenibilidad",
    "compromise.2.desc":
      "Llevamos seis años con programas de sostenibilidad para mejorar la eficiencia operativa y el impacto ambiental de cada empresa del grupo.",
    "compromise.3.title": "Educación y cultura",
    "compromise.3.desc":
      "A través de nuestros medios, invertimos de manera no cuantificable en la formación, información y cultura de los colombianos.",

    "values.eyebrow": "Valores corporativos",
    "values.title": "Nuestras convicciones <em>en los negocios</em>.",
    "values.1.num": "01 / Respeto",
    "values.1.title": "Respeto",
    "values.1.desc":
      "La inclusión y la tolerancia son esenciales en cada uno de nuestros procesos. Una sociedad que se respeta, avanza con eficacia.",
    "values.2.num": "02 / Responsabilidad",
    "values.2.title": "Responsabilidad",
    "values.2.desc":
      "Obramos con sensatez y objetividad, considerando los derechos y necesidades de cada persona y organización con la que interactuamos.",
    "values.3.num": "03 / Compromiso",
    "values.3.title": "Compromiso",
    "values.3.desc":
      "Nuestra promesa es ser eficientes. Alcanzar los máximos estándares de servicio, trabajo y acompañamiento integral.",
    "values.4.num": "04 / Lealtad",
    "values.4.title": "Lealtad",
    "values.4.desc":
      "Somos fieles a nuestros aliados. Buscamos generar relaciones recíprocas, sostenidas y de largo plazo.",

    "news.eyebrow": "Últimas noticias",
    "news.title": "Lo que está pasando en el <em>grupo</em>.",
    "news.viewAll": "Ver todas",
    "news.1.cat": "Inversiones",
    "news.1.title":
      "Grupo Gaviria Cano expande presencia internacional con nuevas operaciones desde Doral, FL",
    "news.1.date": "Abril · 2026",
    "news.2.cat": "360 · Medios",
    "news.2.title":
      "360 Colombia supera 18 millones de impresiones en redes durante el primer trimestre del año",
    "news.2.date": "Marzo · 2026",
    "news.3.cat": "Sostenibilidad",
    "news.3.title":
      "Sexto año del programa de sostenibilidad: balance de eficiencia operativa en empresas del grupo",
    "news.3.date": "Febrero · 2026",

    "careers.eyebrow": "Personas",
    "careers.title": "Crece, aprende, <em>aporta</em>.",
    "careers.desc":
      "El grupo lo hacen las personas. Buscamos gente curiosa que quiera crecer con nosotros, formar capital de conocimiento y compartir nuestros valores. Si te suena, aquí caben tus ideas.",
    "careers.1.title": "Vacantes abiertas",
    "careers.1.sub": "Lo que estamos buscando ahora mismo",
    "careers.2.title": "Déjanos tu hoja de vida",
    "careers.2.sub": "Te tendremos en cuenta cuando se abra algo",
    "careers.3.title": "¿Estás estudiando?",
    "careers.3.sub": "Programa de prácticas para universitarios",

    "contact.eyebrow": "Contacto",
    "contact.title": "Hablemos.<br><em>Estamos a un mensaje de distancia.</em>",
    "contact.desc":
      "Escríbenos directamente, llámanos o conoce nuestras oficinas. Respondemos en 24 horas hábiles.",
    "contact.direct.email": "Email directo",
    "contact.direct.phone": "Llámanos",
    "contact.direct.linkedin": "LinkedIn",
    "contact.form.title": "Escríbenos un mensaje",
    "contact.form.sub": "Cuéntanos en qué podemos ayudarte. Te respondemos en menos de 24 horas.",
    "contact.name": "Nombre completo",
    "contact.company": "Empresa",
    "contact.optional": "(opcional)",
    "contact.email": "Correo electrónico",
    "contact.reason": "¿Sobre qué nos escribes?",
    "contact.message": "Cuéntanos",
    "contact.send": "Enviar mensaje",
    "contact.disclaimer":
      "Al enviar este formulario aceptas nuestra política de tratamiento de datos personales.",
    "contact.opt1": "Información general",
    "contact.opt2": "Oportunidad de inversión",
    "contact.opt3": "Servicios de comunicaciones",
    "contact.opt4": "Servicios de consultoría",
    "contact.opt5": "Servicios de asesoría",
    "contact.opt6": "Empleo / Vacantes",
    "contact.opt7": "Prensa / Medios",
    "contact.offices.title": "Nuestras oficinas",
    "contact.hours.label": "Horario de atención",
    "contact.hours.value": "Lunes a viernes · 8:00 am – 6:00 pm (COT)",
    "office.medellin.city": "Medellín, Colombia",
    "office.medellin.role": "Casa matriz",
    "office.medellin.address": "Carrera 43A #16A Sur 38<br>Edificio DHL · Oficina 1106",
    "office.doral.city": "Doral, Florida",
    "office.doral.role": "Operación internacional",
    "office.doral.address": "7801 NW 37th Street<br>Doral, FL 33195-6503",

    "footer.brand":
      "Casa matriz de inversiones en comunicaciones, consultoría y asesoría a empresas privadas y gobiernos. Medellín · Doral.",
    "footer.companies": "Empresas",
    "footer.group": "Grupo",
    "footer.contactTitle": "Contacto",
    "footer.writeUs": "Escríbenos",
    "footer.offices": "Oficinas",
    "footer.openings": "Vacantes",
    "footer.press": "Prensa",
    "footer.copyright": "© 2026 Grupo Gaviria Cano S.A.S — Todos los derechos reservados",
    "footer.policy": "Política de protección de datos",

    "form.success": "Gracias. Tu mensaje fue registrado y será reenviado al correo corporativo.",

    "policy.eyebrow": "Marco legal · Empleo",
    "policy.title": "Política de empleo y <em>tratamiento de información</em>.",
    "policy.intro":
      "Las siguientes disposiciones aplican a todo proceso de selección, vinculación y relación contractual con Grupo Gaviria Cano S.A.S. Te invitamos a leerlas con atención antes de postularte.",
    "policy.sec1.title": "Sobre el proceso de selección",
    "policy.sec1.p1":
      "Grupo Gaviria Cano S.A.S no garantiza en ningún momento del proceso la escogencia de un candidato. Los resultados de cada caso son evaluados por un comité especial, quienes se encargan de seleccionar la persona adecuada.",
    "policy.sec1.p2":
      "A dicha persona se le comunica mediante un correo electrónico que ha sido escogida para el cargo, adjunto con las instrucciones a seguir.",
    "policy.sec1.p3":
      "La compañía se reserva el derecho de declarar desiertos los procesos cuando ninguno de los aspirantes cumpla con los criterios técnicos, profesionales o de afinidad cultural requeridos.",
    "policy.sec2.title": "Sobre la información entregada",
    "policy.sec2.p1":
      "Cada persona debe garantizar y soportar que la información entregada es real y verificable. Documentos académicos, certificaciones laborales y referencias podrán ser contrastados con las entidades emisoras.",
    "policy.sec2.p2":
      "Cualquier alteración, falsificación u omisión deliberada de información será causal inmediata de exclusión del proceso y, en caso de haber sido contratado, de terminación unilateral del contrato.",
    "policy.sec3.title": "Sobre la confidencialidad",
    "policy.sec3.p1":
      "Todo lo producido, modificado, creado y/o planeado, al igual que la información manejada dentro de la empresa, es de carácter confidencial y exclusivo. Su uso está restringido al manejo interno de la organización.",
    "policy.sec3.p2":
      "Si existe filtración de información que ha sido clasificada, Grupo Gaviria Cano S.A.S emprenderá las acciones legales correspondientes por violación a los términos del contrato, sin perjuicio de las sanciones disciplinarias y penales aplicables.",
    "policy.sec4.title": "Tratamiento de datos personales",
    "policy.sec4.p1":
      "En cumplimiento de la Ley 1581 de 2012 y sus decretos reglamentarios, los datos personales recibidos en los procesos de selección serán tratados únicamente con fines de evaluación, contacto y, eventualmente, contratación. No serán compartidos con terceros sin consentimiento expreso.",
    "policy.sec4.p2":
      "Cualquier titular podrá ejercer en cualquier momento sus derechos de conocer, actualizar, rectificar o suprimir sus datos personales escribiendo a andres@grupogaviriacano.com.",
    "policy.lastUpdate": "Última actualización: enero de 2026",
    "policy.cta.title": "¿Tienes dudas?",
    "policy.cta.desc":
      "Si necesitas aclaraciones sobre esta política o el proceso de selección, escríbenos directamente.",
    "policy.cta.button": "Contactar a recursos humanos",
    "policy.back": "Volver al inicio",
    "careers.policyLink": "Política y términos de empleo",
  },
  en: {
    "nav.about": "About",
    "nav.companies": "Companies",
    "nav.values": "Values",
    "nav.news": "News",
    "nav.careers": "Careers",
    "nav.contact": "Contact",

    "hero.eyebrow": "Holding company · Investments",
    "hero.title":
      "More than <em>three decades</em><br>investing in the <em>development</em><br>of Colombia.",
    "hero.subtitle":
      "Grupo Gaviria Cano consolidates a portfolio of companies in communications, consulting and advisory — at the service of governments, private companies and a better-informed country.",
    "hero.cta1": "Discover the group",
    "hero.cta2": "Let's talk",
    "hero.companies_label": "Our companies",

    "intro.label": "About us",
    "intro.title":
      "A <em>holding company</em> that originates profitable, solid business lines with a long-term vocation.",
    "intro.p1":
      "We operate as a diversified portfolio of companies in communications, consulting and advisory to private and public sectors. Each year we grow our revenue and EBITDA above the previous, consolidating a group with prestige, efficiency and backing.",
    "intro.p2":
      "Our goal for 2030 is to be listed among the top 500 companies by revenue in Colombia, with more than 35% of revenue from abroad.",
    "intro.cta": "Discover our companies",

    "stats.eyebrow": "Group figures",
    "stats.title": "Results that speak to our <em>commitment</em> in every investment.",
    "stats.s1": "Years of operation",
    "stats.s2": "Proprietary investments",
    "stats.s3": "Diversified companies<br>in Colombia and abroad",
    "stats.s4": "Annual<br>growth",
    "stats.s5": "Team composed<br>of women",
    "stats.s6": "Years in<br>sustainability programs",
    "stats.note": "Figures as of December 2025. Growth calculated on consolidated EBITDA.",

    "empresas.eyebrow": "Subsidiary companies",
    "empresas.title": "Five companies, <em>one vision.</em>",
    "empresas.subtitle":
      "Each of our companies operates with autonomy and specialization, aligned around a common vision of excellence, ethics and sustained growth.",
    "empresas.master.tag": "Holding company",
    "empresas.master.desc":
      "We originate and consolidate long-term investments. As a holding company, we directly manage capital allocation, corporate strategy and coordination across the group.",
    "empresas.master.link": "Learn more",
    "empresas.visit": "Visit",
    "empresas.360.tag": "Media · Radio",
    "empresas.360.desc":
      "Media and radio ecosystem that produces, distributes and monetizes informational and entertainment content, with a strong presence on digital platforms.",
    "empresas.cc.tag": "Communications",
    "empresas.cc.desc":
      "Strategic communications and public relations agency. We design and implement campaigns for stakeholder engagement, spokesperson training, brand positioning and crisis management.",
    "empresas.sdl.tag": "Consulting",
    "empresas.sdl.desc":
      "Strategic consulting for regulated sectors and family businesses. We support transformation processes, corporate governance and financial planning.",
    "empresas.lead.tag": "Advisory",
    "empresas.lead.desc":
      "Advisory to senior management of private companies and government entities. Specialized in strategy, executive spokespersonship and leader preparation.",

    "empresas.subpage.back": "Back to the group",
    "empresas.subpage.about": "About",
    "empresas.subpage.cta.title": "Let's talk",
    "empresas.subpage.cta.desc":
      "Tell us about your project. We respond within 24 business hours.",
    "empresas.subpage.cta.button": "Get in touch",

    "empresas.cc.subpage.intro":
      "CC Media Agency is Grupo Gaviria Cano's strategic communications and public relations firm. We design campaigns that connect brands with the audiences that truly matter.",
    "empresas.cc.subpage.body1":
      "We support companies, leaders and government entities in building narratives that sustain reputation, generate trust and position purpose over time. Every strategy is grounded in rigorous research and executed with editorial discipline.",
    "empresas.cc.subpage.body2":
      "Our approach integrates message planning, media management, spokesperson training, brand positioning and crisis management, all within an ethical, measurable and results-driven framework.",

    "empresas.sdl.subpage.intro":
      "SDL Consulting is Grupo Gaviria Cano's firm focused on urban planning, infrastructure and territorial development.",
    "empresas.sdl.subpage.body1":
      "Cities are growing rapidly and every development requires long-term vision. SDL diagnoses and proposes solutions to infrastructure, mobility and efficient land use challenges, proactively creating more people-friendly environments.",
    "empresas.sdl.subpage.body2":
      "Competitiveness and productivity must be a priority for any city, department or nation. SDL replicates international success stories, adapting them to the realities of each context with local sensitivity and technical rigor.",

    "empresas.lead.subpage.intro":
      "LEAD Advisors is Grupo Gaviria Cano's executive advisory firm. We help public and private leaders make better decisions under pressure.",
    "empresas.lead.subpage.body1":
      "Public and private administration today need synchronized, productive structures to address challenges that demand advanced, long-term solutions. We provide our clients with the tools needed to improve workforce structures, procedures and decision implementation.",
    "empresas.lead.subpage.body2":
      "We are allies in focusing on priority issues and their possible solutions. We advise on security, productivity, employment and administrative management, with extensive experience in the sector.",

    "audience.eyebrow": "Who we serve",
    "audience.title": "We work with <em>those who move</em> the country.",
    "audience.1.title": "Shareholders",
    "audience.1.desc":
      "We generate consistent returns through a diversified, disciplined portfolio with a long-term horizon and ethics in every decision.",
    "audience.2.title": "Governments",
    "audience.2.desc":
      "We support public entities in communication strategy, spokespersonship, initiative positioning and institutional relations.",
    "audience.3.title": "Private companies",
    "audience.3.desc":
      "We provide consulting, advisory and media and communications services to companies seeking growth, positioning and reputation management.",
    "audience.4.title": "Citizens",
    "audience.4.desc":
      "Through our media and publications we contribute to a better-informed society — largely in a philanthropic and independent capacity.",

    "compromise.eyebrow": "Our commitments",
    "compromise.title": "Investment that <em>matters</em>.",
    "compromise.subtitle":
      "Beyond the numbers, there is a way of doing things that defines the group.",
    "compromise.feature.eyebrow": "Above all",
    "compromise.feature.title":
      "Believe in Colombia. <em>Invest in Colombia.</em><br>Want the country to do better.",
    "compromise.feature.desc":
      "Behind every decision of the group there is a real commitment to the country's development. We invest where others hesitate, hire local talent, sustain independent media and contribute to a better-informed public conversation. Not out of philanthropy: because we believe in what we are capable of building together.",
    "compromise.1.title": "Workplace diversity",
    "compromise.1.desc":
      "More than 62% of our team are women. We bet on diverse teams as the engine of better decisions.",
    "compromise.2.title": "Sustainability",
    "compromise.2.desc":
      "We've spent six years running sustainability programs to improve operational efficiency and environmental impact across the group.",
    "compromise.3.title": "Education and culture",
    "compromise.3.desc":
      "Through our media we invest, in a way that can't easily be quantified, in the education, information and culture of Colombians.",

    "values.eyebrow": "Corporate values",
    "values.title": "Our convictions <em>in business</em>.",
    "values.1.num": "01 / Respect",
    "values.1.title": "Respect",
    "values.1.desc":
      "Inclusion and tolerance are essential in every one of our processes. A society that respects itself moves forward effectively.",
    "values.2.num": "02 / Responsibility",
    "values.2.title": "Responsibility",
    "values.2.desc":
      "We act with prudence and objectivity, considering the rights and needs of every person and organization we engage with.",
    "values.3.num": "03 / Commitment",
    "values.3.title": "Commitment",
    "values.3.desc":
      "Our promise is to be efficient. To reach the highest standards of service, work and integral support.",
    "values.4.num": "04 / Loyalty",
    "values.4.title": "Loyalty",
    "values.4.desc":
      "We are loyal to our partners. We seek to build reciprocal, sustained, long-term relationships.",

    "news.eyebrow": "Latest news",
    "news.title": "What's happening across the <em>group</em>.",
    "news.viewAll": "View all",
    "news.1.cat": "Investments",
    "news.1.title":
      "Grupo Gaviria Cano expands international presence with new operations from Doral, FL",
    "news.1.date": "April · 2026",
    "news.2.cat": "360 · Media",
    "news.2.title":
      "360 Colombia surpasses 18 million social media impressions in the year's first quarter",
    "news.2.date": "March · 2026",
    "news.3.cat": "Sustainability",
    "news.3.title":
      "Sixth year of the sustainability program: an operational efficiency review across the group's companies",
    "news.3.date": "February · 2026",

    "careers.eyebrow": "People",
    "careers.title": "Grow, learn, <em>contribute</em>.",
    "careers.desc":
      "The group is made by its people. We look for curious folks who want to grow with us, build knowledge capital and share our values. If that sounds like you, your ideas have a place here.",
    "careers.1.title": "Open positions",
    "careers.1.sub": "What we're looking for right now",
    "careers.2.title": "Drop us your resume",
    "careers.2.sub": "We'll reach out when something opens up",
    "careers.3.title": "Are you still studying?",
    "careers.3.sub": "Internship program for university students",

    "contact.eyebrow": "Contact",
    "contact.title": "Let's talk.<br><em>We're a message away.</em>",
    "contact.desc":
      "Write to us directly, give us a call or visit our offices. We respond within 24 business hours.",
    "contact.direct.email": "Direct email",
    "contact.direct.phone": "Call us",
    "contact.direct.linkedin": "LinkedIn",
    "contact.form.title": "Send us a message",
    "contact.form.sub": "Tell us how we can help. We respond in less than 24 hours.",
    "contact.name": "Full name",
    "contact.company": "Company",
    "contact.optional": "(optional)",
    "contact.email": "Email address",
    "contact.reason": "What's it about?",
    "contact.message": "Tell us more",
    "contact.send": "Send message",
    "contact.disclaimer": "By submitting this form you accept our personal data treatment policy.",
    "contact.opt1": "General information",
    "contact.opt2": "Investment opportunity",
    "contact.opt3": "Communications services",
    "contact.opt4": "Consulting services",
    "contact.opt5": "Advisory services",
    "contact.opt6": "Careers / Open positions",
    "contact.opt7": "Press / Media",
    "contact.offices.title": "Our offices",
    "contact.hours.label": "Business hours",
    "contact.hours.value": "Monday to Friday · 8:00 am – 6:00 pm (COT)",
    "office.medellin.city": "Medellín, Colombia",
    "office.medellin.role": "Headquarters",
    "office.medellin.address": "Carrera 43A #16A Sur 38<br>DHL Building · Suite 1106",
    "office.doral.city": "Doral, Florida",
    "office.doral.role": "International operations",
    "office.doral.address": "7801 NW 37th Street<br>Doral, FL 33195-6503",

    "footer.brand":
      "Holding company of investments in communications, consulting and advisory to private companies and governments. Medellín · Doral.",
    "footer.companies": "Companies",
    "footer.group": "Group",
    "footer.contactTitle": "Contact",
    "footer.writeUs": "Write to us",
    "footer.offices": "Offices",
    "footer.openings": "Open positions",
    "footer.press": "Press",
    "footer.copyright": "© 2026 Grupo Gaviria Cano S.A.S — All rights reserved",
    "footer.policy": "Data protection policy",

    "form.success": "Thank you. Your message has been registered and forwarded to our team.",

    "policy.eyebrow": "Legal framework · Careers",
    "policy.title": "Employment policy and <em>information handling</em>.",
    "policy.intro":
      "The following provisions apply to every selection, hiring and contractual relationship with Grupo Gaviria Cano S.A.S. Please read them carefully before applying.",
    "policy.sec1.title": "On the selection process",
    "policy.sec1.p1":
      "Grupo Gaviria Cano S.A.S does not guarantee the selection of any candidate at any point in the process. Each case is evaluated by a special committee responsible for selecting the appropriate person.",
    "policy.sec1.p2":
      "The selected person is notified via email of their selection for the position, along with the instructions to follow.",
    "policy.sec1.p3":
      "The company reserves the right to declare a search closed without a selection if no applicant meets the required technical, professional or cultural fit criteria.",
    "policy.sec2.title": "On the information you provide",
    "policy.sec2.p1":
      "Each person must guarantee and support that the information provided is true and verifiable. Academic documents, employment certifications and references may be contrasted with the issuing entities.",
    "policy.sec2.p2":
      "Any alteration, falsification or deliberate omission will be immediate grounds for exclusion from the process and, if already hired, for unilateral termination of the contract.",
    "policy.sec3.title": "On confidentiality",
    "policy.sec3.p1":
      "Everything produced, modified, created and/or planned, as well as information handled inside the company, is confidential and exclusive in nature. Its use is restricted to internal organizational handling.",
    "policy.sec3.p2":
      "Should there be a leak of classified information, Grupo Gaviria Cano S.A.S will pursue the corresponding legal actions for breach of contract, without prejudice to the applicable disciplinary and criminal sanctions.",
    "policy.sec4.title": "Personal data treatment",
    "policy.sec4.p1":
      "In compliance with Colombian Law 1581 of 2012 and its regulatory decrees, personal data received during selection processes will be used solely for evaluation, contact and eventual hiring purposes. It will not be shared with third parties without express consent.",
    "policy.sec4.p2":
      "Data subjects may at any time exercise their rights to know, update, rectify or delete their personal information by writing to andres@grupogaviriacano.com.",
    "policy.lastUpdate": "Last updated: January 2026",
    "policy.cta.title": "Questions?",
    "policy.cta.desc":
      "If you need clarification on this policy or the selection process, please reach out directly.",
    "policy.cta.button": "Contact human resources",
    "policy.back": "Back to home",
    "careers.policyLink": "Employment policy and terms",
  },
};
