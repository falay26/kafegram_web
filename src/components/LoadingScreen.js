import { Triangle } from "react-loader-spinner";

const LoadingScreen = () => {
  return (
    <div className="max_flex">
      <Triangle
        height="160"
        width="160"
        color="#ac7b58"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};

export default LoadingScreen;
