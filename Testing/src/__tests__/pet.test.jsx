import { expect, test } from "vitest";
import Pet from "../Pet";
import { StaticRouter } from "react-router-dom/server";
import { render } from "@testing-library/react";


test("Displays default image", async () => {
const pet = render(
    <StaticRouter>
        <Pet/>
    </StaticRouter>
)

const petThumbnail = await pet.findByTestId("testThumbnail")
expect(petThumbnail.src).toContain("none.jpg");
pet.unmount();
})

test("Display first image on thumbnail", async () => {
    const pet = render(
        <StaticRouter>
            <Pet images={["1.jpg", "2.jpg", "3.jpg"]}/>
        </StaticRouter>
    );

    const expectedThumbnail = await pet.findByTestId("testThumbnail");
    expect(expectedThumbnail.src).toContain("1.jpg")
    pet.unmount();
})