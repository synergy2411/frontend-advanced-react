import { render, screen, waitFor } from '@testing-library/react';
import AsyncComp from './AsyncComp';

// Test Suite
describe("ASYNC COMPONENT", () => {

    // TEAR DONW & SETUP
    // - beforeEach
    // - afterEach
    // - beforeAll
    // - afterAll
    beforeEach(() => {

    })

    afterEach(() => {

    })

    beforeAll(() => {

    })

    afterAll(() => {

    })

    test("render the listitems after making XHR Call", async () => {
        render(<AsyncComp />)
        const liElements = await waitFor(() => screen.findAllByRole("listitem"))
        expect(liElements).not.toHaveLength(0)
    })

    test("render the 100 listitems after making XHR Call", async () => {
        render(<AsyncComp />)
        const liElements = await waitFor(() => screen.findAllByRole("listitem"))
        expect(liElements).toHaveLength(100)
    })

})