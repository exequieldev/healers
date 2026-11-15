export const TRIAGE_PROTOCOL = {
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
