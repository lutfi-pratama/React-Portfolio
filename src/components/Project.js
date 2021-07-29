const Project = ({
  src,
  title,
  title_shape,
  modal,
  setModal,
  description,
  link,
}) => {
  const handleModal = () => {
    setModal(!modal);
  };
  return (
    <>
      <p className={`project-title ${title_shape}`}>{title}</p>
      <img className="project" src={src} alt="" />
      <button onClick={handleModal} className="project-detail">
        Detail
      </button>

      {modal && (
        <div>
          <div onClick={handleModal} className="backdrop"></div>
          <p className="detail">{description}</p>
          <a className="project-link" href={link}>
            {link}
          </a>
        </div>
      )}
    </>
  );
};

export default Project;
