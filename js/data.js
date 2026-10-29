/* ============================================================
   Datos de la ofrenda · Mictlán Digital
   ============================================================ */

window.DDM = {
  /* ---------- Videojuegos descontinuados ---------- */
  games: [
    {
      id: "club-penguin",
      name: "Club Penguin",
      icon: "🐧",
      years: "2005 — 2017",
      born: "24 de octubre de 2005",
      died: "29 de marzo de 2017",
      platform: "Online · PC",
      tags: ["online", "pc"],
      cause: "Sustituido por su secuela",
      epitaph: "Aquí yace la isla donde todos fuimos pingüinos.",
      desc: "El MMO de Disney cerró sus puertas tras más de once años de fiestas, iglús y puffles. Millones de jugadores migraron a Club Penguin Island, la secuela que tampoco sobrevivió: cerró en diciembre de 2018."
    },
    {
      id: "city-of-heroes",
      name: "City of Heroes",
      icon: "🦸",
      years: "2004 — 2012",
      born: "28 de abril de 2004",
      died: "30 de noviembre de 2012",
      platform: "PC · Online",
      tags: ["pc", "online"],
      cause: "Cierre del estudio Paragon",
      epitaph: "Los héroes no mueren: les apagan los servidores.",
      desc: "Uno de los primeros MMO de superhéroes. NCsoft cerró Paragon Studios y con él el juego, pese a una comunidad que organizó vigilias virtuales en la plaza de Atlas Park para despedirse."
    },
    {
      id: "flappy-bird",
      name: "Flappy Bird",
      icon: "🐤",
      years: "2013 — 2014",
      born: "24 de mayo de 2013",
      died: "9 de febrero de 2014",
      platform: "Móvil",
      tags: ["movil"],
      cause: "Retirado por su creador",
      epitaph: "Voló tan alto que su creador lo bajó del mercado.",
      desc: "Dong Nguyen retiró su juego de las tiendas porque el éxito lo estaba arruinando: no podía dormir y la fama lo superaba. Los teléfonos con el juego instalado se vendieron como reliquias."
    },
    {
      id: "overwatch",
      name: "Overwatch",
      icon: "🛡️",
      years: "2016 — 2022",
      born: "24 de mayo de 2016",
      died: "4 de octubre de 2022",
      platform: "PC · Consola",
      tags: ["pc", "consola", "online"],
      cause: "Fusionado con su secuela",
      epitaph: "El primer disparo de la eternidad.",
      desc: "Blizzard reemplazó el Overwatch original por Overwatch 2. Los servidores del primero se apagaron para siempre y con ellos se fueron los seis contra seis y las cajas de botín."
    },
    {
      id: "mario-35",
      name: "Super Mario Bros. 35",
      icon: "🍄",
      years: "2020 — 2021",
      born: "1 de octubre de 2020",
      died: "31 de marzo de 2021",
      platform: "Nintendo Switch",
      tags: ["consola", "online"],
      cause: "Evento de tiempo limitado",
      epitaph: "Un battle royale con fecha de caducidad.",
      desc: "Nintendo lanzó este battle royale de Mario para celebrar el 35.º aniversario de la saga y lo apagó seis meses después. Hoy solo queda el recuerdo de 35 Marios saltando a la vez."
    },
    {
      id: "miitomo",
      name: "Miitomo",
      icon: "👥",
      years: "2016 — 2018",
      born: "17 de marzo de 2016",
      died: "9 de mayo de 2018",
      platform: "Móvil",
      tags: ["movil"],
      cause: "Nintendo cerró su primera app",
      epitaph: "Tus Mii ya no tienen dónde cotillear.",
      desc: "La primera incursión de Nintendo en móviles fue una red social de avatares. Cerró dos años después, dejando a los Mii sin escenario y a los jugadores sin sus respuestas más vergonzosas."
    },
    {
      id: "apex-mobile",
      name: "Apex Legends Mobile",
      icon: "🎯",
      years: "2022 — 2023",
      born: "17 de mayo de 2022",
      died: "1 de mayo de 2023",
      platform: "Móvil",
      tags: ["movil", "online"],
      cause: "Métricas insuficientes",
      epitaph: "La leyenda móvil duró menos que una temporada.",
      desc: "EA y Respawn apostaron por llevar Apex a los teléfonos, pero el juego no alcanzó las métricas esperadas. Cerró menos de un año después de su lanzamiento mundial."
    },
    {
      id: "marvel-heroes",
      name: "Marvel Heroes",
      icon: "🕷️",
      years: "2013 — 2017",
      born: "4 de junio de 2013",
      died: "24 de noviembre de 2017",
      platform: "PC · Online",
      tags: ["pc", "online"],
      cause: "Licencia revocada",
      epitaph: "Los superhéroes también pierden su contrato.",
      desc: "El ARPG de Diablo con superhéroes de Marvel cerró cuando la relación entre Gazillion y Marvel se rompió. La noticia llegó con el despido de todo el estudio y un apagón casi inmediato."
    },
    {
      id: "pokemon-duel",
      name: "Pokémon Duel",
      icon: "🎲",
      years: "2016 — 2019",
      born: "12 de abril de 2016",
      died: "31 de octubre de 2019",
      platform: "Móvil",
      tags: ["movil"],
      cause: "Fin de servicio",
      epitaph: "El tablero se cerró justo en Halloween.",
      desc: "El juego de estrategia con figuras de Pokémon dejó de funcionar el 31 de octubre de 2019. Sus piezas digitales quedaron congeladas para siempre sobre el tablero."
    },
    {
      id: "star-wars-galaxies",
      name: "Star Wars Galaxies",
      icon: "⭐",
      years: "2003 — 2011",
      born: "26 de junio de 2003",
      died: "15 de diciembre de 2011",
      platform: "PC · Online",
      tags: ["pc", "online"],
      cause: "La Fuerza se apagó",
      epitaph: "Que la Fuerza te acompañe, aunque el servidor no.",
      desc: "El MMO de Star Wars sobrevivió ocho años, pero LucasArts no renovó su contrato con Sony Online Entertainment. Los jugadores se reunieron una última vez en Tatooine antes del apagón."
    },
    {
      id: "knockout-city",
      name: "Knockout City",
      icon: "🏐",
      years: "2021 — 2023",
      born: "21 de mayo de 2021",
      died: "6 de junio de 2023",
      platform: "Online · Multi",
      tags: ["online", "consola", "pc"],
      cause: "Cierre de Velan Studios",
      epitaph: "El último balón quedó en el aire.",
      desc: "El juego de dodgeball multijugador pasó a free-to-play y luego a un modelo de servidores privados. Velan Studios cerró el servicio oficial en junio de 2023."
    },
    {
      id: "rumbleverse",
      name: "Rumbleverse",
      icon: "🤼",
      years: "2022 — 2023",
      born: "11 de agosto de 2022",
      died: "28 de febrero de 2023",
      platform: "Online · Multi",
      tags: ["online", "consola", "pc"],
      cause: "Cierre tras seis meses",
      epitaph: "La lucha libre digital duró un suspiro.",
      desc: "El battle royale de lucha libre de Iron Galaxy apenas tuvo tiempo de encontrar su público. Epic y el estudio anunciaron el cierre seis meses después del lanzamiento."
    }
  ],

  /* ---------- Software difunto ---------- */
  software: [
    { icon: "💬", name: "MSN Messenger", years: "1999 — 2013", cause: "Reemplazado por Skype" },
    { icon: "📖", name: "Google Reader", years: "2005 — 2013", cause: "“Limpieza” de productos" },
    { icon: "🎬", name: "Vine", years: "2013 — 2017", cause: "Nunca encontró negocio" },
    { icon: "🧩", name: "Flash Player", years: "1996 — 2020", cause: "La web lo dejó atrás" },
    { icon: "🪟", name: "Windows XP", years: "2001 — 2014", cause: "Fin de soporte" },
    { icon: "🎮", name: "Google Stadia", years: "2019 — 2023", cause: "La nube no alcanzó" },
    { icon: "🎵", name: "iPod Classic", years: "2001 — 2014", cause: "El streaming lo alcanzó" },
    { icon: "📱", name: "Windows Phone", years: "2010 — 2017", cause: "Pocas apps, poca suerte" },
    { icon: "🌐", name: "Internet Explorer", years: "1995 — 2022", cause: "Su propio meme lo venció" },
    { icon: "🕹️", name: "PlayStation Home", years: "2008 — 2015", cause: "Mundo virtual cerrado" },
    { icon: "📡", name: "Nintendo Wi-Fi Connection", years: "2005 — 2014", cause: "Fin del juego online" },
    { icon: "🛒", name: "eShop de 3DS y Wii U", years: "2011 — 2023", cause: "Cierre de la tienda" }
  ],

  /* ---------- Ofrenda digital ---------- */
  ofrenda: [
    {
      id: "pan",
      emoji: "🍞",
      name: "Pan de muerto",
      tech: "Pan de datos",
      detail: "Cada mordida es un byte de memoria. En la ofrenda digital representa los respaldos: lo que guardamos para que el alma de un proyecto no se pierda cuando el servidor se apaga."
    },
    {
      id: "vela",
      emoji: "🕯️",
      name: "Veladoras",
      tech: "LED de standby",
      detail: "La lucecita que nunca se apaga del todo. Como el LED de tu monitor a las 3 a.m., que te recuerda que la máquina sigue ahí, esperando un clic."
    },
    {
      id: "agua",
      emoji: "💧",
      name: "Agua",
      tech: "Refrigeración líquida",
      detail: "Para calmar la sed de los procesadores que trabajaron de más. Un buen loop de agua es la ofrenda que todo overclocker le debe a su CPU."
    },
    {
      id: "sal",
      emoji: "🧂",
      name: "Sal",
      tech: "Firewall",
      detail: "La línea que separa lo puro de lo corrupto. En el altar, la sal protege el código; en la red, el firewall impide que entren los virus con hambre."
    },
    {
      id: "cempasuchil",
      emoji: "🌼",
      name: "Cempasúchil",
      tech: "Píxeles naranjas",
      detail: "El color que guía a las almas de regreso. En una pantalla, los píxeles naranjas son el camino de migas que deja un servidor caído para que lo encontremos."
    },
    {
      id: "copal",
      emoji: "💨",
      name: "Copal",
      tech: "Ventilador del gabinete",
      detail: "Humo que limpia el ambiente. El ventilador hace lo mismo con el calor: ahuyenta a los espíritus del throttling y mantiene el alma del PC fresca."
    },
    {
      id: "calaverita",
      emoji: "💀",
      name: "Calaverita de azúcar",
      tech: "Avatar",
      detail: "Un rostro que no es el tuyo, pero te representa. Como tu foto de perfil: una calavera de azúcar que sonríe en cada foro y en cada partida."
    },
    {
      id: "foto",
      emoji: "🖼️",
      name: "Fotografía",
      tech: "Foto de perfil",
      detail: "El retrato que deja constancia de que estuvimos aquí. Cuando una cuenta se cierra, su avatar se vuelve la última fotografía en la ofrenda."
    },
    {
      id: "papel",
      emoji: "🎉",
      name: "Papel picado",
      tech: "CSS",
      detail: "Formas recortadas con precisión milimétrica. El papel picado es el primer diseño responsivo: se adapta al viento, como el CSS se adapta a la pantalla."
    }
  ],

  /* ---------- Calaveritas ---------- */
  calaveritas: [
    {
      title: "La RAM que se fue",
      lines: [
        "Estaba la RAM en su banco de memoria,",
        "presumiendo sus gigas con mucha gloria;",
        "llegó la Catrina con un virus mortal",
        "y le borró los datos sin pedir perdón.",
        "En el Mictlán digital no hay papelera:",
        "lo que no se respalda se queda en el cajón."
      ]
    },
    {
      title: "El procesador inmortal",
      lines: [
        "El procesador se creía inmortal,",
        "presumía de núcleos en la feria virtual;",
        "llegó la muerte con overclock de pasión",
        "y le apagó el ventilador del corazón.",
        "Su epitafio quedó grabado en la placa:",
        "“Aquí yace un chip que nunca se rindió”."
      ]
    },
    {
      title: "El pajarito de píxeles",
      lines: [
        "Voló tan alto el pájaro de píxeles",
        "que su creador lo bajó del mercado;",
        "la Catrina lo vio tan adictivo",
        "que lo guardó en su celular dorado.",
        "Los gamers lo recuerdan con una lágrima",
        "y un récord que ya nadie puede romper."
      ]
    },
    {
      title: "El último zumbido",
      lines: [
        "El MSN tocó su último “nudge”,",
        "la Catrina cambió su estado a “Ausente”;",
        "los zumbidos se fueron al Mictlán",
        "y el “woo-hoo” quedó en el aire caliente.",
        "Ya nadie escribe “hola, ¿estás?”",
        "sin que el fantasma del Messenger conteste."
      ]
    },
    {
      title: "Píxeles al cielo",
      lines: [
        "La tarjeta gráfica soñaba con 4K,",
        "renderizando mundos que nunca existieron;",
        "la muerte le quitó los drivers de un golpe",
        "y sus píxeles al cielo se fueron.",
        "En la ofrenda le pusieron una veladora RGB",
        "para que alumbre los juegos que perdimos."
      ]
    },
    {
      title: "No bootable device",
      lines: [
        "El disco duro guardaba secretos,",
        "fotos, tareas y un amor en MP3;",
        "la Catrina formateó sin avisar",
        "y el pobre quedó en “no bootable device”.",
        "Su alma pesa 0.0001 gramos de datos:",
        "lo que queda de nosotros cuando no hay backup."
      ]
    },
    {
      title: "El módem de 56k",
      lines: [
        "Se murió el módem de tanto esperar,",
        "con su luz de standby parpadeando;",
        "San Pedro le negó la conexión",
        "porque el WiFi del cielo estaba saturado.",
        "Y desde entonces su fantasma navega",
        "a 56k por los pasillos del Mictlán."
      ]
    },
    {
      title: "Insert coin",
      lines: [
        "En el arcade del barrio hay una tumba",
        "con un joystick marchito y un “insert coin”;",
        "la Catrina jugó su última partida",
        "y se llevó el high score en su bolsón.",
        "Los fantasmas siguen pulsando botones",
        "porque morir no es razón para dejar de jugar."
      ]
    }
  ],

  /* ---------- Trivia ---------- */
  trivia: [
    {
      q: "¿Qué red social de videos de seis segundos cerró en 2017?",
      options: ["TikTok", "Vine", "Snapchat"],
      answer: 1,
      explain: "Vine cerró en enero de 2017. Sus loops de seis segundos quedaron como reliquia de internet."
    },
    {
      q: "¿Qué consola en la nube de Google cerró en 2023?",
      options: ["Luna", "OnLive", "Stadia"],
      answer: 2,
      explain: "Google Stadia cerró el 18 de enero de 2023 y devolvió el dinero de las compras."
    },
    {
      q: "¿Qué battle royale de Mario dejó de existir el 31 de marzo de 2021?",
      options: ["Tetris 99", "Super Mario Bros. 35", "Mario Royale"],
      answer: 1,
      explain: "Super Mario Bros. 35 fue un evento limitado por el 35.º aniversario de la saga."
    },
    {
      q: "¿Qué mensajero de Microsoft fue reemplazado por Skype en 2013?",
      options: ["Teams", "Outlook", "MSN Messenger"],
      answer: 2,
      explain: "MSN Messenger se apagó en abril de 2013 después de migrar a Skype."
    },
    {
      q: "¿Qué plataforma de Disney cerró en 2017 y dejó a millones de pingüinos sin isla?",
      options: ["Toontown Online", "Club Penguin", "Habbo"],
      answer: 1,
      explain: "Club Penguin cerró el 29 de marzo de 2017. Su sucesora, Club Penguin Island, también cerró en 2018."
    }
  ]
};
