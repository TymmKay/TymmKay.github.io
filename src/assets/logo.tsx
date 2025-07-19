import logoPng from '../../public/assets/logo.svg'; 

const LogoImage = ({ width = "24", height = "24", alt = "logo", ...props }) => {
  return (
    <img
      src={logoPng.src}
      alt={alt}
      width={width}
      height={height}
      {...props}
    />
  );
};

export default LogoImage;