import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NotFoundComp from "./NotFoundComp";

describe("NotFoundComp", () => {
  it("affiche un message 404 et un lien vers l'accueil", () => {
    render(
      <MemoryRouter>
        <NotFoundComp />
      </MemoryRouter>
    );

    expect(
      screen.getByRole("heading", {
        name: "Oups, cette page est introuvable !",
      })
    ).toBeTruthy();

    expect(
      screen.getByRole("link", { name: "Retour à l'accueil" })
        .getAttribute("href")
    ).toBe("/");
  });
});