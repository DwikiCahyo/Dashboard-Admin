import { Breadcrumb } from "react-bootstrap";

interface Breadcrumbprops {
  location: string[];
}

function Breadcrumbs({ location }: Breadcrumbprops) {
  return (
    <div className="mt-3">
      <Breadcrumb>
        {location.map((path) => (
          <Breadcrumb.Item key={path}>{path}</Breadcrumb.Item>
        ))}
      </Breadcrumb>
    </div>
  );
}

export default Breadcrumbs;
