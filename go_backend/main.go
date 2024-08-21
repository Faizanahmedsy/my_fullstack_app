package main

import (
	"log"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func main(){
	app := fiber.New()

	app.Use(cors.New(cors.Config{
		AllowOrigins: "http://localhost:3000",
	}))


    app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("Hello World!")
	})



	app.Get("/api/go", func(c *fiber.Ctx) error {
		return c.JSON(fiber.Map{
			"message": "Hello, from Go Backend!",
		})
	})



	log.Fatal(
		app.Listen(":8080"),
	)

}