/**
 * @jest-environment jsdom
 */
import {expect, test} from '@jest/globals';
import {render} from "@testing-library/react";
import Pet from '../Pet';
import { StaticRouter } from "react-router-dom/server";

test("display a thumbnail", async () => {
    const pet = render(
      <StaticRouter>
        {/*  needed when there is links react-router-dom is involved */}
        <Pet />
      </StaticRouter>
    );

    const petThumbnail = await pet.findByTestId("thumbnail");
    expect(petThumbnail.src).toContain("none.jpg");
});

test("displays a non default thumbnail", async ()=> {
    const pet = render(
      <StaticRouter>
          <Pet images={["1.jpg", "2.png", "3.webm"]}/>
      </StaticRouter>
    );

    const petThumbnail = await pet.findByTestId("thumbnail");
    expect(petThumbnail.src).toContain("1.jpg");
});