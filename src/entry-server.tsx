import "./styles/globals.css";
import { StrictMode } from "react";
import { renderToPipeableStream, type RenderToPipeableStreamOptions } from "react-dom/server";
import { StaticRouter } from "react-router";
import AppRoutes from "./routes/routes";

export function render(url: string, options?: RenderToPipeableStreamOptions) {
  return renderToPipeableStream(
    <StrictMode>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </StrictMode>,
    options
  );
};
