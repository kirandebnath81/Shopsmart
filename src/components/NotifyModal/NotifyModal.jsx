import "./NotifyModal.css";

const NotifyModal = ({ content, handleModalClick }) => {
  return (
    <div className="notifyModal__wrapper">
      <div className="notifyModal__container">
        <div className="notifyModal__content">{content}</div>
        <div className="notifyModal__btn" onClick={handleModalClick}>
          OK
        </div>
      </div>
    </div>
  );
};

export default NotifyModal;
