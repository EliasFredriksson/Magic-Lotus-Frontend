import { Container } from "inversify";
import { registerGateways } from "./registerGateways";
import { registerPagePresenters } from "./registerPagePresenters";

const createContainer = (): Container => {
  let container = new Container({
    autoBindInjectable: true,
    defaultScope: "Transient",
  });

  container = registerGateways(container);
  container = registerPagePresenters(container);

  return container;
};

export default createContainer;
