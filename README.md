# 🚀 App BestPizza 🚀

La aplicación fue creada con Vite ya que nos permite optimizar el BUILD final de una manera más compacta y eficiente que otras alternativas, también para desarrollo es más rápido ya que vuelve hacer re-render de los componentes modificados y no de toda la app.

En cuestión de framework de CSS se utilizó Tailwind CSS para realizar la maquetación de componentes de una forma más rápida y además porque al realizar BUILD de los estilos lo hace de la mejor manera para que este se optimice para producción.

Para el manejo del estado de la aplicación se utilizó REDUX con el fin de tener en un solo lugar la información que se visualiza en las páginas y así poder manejar los estados de login, modal, favoritos, también para persistir la información de favoritos se utilizó LocalStorage para conservar los datos seleccionados por el usuario.

Para el manejo de rutas se utilizó React Router, para la petición a la API se utilizó Axios, para el slider de imágenes se utilizó Swiper y para mostrar el mapa de Google Maps se utilizó @react-google-maps/api.

Adicionalmente a las pantallas solicitadas en la prueba se creó la pantalla para mostrar el mapa con la ubicación de restaurantes aleatorios para indicar donde se encuentran las tiendas, asi mismo se creó la pantalla para manejar los favoritos de tiendas con la funcionalidad de adicionar a favoritos y eliminar de favoritos.

## 🤖 Tecnologías y Bibliotecas

- ReactJS (18.0.0)
- ViteJS (2.9.7)
- TailwindCSS (3.0.24)
- React Router (6.3.0)
- React-Redux (8.0.1)
- @reduxjs/toolkit (1.8.1)
- Axios (0.27.2)
- React-Hook-Form (7.31.1)
- @react-google-maps/api (2.10.2)
- swiper (8.1.4)

## 🛠️ Instalación

Para utilizar este proyecto primero instale las dependencias:

```bash
npm install
```

## 🕹 Uso

```bash
npm run dev
```

Abrir el proyecto en la URL: [http://localhost:3000/](http://localhost:3000/ 'Link')

## 🔖 Resultado Final

Link Live example [https://best-pizza-jonmid.vercel.app/](https://best-pizza-jonmid.vercel.app/)

![](/screenshot.png?raw=true 'Screenshot')

## 🧑🏻 Author

**Jhonatan Mideros**

- 💻 [Profile](https://github.com/jonmid 'Jhonatan Mideros')

- 📬 [Email](mailto:jonmid.mideros@gmail.com?subject=Hi%20from%20Project%20GitHub 'Hi!')

- 📌 [Website](https://portafolio-jonmid.vercel.app/ 'Welcome')

## 📝 Licencia

[MIT](https://choosealicense.com/licenses/mit/)
