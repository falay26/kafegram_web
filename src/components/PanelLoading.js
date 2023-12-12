import { Triangle } from "react-loader-spinner";

const PanelLoading = () => {
  return (
    <div className="panel_max">
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

export default PanelLoading;
