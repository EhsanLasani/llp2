// import "../app/globals.scss";

// export const parameters = {
//   layout: "centered",
//   backgrounds: {
//     default: "light",
//     values: [
//       { name: "light", value: "#ffffff" },
//       { name: "dark", value: "#0b0f14" },
//     ],
//   },
//   viewport: {
//     viewports: {
//       desktop: {
//         name: "Desktop",
//         styles: { width: "1440px", height: "900px" },
//       },
//       tablet: {
//         name: "Tablet",
//         styles: { width: "768px", height: "1024px" },
//       },
//       mobile: {
//         name: "Mobile",
//         styles: { width: "375px", height: "667px" },
//       },
//     },
//     defaultViewport: "desktop",
//   },
// };

// export const globalTypes = {
//   theme: {
//     name: "Theme",
//     description: "Global theme mode",
//     defaultValue: "light",
//     toolbar: {
//       icon: "circlehollow",
//       items: [
//         { value: "light", icon: "sun", title: "Light" },
//         { value: "dark", icon: "moon", title: "Dark" },
//       ],
//     },
//   },
// };

// export const decorators = [
//   (Story, context) => {
//     document.documentElement.dataset.theme = context.globals.theme;
//     return Story();
//   },
// ];
import "../app/globals.scss";

export const parameters = {
  layout: "centered",
};
