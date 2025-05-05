# Dragon Ball Z API Project

![Dragon Ball Logo](src/assets/DragonBall-Logo.png)

## Descripción

Este proyecto es una aplicación web desarrollada con React que consume la API de Dragon Ball para mostrar información sobre personajes, planetas y transformaciones del universo Dragon Ball.
Tiene como propósito reforzar mis conocimientos en React.

## Estructura del proyecto

El proyecto sigue una arquitectura de diseño atómico, organizando los componentes en diferentes niveles de complejidad:

```bash
src/
  ├── assets/             # Imágenes y recursos estáticos
  ├── components/
  │   ├── atoms/          # Componentes básicos e indivisibles
  │   ├── organisms/      # Combinaciones de moléculas
  │   ├── templates/      # Plantillas para las páginas
  │   └── pages/          # Páginas completas
  ├── hooks/              # Custom hooks
  ├── styles/             # Estilos globales
  ├── App.jsx             # Componente principal
  └── main.jsx            # Punto de entrada
```

## API

La aplicación consume los siguientes endpoints de Dragon Ball API:

- Personajes: https://dragonball-api.com/api/characters

- Planetas: https://dragonball-api.com/api/planets

- Transformaciones: https://dragonball-api.com/api/transformations

### Cómo ejecutar el proyecto

1. Clona el repositorio y desplazate a la carpeta:

```bash
  git clone https://github.com/Sergiovz/DRAGONBALL-API-PROJECT.git
```

```bash
  cd DRAGONBALL-API-PROJECT
```

2. Instala las dependencias:

```bash
  npm install
```

3. Inicia el servidor en modo desarrollo:

```bash
  npm run dev
```

4. Dirigete a tu navegador y coloca http://localhost:5173

Desarrollado por SergioVz - 2025
