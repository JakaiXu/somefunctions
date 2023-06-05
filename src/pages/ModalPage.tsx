import React, { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";
const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <div>
      <Button
        secondary={false}
        outline={false}
        rounded={false}
        primary={true}
        success={false}
        warning={false}
        danger={false}
        className="mb-5"
        onClick={handleClick}
        onMouseEnter={undefined}
        onMouseLeave={undefined}
      >
        Open Modal
      </Button>

      {showModal && (
        <Modal
          onClose={handleClose}
          actionBar={
            <div>
              <Button
                secondary={false}
                outline={false}
                rounded={false}
                primary={true}
                success={false}
                warning={false}
                danger={false}
                className="mb-5"
                onClick={handleClose}
                onMouseEnter={undefined}
                onMouseLeave={undefined}
              >
                I accept
              </Button>
            </div>
          }
        >
          <p>this is an import an agreement to accept</p>
        </Modal>
      )}
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc finibus ipsum vitae pulvinar gravida. Nam ut turpis est. Phasellus lacinia, urna sit amet placerat tincidunt, ex risus malesuada arcu, vel pretium risus dui sed nisi. In sed nisi a mauris pretium dignissim. Fusce ornare lacus ut eros mattis consequat. Etiam scelerisque tortor mi, vel semper urna bibendum nec. Nulla tempor sapien risus.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc finibus ipsum vitae pulvinar gravida. Nam ut turpis est. Phasellus lacinia, urna sit amet placerat tincidunt, ex risus malesuada arcu, vel pretium risus dui sed nisi. In sed nisi a mauris pretium dignissim. Fusce ornare lacus ut eros mattis consequat. Etiam scelerisque tortor mi, vel semper urna bibendum nec. Nulla tempor sapien risus.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc finibus ipsum vitae pulvinar gravida. Nam ut turpis est. Phasellus lacinia, urna sit amet placerat tincidunt, ex risus malesuada arcu, vel pretium risus dui sed nisi. In sed nisi a mauris pretium dignissim. Fusce ornare lacus ut eros mattis consequat. Etiam scelerisque tortor mi, vel semper urna bibendum nec. Nulla tempor sapien risus.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc finibus ipsum vitae pulvinar gravida. Nam ut turpis est. Phasellus lacinia, urna sit amet placerat tincidunt, ex risus malesuada arcu, vel pretium risus dui sed nisi. In sed nisi a mauris pretium dignissim. Fusce ornare lacus ut eros mattis consequat. Etiam scelerisque tortor mi, vel semper urna bibendum nec. Nulla tempor sapien risus.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc finibus ipsum vitae pulvinar gravida. Nam ut turpis est. Phasellus lacinia, urna sit amet placerat tincidunt, ex risus malesuada arcu, vel pretium risus dui sed nisi. In sed nisi a mauris pretium dignissim. Fusce ornare lacus ut eros mattis consequat. Etiam scelerisque tortor mi, vel semper urna bibendum nec. Nulla tempor sapien risus.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc finibus ipsum vitae pulvinar gravida. Nam ut turpis est. Phasellus lacinia, urna sit amet placerat tincidunt, ex risus malesuada arcu, vel pretium risus dui sed nisi. In sed nisi a mauris pretium dignissim. Fusce ornare lacus ut eros mattis consequat. Etiam scelerisque tortor mi, vel semper urna bibendum nec. Nulla tempor sapien risus.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc finibus ipsum vitae pulvinar gravida. Nam ut turpis est. Phasellus lacinia, urna sit amet placerat tincidunt, ex risus malesuada arcu, vel pretium risus dui sed nisi. In sed nisi a mauris pretium dignissim. Fusce ornare lacus ut eros mattis consequat. Etiam scelerisque tortor mi, vel semper urna bibendum nec. Nulla tempor sapien risus.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc finibus ipsum vitae pulvinar gravida. Nam ut turpis est. Phasellus lacinia, urna sit amet placerat tincidunt, ex risus malesuada arcu, vel pretium risus dui sed nisi. In sed nisi a mauris pretium dignissim. Fusce ornare lacus ut eros mattis consequat. Etiam scelerisque tortor mi, vel semper urna bibendum nec. Nulla tempor sapien risus.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc finibus ipsum vitae pulvinar gravida. Nam ut turpis est. Phasellus lacinia, urna sit amet placerat tincidunt, ex risus malesuada arcu, vel pretium risus dui sed nisi. In sed nisi a mauris pretium dignissim. Fusce ornare lacus ut eros mattis consequat. Etiam scelerisque tortor mi, vel semper urna bibendum nec. Nulla tempor sapien risus.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc finibus ipsum vitae pulvinar gravida. Nam ut turpis est. Phasellus lacinia, urna sit amet placerat tincidunt, ex risus malesuada arcu, vel pretium risus dui sed nisi. In sed nisi a mauris pretium dignissim. Fusce ornare lacus ut eros mattis consequat. Etiam scelerisque tortor mi, vel semper urna bibendum nec. Nulla tempor sapien risus.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc finibus ipsum vitae pulvinar gravida. Nam ut turpis est. Phasellus lacinia, urna sit amet placerat tincidunt, ex risus malesuada arcu, vel pretium risus dui sed nisi. In sed nisi a mauris pretium dignissim. Fusce ornare lacus ut eros mattis consequat. Etiam scelerisque tortor mi, vel semper urna bibendum nec. Nulla tempor sapien risus.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc finibus ipsum vitae pulvinar gravida. Nam ut turpis est. Phasellus lacinia, urna sit amet placerat tincidunt, ex risus malesuada arcu, vel pretium risus dui sed nisi. In sed nisi a mauris pretium dignissim. Fusce ornare lacus ut eros mattis consequat. Etiam scelerisque tortor mi, vel semper urna bibendum nec. Nulla tempor sapien risus.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc finibus ipsum vitae pulvinar gravida. Nam ut turpis est. Phasellus lacinia, urna sit amet placerat tincidunt, ex risus malesuada arcu, vel pretium risus dui sed nisi. In sed nisi a mauris pretium dignissim. Fusce ornare lacus ut eros mattis consequat. Etiam scelerisque tortor mi, vel semper urna bibendum nec. Nulla tempor sapien risus.</p>
    </div>
  );
};

export default ModalPage;
