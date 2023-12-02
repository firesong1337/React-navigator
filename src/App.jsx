import { NavigatorWindow } from "./components/NavigatorWindow/NavigatorWindow";
import { ResizableWindow } from "./components/ResizableWindow/ResizableWindow";
import "@picocss/pico";

export const App = () => {
  return (
    <div className="App">
      <ResizableWindow>
        <NavigatorWindow />
      </ResizableWindow>
    </div>
  );
};
