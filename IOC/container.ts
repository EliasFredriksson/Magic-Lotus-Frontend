import { Container } from "inversify";
import createContainer from "./createContainer/createContainer";

const appContainer: Container = createContainer();

export default appContainer;
