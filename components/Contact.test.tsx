import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import Contact from "./Contact";

afterEach(() => vi.unstubAllGlobals());

describe("Contact form status and accessibility", () => {
  it("exposes a busy, disabled state while submitting and sends the entered values", async () => {
    const user = userEvent.setup();
    let resolveRequest!: (response: Response) => void;
    const request = new Promise<Response>((resolve) => {
      resolveRequest = resolve;
    });
    const fetchMock = vi.fn(() => request);
    vi.stubGlobal("fetch", fetchMock);
    render(<Contact />);

    await fillValidForm(user);
    await user.click(screen.getByRole("button", { name: "Send inquiry" }));

    const form = screen.getByRole("button", { name: "Sending..." }).closest("form");
    expect(form).toHaveAttribute("aria-busy", "true");
    expect(screen.getByLabelText("Your name")).toBeDisabled();
    expect(screen.getByRole("button", { name: "Sending..." })).toBeDisabled();
    expect(fetchMock).toHaveBeenCalledWith(
      "/api/contact",
      expect.objectContaining({
        method: "POST",
        body: JSON.stringify(validForm),
      }),
    );

    resolveRequest(jsonResponse({ success: true }, 200));
    expect(await screen.findByRole("status")).toHaveTextContent("Your message has been sent");
  });

  it("announces success politely and clears the submitted fields", async () => {
    const user = userEvent.setup();
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue(jsonResponse({ success: true }, 200)));
    render(<Contact />);

    await fillValidForm(user);
    await user.click(screen.getByRole("button", { name: "Send inquiry" }));

    const status = await screen.findByRole("status");
    expect(status).toHaveAttribute("aria-live", "polite");
    expect(status).toHaveTextContent("Your message has been sent");
    expect(screen.getByLabelText("Your name")).toHaveValue("");
    expect(screen.getByLabelText("Email address")).toHaveValue("");
    expect(screen.getByLabelText("What can I help with?")).toHaveValue("");
    expect(screen.getByLabelText("Project details")).toHaveValue("");
    expect(status.closest("section")?.querySelector("form")).toHaveAttribute("aria-busy", "false");
  });

  it("announces a server error, retains input, and dismisses the error when editing", async () => {
    const user = userEvent.setup();
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue(jsonResponse({ error: "Please try again later." }, 503)),
    );
    render(<Contact />);

    await fillValidForm(user);
    await user.click(screen.getByRole("button", { name: "Send inquiry" }));

    expect(await screen.findByRole("alert")).toHaveTextContent("Please try again later.");
    const nameInput = screen.getByLabelText("Your name");
    expect(nameInput).toHaveValue(validForm.name);

    await user.type(nameInput, " Jr");
    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
  });
});

const validForm = {
  name: "Jane Smith",
  email: "jane@example.com",
  subject: "Portfolio project",
  message: "Please help with my new portfolio.",
};

async function fillValidForm(user: ReturnType<typeof userEvent.setup>) {
  await user.type(screen.getByLabelText("Your name"), validForm.name);
  await user.type(screen.getByLabelText("Email address"), validForm.email);
  await user.type(screen.getByLabelText("What can I help with?"), validForm.subject);
  await user.type(screen.getByLabelText("Project details"), validForm.message);
}

function jsonResponse(body: object, status: number) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
