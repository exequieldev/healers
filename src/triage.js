export const TRIAGE_PROTOCOL = {
  bodyQuestions: {
    mus: {
      es: [
        '¿Siente dolor o molestia en esa zona?',
        '¿El dolor empeora al moverla o usarla?',
        '¿Ha notado hinchazón o sensibilidad al tocarla?',
        '¿Tuvo un golpe o lesión reciente en esa zona?',
      ],
      en: [
        'Do you feel pain or discomfort in that area?',
        'Does the pain worsen when you move or use it?',
        'Have you noticed swelling or tenderness when touched?',
        'Have you had a recent impact or injury in that area?',
      ],
    },
    esq: {
      es: [
        '¿Siente dolor o molestia cerca de esta estructura?',
        '¿El dolor empeora al moverse o al cargar peso?',
        '¿Ha notado hinchazón o sensibilidad al tocar la zona?',
        '¿Tuvo una caída, golpe o lesión reciente?',
      ],
      en: [
        'Do you feel pain or discomfort near this structure?',
        'Does the pain worsen with movement or weight-bearing?',
        'Have you noticed swelling or tenderness in the area?',
        'Have you had a recent fall, impact, or injury?',
      ],
    },
    teg: {
      es: [
        '¿Ha notado cambios recientes en la piel de esa zona?',
        '¿Presenta picazón, enrojecimiento o irritación?',
        '¿Hay una herida, ampolla o secreción?',
        '¿La zona está hinchada, caliente o sensible?',
      ],
      en: [
        'Have you noticed recent changes in the skin in that area?',
        'Do you have itching, redness, or irritation?',
        'Is there a wound, blister, or discharge?',
        'Is the area swollen, warm, or tender?',
      ],
    },
    ner: {
      es: [
        '¿Ha notado debilidad o pérdida de sensibilidad recientemente?',
        '¿Tiene dificultad nueva para coordinar movimientos o mantener el equilibrio?',
        '¿Ha tenido cambios repentinos en la visión, el habla o el estado de alerta?',
        '¿Presenta dolor de cabeza intenso y de aparición repentina?',
      ],
      en: [
        'Have you recently noticed weakness or loss of sensation?',
        'Are you having new difficulty coordinating movements or keeping your balance?',
        'Have you had sudden changes in vision, speech, or alertness?',
        'Are you experiencing a severe, sudden-onset headache?',
      ],
    },
    car: {
      es: [
        '¿Siente presión, dolor o molestia en el pecho?',
        '¿Ha notado latidos irregulares o palpitaciones?',
        '¿Presenta falta de aire, incluso en reposo?',
        '¿Ha tenido mareos, desmayos o hinchazón en las piernas?',
      ],
      en: [
        'Do you feel pressure, pain, or discomfort in your chest?',
        'Have you noticed an irregular heartbeat or palpitations?',
        'Are you short of breath, even at rest?',
        'Have you had dizziness, fainting, or leg swelling?',
      ],
    },
    res: {
      es: [
        '¿Le cuesta respirar o siente falta de aire?',
        '¿Tiene tos nueva o persistente?',
        '¿Siente silbidos o presión en el pecho al respirar?',
        '¿Tiene fiebre o expulsa flema al toser?',
      ],
      en: [
        'Are you having difficulty breathing or feeling short of breath?',
        'Do you have a new or persistent cough?',
        'Do you feel wheezing or chest tightness when breathing?',
        'Do you have a fever or cough up mucus?',
      ],
    },
    dig: {
      es: [
        '¿Tiene dolor o molestia abdominal?',
        '¿Presenta náuseas, vómitos o dificultad para tragar?',
        '¿Ha notado cambios recientes en sus deposiciones?',
        '¿Ha observado sangre en el vómito o en las deposiciones?',
      ],
      en: [
        'Do you have abdominal pain or discomfort?',
        'Are you experiencing nausea, vomiting, or difficulty swallowing?',
        'Have you noticed recent changes in your bowel movements?',
        'Have you noticed blood in your vomit or bowel movements?',
      ],
    },
    uri: {
      es: [
        '¿Siente dolor o ardor al orinar?',
        '¿Ha notado que orina con más frecuencia o urgencia?',
        '¿Ha cambiado el color o el aspecto de la orina?',
        '¿Tiene dolor en la parte baja del abdomen o en la espalda, o fiebre?',
      ],
      en: [
        'Do you feel pain or burning when urinating?',
        'Have you noticed increased urinary frequency or urgency?',
        'Has the color or appearance of your urine changed?',
        'Do you have lower abdominal or back pain, or a fever?',
      ],
    },
    rep: {
      es: [
        '¿Siente dolor o molestia en esta zona?',
        '¿Ha notado hinchazón, bultos o cambios en la piel?',
        '¿Presenta dolor o dificultad al orinar?',
        '¿Ha notado secreción o algún cambio reciente que le preocupe?',
      ],
      en: [
        'Do you feel pain or discomfort in this area?',
        'Have you noticed swelling, lumps, or skin changes?',
        'Do you have pain or difficulty when urinating?',
        'Have you noticed discharge or any recent change that concerns you?',
      ],
    },
    end: {
      es: [
        '¿Ha notado un cambio inusual en su nivel de energía?',
        '¿Ha tenido cambios inexplicables de peso o de tolerancia al frío o al calor?',
        '¿Tiene más sed u orina más de lo habitual?',
        '¿Ha notado cambios recientes en el ritmo de sus latidos?',
      ],
      en: [
        'Have you noticed an unusual change in your energy level?',
        'Have you had unexplained weight changes or changes in how you tolerate cold or heat?',
        'Are you thirstier or urinating more than usual?',
        'Have you noticed recent changes in your heartbeat?',
      ],
    },
    lin: {
      es: [
        '¿Ha notado ganglios o zonas hinchadas recientemente?',
        '¿La zona hinchada duele o es sensible al tocarla?',
        '¿Tiene fiebre o ha tenido infecciones recientes?',
        '¿Ha tenido sudoración nocturna o pérdida de peso sin proponérselo?',
      ],
      en: [
        'Have you recently noticed swollen lymph nodes or areas?',
        'Is the swollen area painful or tender to touch?',
        'Do you have a fever or have you had recent infections?',
        'Have you had night sweats or unintentional weight loss?',
      ],
    },
  },
  regions: {
    frontal: {
      code: 'ZONE-01',
      title: {es: 'Frontal', en: 'Frontal'},
      description: {
        es: 'Frente, región supraorbitaria y por encima de las cejas.',
        en: 'Forehead, supraorbital area, and above the eyebrows.',
      },
    },
    temporal: {
      code: 'ZONE-02',
      title: {es: 'Temporal / parietal', en: 'Temporal / parietal'},
      description: {
        es: 'Sienes y regiones laterales o superiores de la cabeza.',
        en: 'Temples and the lateral or upper areas of the head.',
      },
    },
    occipital: {
      code: 'ZONE-03',
      title: {es: 'Occipital', en: 'Occipital'},
      description: {
        es: 'Nuca y región posterior del cráneo.',
        en: 'Nape and posterior region of the skull.',
      },
    },
  },
  redFlags: {
    es: [
      '¿El dolor comenzó de manera súbita y alcanzó su máxima intensidad en segundos o minutos?',
      '¿Es el peor dolor de cabeza que experimentó en su vida?',
      '¿Presenta debilidad o pérdida de sensibilidad en un brazo, pierna o lado de la cara?',
      '¿Tiene dificultad para hablar, comprender o caminar?',
      '¿Presenta pérdida de visión, visión doble o alteración visual repentina?',
      '¿Tiene fiebre acompañada de rigidez de cuello?',
      '¿Presenta confusión, somnolencia o pérdida de conciencia?',
      '¿Tuvo convulsiones?',
      '¿Sufrió un traumatismo en la cabeza recientemente?',
      '¿Presenta vómitos repetidos junto con un dolor de cabeza?',
    ],
    en: [
      'Did the pain begin suddenly and reach maximum intensity within seconds or minutes?',
      'Is this the worst headache you have ever experienced?',
      'Do you have weakness or loss of sensation in an arm, leg, or one side of the face?',
      'Are you having difficulty speaking, understanding, or walking?',
      'Have you had sudden vision loss, double vision, or another sudden visual change?',
      'Do you have a fever accompanied by a stiff neck?',
      'Are you experiencing confusion, drowsiness, or loss of consciousness?',
      'Have you had a seizure?',
      'Have you recently had a head injury?',
      'Are you experiencing repeated vomiting along with a headache?',
    ],
  },
  emergencyChecklist: {
    es: [
      'Activar Alarma Roja en módulo médico.',
      'Avisar a Control en Tierra (Telemetría médica prioritaria).',
      'Realizar evaluación neurológica completa.',
      'Proceder con estabilización del tripulante.',
      'Coordinar atención médica urgente / evacuación si aplica.',
    ],
    en: [
      'Activate the Red Alert in the medical module.',
      'Notify Ground Control (priority medical telemetry).',
      'Perform a complete neurological assessment.',
      'Proceed with crew-member stabilization.',
      'Coordinate urgent medical care / evacuation if applicable.',
    ],
  },
  emergencyDetails: {
    es: [
      [
        'Usa el control de emergencia asignado para activar Alarma Roja en el módulo médico.',
        'Suspende las tareas no esenciales y despeja el módulo médico, manteniendo libres las rutas de acceso.',
        'Reúne al resto de la tripulación y asigna funciones de apoyo: comunicaciones, monitorización y asistencia al equipo médico.',
      ],
      [
        'Abre el canal de emergencia con los cirujanos de vuelo y Control de Misión conforme al procedimiento.',
        'Prioriza la transmisión en tiempo real de los signos vitales y los datos ambientales de cabina.',
      ],
      [
        'Registra el nivel de conciencia, la orientación en tiempo, espacio y persona, y cualquier cambio en el habla; comunica los hallazgos a Control en Tierra.',
        'Solo personal entrenado debe realizar las comprobaciones neurológicas previstas en el protocolo y comunicar los resultados al equipo médico.',
      ],
      [
        'Mantén al tripulante protegido de golpes en una ubicación segura; evita traslados o sujeciones salvo que lo indiquen el protocolo y el equipo médico.',
        'El oxígeno y cualquier soporte de vía aérea o ventilatorio deben ser administrados solo por personal capacitado, siguiendo indicaciones médicas en tiempo real y el protocolo aprobado.',
        'No administres medicación ni realices primeros auxilios avanzados sin indicación del equipo médico en Tierra.',
      ],
      [
        'Mantén la vigilancia y comunica los cambios clínicos al equipo médico de Control en Tierra según el protocolo de la misión.',
        'La preparación de una cápsula de retorno y cualquier evacuación deben coordinarse con Control en Tierra y seguir el plan aprobado de la misión.',
      ],
    ],
    en: [
      [
        'Use the assigned emergency control to activate the Red Alert in the medical module.',
        'Stop non-essential tasks and clear the medical module, keeping access routes open.',
        'Gather the crew and assign support roles: communications, monitoring, and assistance to the medical team.',
      ],
      [
        'Open the emergency channel with the flight surgeons and Mission Control according to procedure.',
        'Prioritize real-time transmission of vital signs and cabin environmental data.',
      ],
      [
        'Record level of consciousness, orientation to time, place, and person, and any speech changes; relay findings to Ground Control.',
        'Only trained personnel should perform the neurological checks specified by protocol and report the results to the medical team.',
      ],
      [
        'Keep the crew member protected from impact in a safe location; avoid moving or restraining them unless directed by protocol and the medical team.',
        'Oxygen and any airway or ventilatory support should only be provided by trained personnel, following real-time medical direction and the approved protocol.',
        'Do not administer medication or perform advanced first aid without direction from the medical team on Earth.',
      ],
      [
        'Maintain observation and report clinical changes to the Ground Control medical team according to mission protocol.',
        'Preparing a return capsule and any evacuation must be coordinated with Ground Control and follow the approved mission plan.',
      ],
    ],
  },
  specificQuestions: {
    frontal: {
      es: [
        '¿Siente presión en la frente o sobre las cejas?',
        '¿El dolor se extiende hacia detrás de los ojos?',
        '¿Tiene congestión nasal o secreción nasal?',
        '¿Siente presión o dolor en la cara?',
        '¿El dolor aumenta cuando se inclina hacia adelante?',
        '¿Presenta sensibilidad a la luz o al ruido?',
        '¿Tiene náuseas o vómitos?',
        '¿Ha pasado muchas horas frente a pantallas o realizando tareas visuales?',
        '¿Tiene visión borrosa o fatiga ocular?',
      ],
      en: [
        'Do you feel pressure in your forehead or above your eyebrows?',
        'Does the pain spread behind your eyes?',
        'Do you have nasal congestion or a runny nose?',
        'Do you feel pressure or pain in your face?',
        'Does the pain worsen when you lean forward?',
        'Are you sensitive to light or noise?',
        'Do you have nausea or vomiting?',
        'Have you spent many hours looking at screens or doing visual tasks?',
        'Do you have blurred vision or eye strain?',
      ],
    },
    temporal: {
      es: [
        '¿El dolor se encuentra en una o ambas sienes?',
        '¿Siente pulsaciones en la zona temporal?',
        '¿El dolor se extiende hacia la parte superior de la cabeza?',
        '¿Presenta sensibilidad al tocarse la sien?',
        '¿Siente dolor al masticar?',
        '¿Tiene náuseas o sensibilidad a la luz y al ruido?',
        '¿El dolor aparece en episodios o es continuo?',
        '¿Presenta lagrimeo, enrojecimiento ocular o congestión nasal del mismo lado?',
        '¿El dolor interfiere con sus actividades habituales?',
      ],
      en: [
        'Is the pain in one or both temples?',
        'Do you feel a throbbing sensation in the temporal area?',
        'Does the pain spread to the top of your head?',
        'Is your temple sensitive to touch?',
        'Does it hurt when you chew?',
        'Do you have nausea or sensitivity to light and noise?',
        'Does the pain occur in episodes or is it continuous?',
        'Do you have tearing, eye redness, or nasal congestion on the same side?',
        'Does the pain interfere with your usual activities?',
      ],
    },
    occipital: {
      es: [
        '¿El dolor comienza en la nuca y asciende hacia la parte posterior de la cabeza?',
        '¿Se extiende hacia uno o ambos lados?',
        '¿Tiene dolor o rigidez cervical?',
        '¿Empeora al girar o mover el cuello?',
        '¿Siente pinchazos o descargas eléctricas en la parte posterior de la cabeza?',
        '¿Pasa muchas horas en una misma posición?',
        '¿El dolor aumenta al mantener una postura determinada?',
        '¿Presenta mareos o alteraciones visuales?',
      ],
      en: [
        'Does the pain start in your nape and move up the back of your head?',
        'Does it spread to one or both sides?',
        'Do you have neck pain or stiffness?',
        'Does it worsen when you turn or move your neck?',
        'Do you feel stabbing pain or electric shocks at the back of your head?',
        'Do you spend many hours in the same position?',
        'Does the pain increase when you maintain a particular posture?',
        'Do you have dizziness or visual changes?',
      ],
    },
  },
};
