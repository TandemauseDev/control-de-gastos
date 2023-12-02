# Expense Tracker App

Este proyecto es una aplicación web desarrollada en React con el objetivo de proporcionar una herramienta sencilla y eficiente para el control de gastos personales. La aplicación se centra en la facilidad de uso y la visualización clara de la información financiera.

## Características Principales

### 1. Registro de Presupuesto

Al entrar en la página, la aplicación solicitará al usuario ingresar su presupuesto. No se permite el acceso hasta que se haya ingresado un valor válido como presupuesto.

### 2. Panel de Control

- **Círculo de Progreso**: Una barra circular de progreso hecha con `react-circular-progressbar`, que visualiza el porcentaje de presupuesto gastado.
- **Resumen Financiero**: Información sobre el presupuesto total, el monto disponible y el monto gastado.
- **Botón de Reinicio**: Permite reiniciar la aplicación, limpiando todos los datos almacenados.

### 3. Registro de Gastos

En la esquina inferior derecha, hay un botón que, al presionarse, revela un formulario. Este formulario solicita la información del gasto, incluyendo nombre, cantidad y categoría. Al guardar el gasto, se crea una tarjeta (card) que se muestra debajo del panel, con un ícono correspondiente a la categoría.

### 4. Gestión de Gastos

Cada tarjeta de gasto es editable deslizándola de izquierda a derecha. También se puede eliminar deslizándola de derecha a izquierda. Esto proporciona una manera intuitiva de gestionar y mantener los gastos.

### 5. Filtrado por Categoría

Los gastos se pueden filtrar por categoría para una mejor organización y seguimiento. Esto facilita la visualización de los gastos relacionados con una categoría específica.

### 6. Persistencia de Datos

Todos los datos se almacenan localmente utilizando el Local Storage del navegador. Incluso si la página se recarga, los datos y la configuración del usuario se conservarán, a menos que se elija reiniciar la aplicación.

## Instalación y Uso



- Preview disponible en: [Netlify](https://splendorous-tapioca-ad985c.netlify.app/)

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
