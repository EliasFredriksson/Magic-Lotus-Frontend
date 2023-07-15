import { Container } from "inversify";
import AppPagePresenter from "../../src/AppPagePresenter";

export const registerPagePresenters = (container: Container): Container => {
  container
    .bind<AppPagePresenter>(AppPagePresenter)
    .toSelf()
    .inSingletonScope();

  return container;
};
