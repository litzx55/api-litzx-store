import { Elysia } from "elysia"

const app = new Elysia()
  .get("/", () => {
    return { message: "API Litzx Store is Running!", status: "ok" }
  })
  .get("/api/products", () => {
    return {
      products: [
        { id: 1, name: "Product 1", price: 10000 },
        { id: 2, name: "Product 2", price: 20000 }
      ]
    }
  })
  .get("/api/health", () => ({ health: "good" }))

export default app.fetch
