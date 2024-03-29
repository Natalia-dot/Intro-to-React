import { StaticRouter, renderToPipeableStream } from "react-router-dom/server";
import { App } from "./App";

export const render = (url, opts) => {
  const stream = renderToPipeableStream(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>,
    opts
  );

  return stream;
};
