# 馃殌 App BestPizza 馃殌

La aplicaci贸n fue creada con Vite ya que nos permite optimizar el BUILD final de una manera m谩s compacta y eficiente que otras alternativas, tambi茅n para desarrollo es m谩s r谩pido ya que vuelve hacer re-render de los componentes modificados y no de toda la app.

En cuesti贸n de framework de CSS se utiliz贸 Tailwind CSS para realizar la maquetaci贸n de componentes de una forma m谩s r谩pida y adem谩s porque al realizar BUILD de los estilos lo hace de la mejor manera para que este se optimice para producci贸n.

Para el manejo del estado de la aplicaci贸n se utiliz贸 REDUX con el fin de tener en un solo lugar la informaci贸n que se visualiza en las p谩ginas y as铆 poder manejar los estados de login, modal, favoritos, tambi茅n para persistir la informaci贸n de favoritos se utiliz贸 LocalStorage para conservar los datos seleccionados por el usuario.

Para el manejo de rutas se utiliz贸 React Router, para la petici贸n a la API se utiliz贸 Axios, para el slider de im谩genes se utiliz贸 Swiper y para mostrar el mapa de Google Maps se utiliz贸 @react-google-maps/api.

Adicionalmente a las pantallas solicitadas en la prueba se cre贸 la pantalla para mostrar el mapa con la ubicaci贸n de restaurantes aleatorios para indicar donde se encuentran las tiendas, asi mismo se cre贸 la pantalla para manejar los favoritos de tiendas con la funcionalidad de adicionar a favoritos y eliminar de favoritos.

## 馃 Tecnolog铆as y Bibliotecas

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

## 馃洜锔? Instalaci贸n

Para utilizar este proyecto primero instale las dependencias:

```bash
npm install
```

## 馃暪 Uso

```bash
npm run dev
```

Abrir el proyecto en la URL: [http://localhost:3000/](http://localhost:3000/ 'Link')

## 馃敄 Resultado Final

Link Live example [https://best-pizza-jonmid.vercel.app/](https://best-pizza-jonmid.vercel.app/)

![](/screenshot.png?raw=true 'Screenshot')

## 馃馃徎 Author

**Jhonatan Mideros**

- 馃捇 [Profile](https://github.com/jonmid 'Jhonatan Mideros')

- 馃摤 [Email](mailto:jonmid.mideros@gmail.com?subject=Hi%20from%20Project%20GitHub 'Hi!')

- 馃搶 [Website](https://portafolio-jonmid.vercel.app/ 'Welcome')

## 馃摑 Licencia

[MIT](https://choosealicense.com/licenses/mit/)
