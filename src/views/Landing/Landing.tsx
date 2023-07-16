import { FC } from "react";
import { withDependencyInjection } from "../../../IOC/withDependencyInjection";
import LandingPresenter from "./LandingPresenter";
import { observer } from "mobx-react-lite";
import Flex from "../../components/Flex/Flex";
import Typography from "../../components/Typography/Typography";
import Loader from "../../components/Loader/Loader";

interface LandingProps {
  presenter: LandingPresenter;
}

const Landing: FC<LandingProps> = ({ presenter }) => {
  return (
    <Flex direction="column" className="view__landing">
      <Typography
        type="h2"
        css={{
          color: "blue",
        }}
      >
        Hello World! With webpack.
      </Typography>
      <button onClick={presenter.getLocaleKey}>CLICK ME</button>
      <Loader />
    </Flex>
  );
};

export default withDependencyInjection({
  presenter: LandingPresenter,
})(observer(Landing));
