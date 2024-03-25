import { expect, test } from "vitest";
import Carousel from "../Carousel";
import { StaticRouter } from "react-router-dom/server";
import { render } from "@testing-library/react"

test("Hero image changes when thumbnail clicked", async () => {
    const images = ["0.jpg","1.jpg","2.jpg","3.jpg"];
    const carousel = render(<Carousel images={images}/>);
    
    const heroImg = await carousel.findByTestId(`hero`);
    expect(heroImg.src).toContain(images[0]);


    for (let i = 0; i < images.length; i++) {
        let image = images[i];
        const thumbnail = await carousel.findByTestId(`thumbnail${i}`);
        await thumbnail.click();
        // no funciona ni con map ni con forEach
        expect(heroImg.src).toContain(image);
        expect(Array.from(thumbnail.classList)).toContain("active");
    }

    carousel.unmount();
})