import { Container } from "inversify";
import { registerServices } from "./registerServices";
import { registerPagePresenters } from "./registerPagePresenters";

const createContainer = (): Container => {
  let container = new Container({
    autoBindInjectable: true,
    defaultScope: "Transient",
  });

  container = registerServices(container);
  container = registerPagePresenters(container);

  return container;
};

export default createContainer;
