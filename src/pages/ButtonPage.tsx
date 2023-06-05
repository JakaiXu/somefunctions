import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";
import Button from "../components/Button";

function ButtonPage() {
  const handleClick = () => {};

  return (
    <div>
      <div>
        <Button
          secondary={true}
          outline={true}
          rounded={true}
          primary={false}
          success={false}
          warning={false}
          danger={false}
          className="mb-5"
          onClick={handleClick}
          onMouseEnter={undefined}
          onMouseLeave={undefined}
        >
          <GoBell />
          Click me!!
        </Button>
      </div>
      <div>
        <Button
          danger={true}
          outline={true}
          secondary={false}
          rounded={false}
          primary={false}
          success={false}
          warning={false}
          className="mb-5"
          onClick={undefined}
          onMouseEnter={handleClick}
          onMouseLeave={undefined}
        >
          <GoCloudDownload />
          Buy Now!
        </Button>
      </div>
      <div>
        <Button
          warning={true}
          danger={false}
          outline={false}
          secondary={false}
          rounded={false}
          primary={false}
          success={false}
          className="mb-5"
          onClick={undefined}
          onMouseEnter={undefined}
          onMouseLeave={handleClick}
        >
          <GoDatabase />
          See Deal!
        </Button>
      </div>
      <div>
        <Button
          warning={false}
          danger={false}
          outline={true}
          secondary={true}
          rounded={false}
          primary={false}
          success={false}
          className="mb-5"
          onClick={undefined}
          onMouseEnter={undefined}
          onMouseLeave={undefined}
        >
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button
          warning={false}
          danger={false}
          outline={false}
          secondary={false}
          rounded={true}
          primary={true}
          success={false}
          className="mb-5"
          onClick={undefined}
          onMouseEnter={undefined}
          onMouseLeave={undefined}
        >
          Something!
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
