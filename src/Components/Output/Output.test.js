import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Output from './Output';

// get | query | find
// - get - throw the error, if element not found
// - query - return NULL value, if the element not found
// - find - used for async call

describe("OUTPUT COMPONENT", () => {

    test.skip("renders the h1 element - get", () => {
        render(<Output />)
        const h1Element = screen.getByText(/output component/i)
        expect(h1Element).toBeInTheDocument()
    })

    test.only("render the h1 element - query", () => {
        render(<Output />)
        const h1Element = screen.queryByText(/xyz/i);
        expect(h1Element).toBeNull()
    })

    test("render the 'the testing demo' when 'show' state is false", () => {
        render(<Output />)
        const pElement = screen.queryByText(/testing demo/i)
        expect(pElement).not.toBeNull()
    })

    test("render the 'jest is testing library' when 'show' state is true", () => {
        render(<Output />)
        const btnElement = screen.getByRole("button")
        userEvent.click(btnElement);            // clicking button in testing environment
        const pElement = screen.getByText(/jest is testing library/i);
        expect(pElement).toBeInTheDocument()
    })

    test("should not render 'the testing demo' when button is clicked", () => {
        render(<Output />)
        const btnElement = screen.getByRole("button")
        userEvent.click(btnElement);
        const pElement = screen.queryByText(/testing demo/i)
        expect(pElement).toBeNull()
    })


})
