import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "./App";
import store from "./redux/store";

describe("App Routing", () => {
  it("should render NewsSearchPage when path is '/'", async () => {
    window.history.pushState({}, "Home page", "/");

    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(
      await screen.findByRole("heading", { name: /news search/i })
    ).toBeInTheDocument();
    expect(
      await screen.findByRole("button", { name: /search/i })
    ).toBeInTheDocument();
  });
});
