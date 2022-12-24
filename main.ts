import { Application, Router, Context } from "https://deno.land/x/oak/mod.ts";

import {
  viewEngine,
  ejsEngine,
  oakAdapter,
} from "https://deno.land/x/view_engine@v10.5.1/mod.ts";

const router = new Router();
const colors: string[] = [];
const port = 8000;

const app = new Application();

app.use(
  viewEngine(oakAdapter, ejsEngine, {
    viewRoot: "./views",
  })
);

router
  .post("/", async (ctx: Context ): void => {
    const body = ctx.request.body({ type: "form" });
    const value = body.value;
    const color = (await value).get("color");
    colors.push(color);
    ctx.response.redirect("/");
    console.log("dtcon, color seleccionado", color);
  })
  .get("/", (ctx: Context):void => {
    ctx.render("form.ejs", { colors });
  });

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port });