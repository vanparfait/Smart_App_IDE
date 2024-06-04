import { html, css, js } from "../assets";
import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    lang: "html",
    imageURL: html,
    buttonContent: "HTML",
    code: `<div>
        <h1>Editeur de code avec React </h1>
        <p>Codez directement dans votre navigateur </p>
</div>
        `,
  },
  {
    id: 2,
    lang: "css",
    imageURL: css,
    buttonContent: "CSS",
    code: `body{
            font-family:roboto, sans-serif,
            padding: 25px,
            color: #111,
            background-color: #f1f1f1,
        }
        `,
  },
  {
    id: 3,
    lang: "javascript",
    imageURL: js,
    buttonContent: "JavaScript",
    code: `console.log("Hello word")
        `,
  },
];

export const codeUpdater = createSlice({
  name: "code-updater",
  initialState,
  reducers: {
    updateCode: (state, action) => {
      state.find((obj) => obj.id === action.payload.id).code =
        action.payload.value;
    },
  },
});

export const { updateCode } = codeUpdater.actions;
export default codeUpdater.reducer;
