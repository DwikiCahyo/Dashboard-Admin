interface SidebarProps {
  title: string;
}

function Sidebar({ title }: SidebarProps) {
  return (
    <div className="col-12 col-md-2 bg-white" style={{ padding: "0px" }}>
      <h5 className="mt-5 px-4 fw-normal text-uppercase" id="heading-title">
        {title}
      </h5>
      <div
        className="w-100 mt-3 py-3 px-4 d-flex align-items-center"
        id="heading-sub"
      >
        <h6 className="fw-semibold">{title}</h6>
      </div>
    </div>
  );
}

export default Sidebar;
