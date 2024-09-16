import React, {
  useRef,
  FC,
  PropsWithChildren,
  ChangeEventHandler,
} from "react";
import "./UploadButton.css";

const UploadButton: FC<
  PropsWithChildren<{
    onChange?: ChangeEventHandler<HTMLInputElement>;
    accept?: string;
  }>
> = ({ onChange, children, accept = ".txt" }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div>
      <input
        type="file"
        onChange={onChange}
        accept={accept}
        ref={fileInputRef}
        className="upload-input"
        data-testid="upload-input"
      />
      <button
        className="upload-button"
        data-testid="upload-button"
        onClick={handleButtonClick}
      >
        {children}
      </button>
    </div>
  );
};

export default UploadButton;
