import React from "react";
import { useSelector } from "react-redux";

const Preview = () => {
  const tabs = useSelector((state) => state.tabs);

  function getCode(lang) {
    return tabs.find((obj) => obj.lang === lang).code;
  }

  const srcDoc = `
<!DOCTYPE html>
<html lang="en">
<head>
    <style> ${getCode("css")} </style>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
${getCode("html")}
    <script>${getCode("javascript")}</script>
</body>
</html>
`;

  return (
    <div className="absolute top-0  left-0 w-full h-full bg-zinc-900">
      <iframe
        sandbox="allow-scripts"
        className="block w-full h-full"
        srcDoc={srcDoc}
      ></iframe>
    </div>
  );
};

export default Preview;
