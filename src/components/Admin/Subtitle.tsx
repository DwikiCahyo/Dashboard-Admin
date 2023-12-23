import '../../pages/AdminPages/Dashboard/style.css';

interface SubtitleProps {
  subtitle: string;
}

function Subtitle({ subtitle }: SubtitleProps) {
  return (
    <div className="d-flex align-items-end  ">
      <div className="bg-subtitle"></div>
      <h6 className="fw-semibold ms-2">{subtitle}</h6>
    </div>
  );
}

export default Subtitle;
