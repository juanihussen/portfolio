const t = {
  es: {
    nav: {
      about: "SOBRE MÍ",
      projects: "PROYECTOS",
      blog: "BLOG",
      social: "SOCIAL",
      contact: "CONTACTO",
      brand: "Juani.",
    },
    hero: {
      fullStack: "FULL STACK",
      developer: "DEVELOPER",
      scroll: "Scroll",
      greeting: "Bienvenido! Soy Juani 👋",
      about: "Conocé mi historia",
      projects: "Conocé mis proyectos",
      blog: "Mis artículos",
      social: "Encontráme en redes",
    },
    about: {
      title: "Sobre mí",
      heading1: "Full-stack developer",
      heading2: "integrando IA",
      description:
        "Soy un desarrollador argentino apasionado por construir productos completos — desde el frontend hasta el backend — y ahora integrando inteligencia artificial para automatizar procesos y crear experiencias más inteligentes.",
    },
    experiences: [
      {
        company: "Making Sense",
        role: "Back-End Developer",
        period: "Dic 2024 — May 2026",
        hoverDesc:
          "Mi primer acercamiento a producción en una empresa grande corporativa",
        tags: ["Java", "Groovy", "Spring Boot", "gRPC", "Kafka", "MySQL", "Redis", "JOOQ", "GitLab CI/CD", "Datadog"],
        content: `Durante un año y medio formé parte de **Making Sense**, una fábrica de software donde trabajé como Back-End Developer en proyectos internacionales de gran escala. Mi día a día transcurría íntegramente en inglés: desde las daily meetings y el refinamiento de tareas hasta la comunicación directa con stakeholders en Estados Unidos. Esta inmersión total en un entorno corporativo bilingüe me enseñó a navegar procesos maduros, metodologías ágiles consolidadas y ambientes de producción reales con la solidez que exige una empresa global.\n\nEn el plano técnico, diseñé y construí microservicios interconectados usando **Java**, **Groovy** y **Spring Boot**, garantizando alta disponibilidad y escalabilidad. Desarrollé APIs RESTful optimizadas y habilité la comunicación eficiente entre servicios mediante **gRPC** y **Kafka** para procesamiento distribuido. Del lado de datos, trabajé con **MySQL** y **JOOQ** para consultas avanzadas, y usé **Redis** como capa de caching en memoria para reducir latencias críticas.\n\nLa calidad era parte fundamental del proceso: implementé pruebas unitarias e integrales con **Spock**, **JUnit**, **Mockito** y **WireMock**, manteniendo una cobertura rigurosa supervisada con **JaCoCo**. Los despliegues se gestionaban mediante pipelines de **GitLab CI/CD** en entornos **Linux (Ubuntu)**, con **Gradle** y **Maven** automatizando los builds. Además, monitoreaba la salud del sistema con **Datadog** y potencié mi flujo de trabajo integrando **IA (Claude)** para acelerar el refactor de código y la generación de tests.`,
        detailDesc: "Entorno 100% en inglés",
      },
      {
        company: "Trust Group",
        role: "Full-Stack Developer",
        period: "Jun 2024 — Nov 2024",
        hoverDesc: "Mi primer proyecto integrando IA en un desarrollo real",
        tags: ["Java", "Spring Boot", "React", "MySQL", "Cloud", "REST API", "Testing"],
        content: `• Arquitecté e implementé un sistema de gestión integral usando **Java**, **Spring Boot** y **React**, centralizando el seguimiento de empleados, pagos y logística.\n\n• Desarrollé y ejecuté scripts de testing automatizado tanto para la REST API como para el Frontend, asegurando la confiabilidad del sistema y la consistencia de los datos.\n\n• Administré recursos de la aplicación y persistencia de bases de datos en entornos Cloud, implementando buenas prácticas de seguridad para datos administrativos sensibles.\n\n• Diseñé esquemas relacionales complejos en **MySQL** para mantener la integridad de los datos a través de múltiples módulos de negocio.`,
        detailDesc: "",
      },
      {
        company: "NEORIS - EPAM",
        role: "Bootcamp Full-Stack",
        period: "Sep 2024 — Nov 2024",
        hoverDesc:
          "Bootcamp intensivo donde desarrollé proyectos full-stack con React y Spring Boot",
        tags: ["React", "JavaScript", "Java", "Spring Boot", "Maven", "REST API", "H2", "Git"],
        image: "/certificado-neoris.png",
        content: `Bootcamp intensivo de **NEORIS** donde me formé como desarrollador Full-Stack, trabajando con tecnologías modernas tanto del frontend como del backend.\n\n**Módulos del bootcamp:**\n• **Frontend con React:** Desarrollo de aplicaciones web dinámicas con componentes, estados y consumo de APIs REST.\n• **Backend con Java y Spring Boot:** Creación de APIs REST robustas con arquitectura en capas, persistencia con H2 y buenas prácticas de desarrollo.\n• **Integración Full-Stack:** Conexión de aplicaciones React con APIs REST propias, manejo de datos y despliegue.\n\n**Proyectos realizados:**\n• **Employee Management App** — Aplicación React para gestión de empleados y jornadas laborales con consumo de API REST.\n• **API REST con Spring Boot** — Backend completo con endpoints CRUD para empleados y jornadas, documentado con Postman.`,
        detailDesc: "",
      },
      {
        company: "Universidad Tecnológica Nacional",
        role: "Tecnicatura en Programación",
        period: "2022 — Presente",
        hoverDesc:
          "Cursando la tecnicatura en programación en la UTN Mar del Plata",
        tags: ["C", "Java", "SQL", "HTML", "JavaScript", "Python"],
        content: `Desde **2022** curso la **Tecnicatura Universitaria en Programación** en la **Universidad Tecnológica Nacional** — Facultad Regional Mar del Plata. Estoy cerca de recibirme, ya casi completo todas las materias. La carrera me brindó una base sólida en algoritmos, estructuras de datos, paradigmas de programación y desarrollo de software, sentando las bases para mi desempeño profesional como desarrollador.`,
        detailDesc: "UTN · Mar del Plata",
      },
    ],
    projects: {
      title: "Proyectos",
      heading: "Cosas que he",
      headingAccent: "construido",
    },
    projectsList: [
      {
        title: "Trust Group",
        desc: "Sitio web profesional con panel de administración y autenticación para un estudio de arquitectura.",
        url: "https://trustgrouparq.com",
        tags: ["Next.js", "Open Code", "AI", "PostgreSQL", "Auth"],
        hoverDesc: "Landing profesional con panel de administración",
        content: `Desarrollé este sitio web con el objetivo estratégico de potenciar la presencia digital de la empresa, permitiéndoles exponer sus proyectos de forma profesional y expandirse hacia nuevos clientes.\n\nPara garantizar su autonomía, implementé un panel de administración privado donde el equipo puede gestionar y añadir todo su contenido a gusto de manera intuitiva. La plataforma cuenta con formularios dinámicos para la carga de datos y un sistema robusto de autenticación que asegura la protección de toda la información.\n\nEste proyecto representa además un hito clave en mi perfil tecnológico, ya que fue mi primer desarrollo integrado con Inteligencia Artificial, utilizando específicamente Open Code como orquestador para optimizar los flujos de trabajo y la estructura del código.`,
      },
      {
        title: "Employee Management App",
        desc: "App de gestión de empleados y jornadas laborales desarrollada durante el bootcamp de NEORIS.",
        url: "https://github.com/juanihussen/TP_React_Final",
        tags: ["React", "JavaScript", "CSS", "REST API"],
        hoverDesc: "CRUD completo de empleados con React y consumo de API REST",
        content: `Aplicación para gestionar empleados y sus jornadas laborales, desarrollada como proyecto final del módulo de React en el bootcamp de NEORIS.\n\n**Funcionalidades principales:**\n• CRUD completo de empleados (crear, listar, actualizar, eliminar)\n• Gestión de jornadas laborales asociadas a cada empleado\n• Consumo de API REST para persistencia de datos\n• Interfaz dinámica y responsive\n\n**Para ejecutar:**\n1. Clonar el repositorio\n2. Configurar las dependencias necesarias\n3. Ejecutar la aplicación junto con la API correspondiente\n\n**Nota importante:** Primero debe crearse un empleado antes de asignarle una jornada laboral.`,
      },
      {
        title: "API REST - NEORIS",
        desc: "API REST con Spring Boot para gestión de empleados y jornadas, parte del bootcamp de NEORIS.",
        url: "https://github.com/juanihussen/TP2_ApiRest",
        tags: ["Java", "Spring Boot", "Maven", "H2", "REST API"],
        hoverDesc: "API REST con Spring Boot para gestión de empleados y jornadas",
        content: `API REST desarrollada con **Java** y **Spring Boot** para gestionar empleados y sus jornadas laborales, creada durante el bootcamp de NEORIS.\n\n**Endpoints principales:**\n• CRUD de empleados\n• CRUD de jornadas laborales asociadas a empleados\n• Base de datos H2 para desarrollo y pruebas\n\n**Tecnologías:** Java, Spring Boot, Maven, H2 Database, Postman\n\n**Instrucciones:**\n1. Clonar el repositorio\n2. Ejecutar la aplicación con Maven\n3. Usar el archivo de Postman incluido para probar los endpoints\n4. Primero crear un empleado, luego asignar jornadas`,
      },
    ],
    blog: {
      title: "Blog",
      heading: "Artículos y",
      headingAccent: "reflexiones",
      comingSoon: "Próximamente...",
      comingSoonDesc: "Estoy preparando contenido sobre desarrollo, IA y tecnología.",
    },
    social: {
      title: "Social",
      heading: "Conectemos",
      headingAccent: "en redes",
      github: "Acá subo mi código abierto y proyectos personales",
      linkedin: "Acá comparto mi contenido profesional de forma activa",
    },
    footer: {
      copyright: "© 2026 Juani",
      made: "Hecho con ☕ e IA",
    },
    lamp: {
      light: "Modo claro",
      dark: "Modo oscuro",
    },
    floating: {
      more: "Más contenido próximamente...",
    },
    detail: {
      visit: "Visitar sitio",
    },
  },

  en: {
    nav: {
      about: "ABOUT",
      projects: "PROJECTS",
      blog: "BLOG",
      social: "SOCIAL",
      contact: "CONTACT",
      brand: "Juani.",
    },
    hero: {
      fullStack: "FULL STACK",
      developer: "DEVELOPER",
      scroll: "Scroll",
      greeting: "Welcome! I'm Juani 👋",
      about: "About me",
      projects: "My projects",
      blog: "My articles",
      social: "Find me on social",
    },
    about: {
      title: "About me",
      heading1: "Full-stack developer",
      heading2: "integrating AI",
      description:
        "I'm an Argentine developer passionate about building complete products — from frontend to backend — and now integrating artificial intelligence to automate processes and create smarter experiences.",
    },
    experiences: [
      {
        company: "Making Sense",
        role: "Back-End Developer",
        period: "Dec 2024 — May 2026",
        hoverDesc:
          "My first approach to production in a large corporate company",
        tags: ["Java", "Groovy", "Spring Boot", "gRPC", "Kafka", "MySQL", "Redis", "JOOQ", "GitLab CI/CD", "Datadog"],
        content: `For a year and a half I was part of **Making Sense**, a software factory where I worked as a Back-End Developer on large-scale international projects. My daily routine was entirely in English: from daily meetings and task refinement to direct communication with stakeholders in the United States. This total immersion in a bilingual corporate environment taught me to navigate mature processes, consolidated agile methodologies, and real production environments with the solidity required by a global company.\n\nOn the technical side, I designed and built interconnected microservices using **Java**, **Groovy**, and **Spring Boot**, ensuring high availability and scalability. I developed optimized RESTful APIs and enabled efficient communication between services through **gRPC** and **Kafka** for distributed processing. On the data side, I worked with **MySQL** and **JOOQ** for advanced queries, and used **Redis** as an in-memory caching layer to reduce critical latencies.\n\nQuality was a fundamental part of the process: I implemented unit and integration tests with **Spock**, **JUnit**, **Mockito**, and **WireMock**, maintaining rigorous coverage supervised with **JaCoCo**. Deployments were managed through **GitLab CI/CD** pipelines on **Linux (Ubuntu)** environments, with **Gradle** and **Maven** automating builds. I also monitored system health with **Datadog** and enhanced my workflow by integrating **AI (Claude)** to accelerate code refactoring and test generation.`,
        detailDesc: "100% English environment",
      },
      {
        company: "Trust Group",
        role: "Full-Stack Developer",
        period: "Jun 2024 — Nov 2024",
        hoverDesc: "My first project integrating AI in a real development",
        tags: ["Java", "Spring Boot", "React", "MySQL", "Cloud", "REST API", "Testing"],
        content: `• Architected and implemented an end-to-end management system using **Java**, **Spring Boot**, and **React**, centralizing employee tracking, payments, and logistics.\n\n• Developed and executed automated testing scripts for both the REST API and the Frontend to ensure system reliability and data consistency.\n\n• Managed application resources and database persistence in Cloud environments, implementing security best practices for sensitive administrative data.\n\n• Designed complex relational schemas in **MySQL** to maintain data integrity across multiple business modules.`,
        detailDesc: "",
      },
      {
        company: "NEORIS - EPAM",
        role: "Full-Stack Bootcamp",
        period: "Sep 2024 — Nov 2024",
        hoverDesc:
          "Intensive bootcamp where I developed full-stack projects with React and Spring Boot",
        tags: ["React", "JavaScript", "Java", "Spring Boot", "Maven", "REST API", "H2", "Git"],
        image: "/certificado-neoris.png",
        content: `Intensive **NEORIS** bootcamp where I trained as a Full-Stack developer, working with modern technologies on both frontend and backend.\n\n**Bootcamp modules:**\n• **Frontend with React:** Development of dynamic web applications with components, state management, and REST API consumption.\n• **Backend with Java and Spring Boot:** Creation of robust REST APIs with layered architecture, H2 persistence, and development best practices.\n• **Full-Stack Integration:** Connecting React applications with custom REST APIs, data handling, and deployment.\n\n**Projects completed:**\n• **Employee Management App** — React application for managing employees and work shifts with REST API consumption.\n• **REST API with Spring Boot** — Complete backend with CRUD endpoints for employees and work shifts, documented with Postman.`,
        detailDesc: "",
      },
      {
        company: "Universidad Tecnológica Nacional",
        role: "Programming Degree",
        period: "2022 — Present",
        hoverDesc:
          "Studying a programming degree at UTN Mar del Plata",
        tags: ["C", "Java", "SQL", "HTML", "JavaScript", "Python"],
        content: `Since **2022** I have been studying the **University Degree in Programming** at the **Universidad Tecnológica Nacional** — Mar del Plata Regional Faculty. I'm close to graduating, with almost all subjects completed. The program provided a solid foundation in algorithms, data structures, programming paradigms, and software development, laying the groundwork for my professional career as a developer.`,
        detailDesc: "UTN · Mar del Plata",
      },
    ],
    projects: {
      title: "Projects",
      heading: "Things I've",
      headingAccent: "built",
    },
    projectsList: [
      {
        title: "Trust Group",
        desc: "Professional website with admin panel and authentication for an architecture firm.",
        url: "https://trustgrouparq.com",
        tags: ["Next.js", "Open Code", "AI", "PostgreSQL", "Auth"],
        hoverDesc: "Professional landing page with admin panel",
        content: `I developed this website with the strategic goal of enhancing the company's digital presence, allowing them to showcase their projects professionally and expand to new clients.\n\nTo ensure their autonomy, I implemented a private admin panel where the team can manage and add all their content intuitively. The platform features dynamic forms for data entry and a robust authentication system that ensures information protection.\n\nThis project also represents a key milestone in my tech profile, as it was my first development integrating Artificial Intelligence, specifically using Open Code as an orchestrator to optimize workflows and code structure.`,
      },
      {
        title: "Employee Management App",
        desc: "Employee and work shift management app developed during the NEORIS bootcamp.",
        url: "https://github.com/juanihussen/TP_React_Final",
        tags: ["React", "JavaScript", "CSS", "REST API"],
        hoverDesc: "Complete employee CRUD with React and REST API consumption",
        content: `Application for managing employees and their work shifts, developed as the final project for the React module at the NEORIS bootcamp.\n\n**Main features:**\n• Complete employee CRUD (create, list, update, delete)\n• Work shift management associated with each employee\n• REST API consumption for data persistence\n• Dynamic and responsive interface\n\n**To run:**\n1. Clone the repository\n2. Install the necessary dependencies\n3. Run the application alongside the corresponding API\n\n**Important note:** An employee must be created first before assigning a work shift.`,
      },
      {
        title: "REST API - NEORIS",
        desc: "REST API with Spring Boot for employee and shift management, part of the NEORIS bootcamp.",
        url: "https://github.com/juanihussen/TP2_ApiRest",
        tags: ["Java", "Spring Boot", "Maven", "H2", "REST API"],
        hoverDesc: "REST API with Spring Boot for employee and shift management",
        content: `REST API developed with **Java** and **Spring Boot** to manage employees and their work shifts, created during the NEORIS bootcamp.\n\n**Main endpoints:**\n• Employee CRUD\n• Work shift CRUD associated with employees\n• H2 database for development and testing\n\n**Technologies:** Java, Spring Boot, Maven, H2 Database, Postman\n\n**Instructions:**\n1. Clone the repository\n2. Run the application with Maven\n3. Use the included Postman file to test the endpoints\n4. First create an employee, then assign shifts`,
      },
    ],
    blog: {
      title: "Blog",
      heading: "Articles &",
      headingAccent: "thoughts",
      comingSoon: "Coming soon...",
      comingSoonDesc: "I'm preparing content about development, AI, and technology.",
    },
    social: {
      title: "Social",
      heading: "Let's connect",
      headingAccent: "on social media",
      github: "I share my open source code and personal projects here",
      linkedin: "I actively share my professional content here",
    },
    footer: {
      copyright: "© 2026 Juani",
      made: "Made with ☕ & AI",
    },
    lamp: {
      light: "Light mode",
      dark: "Dark mode",
    },
    floating: {
      more: "More content coming soon...",
    },
    detail: {
      visit: "Visit site",
    },
  },
};

export type Lang = "es" | "en";
export default t;
