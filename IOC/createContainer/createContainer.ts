import { Container } from "inversify";
import { registerServices } from "./registerServices";

const createContainer = (): Container => {
  let container = new Container({
    autoBindInjectable: true,
    defaultScope: "Transient",
  });

  container = registerServices(container);

  return container;
};

export default createContainer;
