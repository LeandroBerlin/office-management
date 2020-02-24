import React from 'react';
import { render } from "@testing-library/react";
import Employee from '../components/Employee';


test('render title', () => {
    const { container, getByText } = render(<Employee
        employee={[]}
        onStatus={() => console.log("ok")}
    />)
    expect(getByText('Employee')).toBeInTheDocument()
})


it("test Employee props", () => {
    const { getByText, rerender } = render(<Employee
        onStatus={() => console.log("ok")}
        employee={[{ id: 1, name: "Leandro", available: true }]} />)
    expect(getByText(/Leandro/i))

    // re-render the same component with different props
    rerender(<Employee
        onStatus={() => console.log("ok")}
        employee={[{ id: 1, name: "Marco", available: true }]} />)
    expect(getByText(/Marco/i))
});
