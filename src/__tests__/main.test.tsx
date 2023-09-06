import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { TODOS_MOCK } from "../const";
import Activities from "../components/Activities";
import App from "../App";
import List from "../components/List";

const onClear = jest.fn();

describe("Activities component", () => {
  it("list renders", () => {
    render(<List initTodos={TODOS_MOCK} />);
    expect(screen.getByText(/Тестовое задание/)).toBeInTheDocument();
    expect(screen.getByText(/Прекрасный код/)).toBeInTheDocument();
    expect(screen.getByText(/Покрытие тестами/)).toBeInTheDocument();
  });

  it("list snapshot", () => {
    const list = render(<List initTodos={TODOS_MOCK} />);
    expect(list).toMatchSnapshot();
  });

  it("Activities renders", () => {
    render(
      <Activities
        todos={TODOS_MOCK}
        handleClear={onClear}
        setFilter={() => {}}
      />
    );

    expect(screen.getByText("All")).toBeInTheDocument();
    expect(screen.getByText("Active")).toBeInTheDocument();
    expect(screen.getByText("Completed")).toBeInTheDocument();
  });
  it("Clear function called", async () => {
    render(
      <Activities
        todos={TODOS_MOCK}
        handleClear={onClear}
        setFilter={() => {}}
      />
    );
    const btn = screen.getByText("Clear completed");
    await userEvent.click(btn);
    expect(onClear).toHaveBeenCalled();
  });
  it("Input works", async () => {
    render(<App />);
    expect(screen.queryByDisplayValue(/Новая задача/)).toBeNull();

    await userEvent.type(screen.getByRole("textbox"), "new");

    expect(screen.getByRole("textbox")).toHaveValue("new");
  });

  it("Add todo works", async () => {
    render(<App />);
    expect(screen.queryByDisplayValue(/Новая задача/)).toBeNull();

    await userEvent.type(screen.getByRole("textbox"), "new{enter}");
    expect(screen.queryByDisplayValue(/new/)).toBeNull();
    expect(screen.getByText("new"));
  });

  it("Clear todos works", async () => {
    render(<App />);
    const todos_completed = TODOS_MOCK.filter((todo) => todo.completed);
    const btn = screen.getByText("Clear completed");
    await userEvent.click(btn);
    todos_completed.forEach((todo) => {
      expect(screen.queryByText(todo.text)).toBeNull();
    });
  });
  it("Tabs works", async () => {
    render(<App />);
    const todos_active = TODOS_MOCK.filter((todo) => !todo.completed);
    const todos_completed = TODOS_MOCK.filter((todo) => todo.completed);

    const tabs = screen.getAllByRole("tab", { selected: false });
    //click Active
    await userEvent.click(tabs[0]);
    todos_active.forEach((todo) => {
      expect(screen.getByText(todo.text)).toBeInTheDocument();
    });
    expect(screen.queryByText(todos_completed[0].text)).toBeNull();

    //click Completed
    await userEvent.click(tabs[1]);
    todos_completed.forEach((todo) => {
      expect(screen.getByText(todo.text)).toBeInTheDocument();
    });
    expect(screen.queryByText(todos_active[0].text)).toBeNull();
    expect(screen.queryByText(todos_active[1].text)).toBeNull();
  });

  it("activities snapshot", () => {
    const list = render(
      <Activities
        todos={TODOS_MOCK}
        handleClear={onClear}
        setFilter={() => {}}
      />
    );
    expect(list).toMatchSnapshot();
  });
});
