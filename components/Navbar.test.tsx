import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import Navbar from "./Navbar";

vi.mock("@/components/ThemeToggle", () => ({
  ThemeToggle: () => <button type="button">Toggle theme</button>,
}));

describe("Navbar mobile navigation", () => {
  it("opens and closes from its controlling button", async () => {
    const user = userEvent.setup();
    render(<Navbar />);

    const menuButton = screen.getByRole("button", { name: "Open menu" });
    expect(menuButton).toHaveAttribute("aria-expanded", "false");
    expect(screen.queryByRole("navigation", { name: "Mobile navigation" })).not.toBeInTheDocument();

    await user.click(menuButton);

    expect(screen.getByRole("navigation", { name: "Mobile navigation" })).toBeInTheDocument();
    expect(menuButton).toHaveAccessibleName("Close menu");
    expect(menuButton).toHaveAttribute("aria-expanded", "true");

    await user.click(menuButton);

    expect(screen.queryByRole("navigation", { name: "Mobile navigation" })).not.toBeInTheDocument();
    expect(menuButton).toHaveAccessibleName("Open menu");
    expect(menuButton).toHaveAttribute("aria-expanded", "false");
  });

  it("closes on Escape and returns focus to the menu button", async () => {
    const user = userEvent.setup();
    render(<Navbar />);

    const menuButton = screen.getByRole("button", { name: "Open menu" });
    await user.click(menuButton);
    await user.tab();
    expect(menuButton).not.toHaveFocus();

    await user.keyboard("{Escape}");

    expect(screen.queryByRole("navigation", { name: "Mobile navigation" })).not.toBeInTheDocument();
    expect(menuButton).toHaveFocus();
  });

  it("closes after a mobile destination is selected", async () => {
    const user = userEvent.setup();
    render(<Navbar />);

    await user.click(screen.getByRole("button", { name: "Open menu" }));
    const mobileNavigation = screen.getByRole("navigation", { name: "Mobile navigation" });
    await user.click(within(mobileNavigation).getByRole("link", { name: /^Work/ }));

    expect(screen.queryByRole("navigation", { name: "Mobile navigation" })).not.toBeInTheDocument();
  });
});
